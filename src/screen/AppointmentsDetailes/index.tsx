import React, { useState, useEffect } from 'react';
import { Feather, Fontisto } from '@expo/vector-icons'
import {
    ImageBackground,
    Text,
    View,
    FlatList,
    RefreshControl,
    Share,
    Platform,
    Alert
} from 'react-native';
import { useRoute } from '@react-navigation/native';
import * as Linking from 'expo-linking';

import { Header } from '../../components/header';
import { Background } from '../../layout/background';
import { ListHeader } from '../../components/listHeader';
import { Member, MemberProps } from '../../components/member';
import { ButtonsIcon } from './../../components/buttonsIcon';
import { Load } from './../../components/load';

import { theme } from '../../global/styles/theme';
import BannerImg from '../../../assets/banner.png';
import DiscordImg from '../../assets/discord.png';

import { styles } from './styles';
import { ListDivider } from '../../components/listDivider';
import { FixedBottom } from '../../layout/FixedBottom';
import * as C from '../../components/BorderlessButtons';
import { AppointmentsProps } from '../../components/appointments';
import { api } from '../../services/api';
import { Message } from '../../components/message';

type Params = {
    guildSelected: AppointmentsProps;
}

type Error = {
    message: string,
    status: string,
}

type GuildWidget = {
    id: string;
    name: string;
    instant_invite: string;
    members: MemberProps[];
}

export function AppointmentsDetailes() {

    const route = useRoute();
    const { guildSelected } = route.params as Params;

    const [widget, setWidget] = useState<GuildWidget>({} as GuildWidget);
    const [loading, setLoading] = useState(true);
    const [showMessage, setShowMessage] = useState(false);


    async function fetchGuildWidget() {
        await api.get<GuildWidget>(`/guilds/${guildSelected.guild.id}/widget.json`)
            .then(res => {
                console.log(res.data)
                setWidget(res.data);
                setLoading(false);
            })
            .catch(err => {
                setLoading(true);
                setShowMessage(true);
                console.log(err.message);
            })

    }

    function handleShareInvitation() {
        if (typeof widget.instant_invite === 'object') {
            const message = Platform.OS === 'ios'
                ? `Junte-se a ${guildSelected.guild.name}`
                : widget.instant_invite;

            Share.share({
                message,
                url: widget.instant_invite
            })
        } else {
            Alert.alert('Verifique se está habilitado no servidor a opção de invite.')
        }
    }

    function handleOpenGuild() {
        Linking.openURL(widget.instant_invite)
    }

    useEffect(() => {
        fetchGuildWidget();
    }, []);

    return (
        <Background style={styles.container}>
            <Header
                title='Detalhes'
                action={
                    guildSelected.guild.owner &&
                    <C.BorderlessButtons
                        sty={{ alignItems: 'flex-end' }}
                        onPress={handleShareInvitation}
                    >
                        <Fontisto
                            name='share'
                            size={16}
                            color={theme.colors.primary}
                        />
                    </ C.BorderlessButtons>
                }
            />

            <ImageBackground
                source={BannerImg}
                style={styles.banner}
            >
                <View style={styles.bannerContent} >
                    <Text style={styles.title}>{guildSelected.guild.name}</Text>

                    <Text style={styles.description}>{guildSelected.description}</Text>
                </View>
            </ImageBackground >

            {
                loading ?
                    showMessage ?
                        <Message
                            message='Não foi possível conectar com o servidor, verifique as configurações do Widget do servidor.'
                            icon={
                                <Feather
                                    name={'info'}
                                    size={32}
                                    color={theme.colors.primary}
                                />
                            }
                        />
                        :
                        <Load />
                    :
                    <>
                        <ListHeader
                            title='Jogadores'
                            subtitle={`Total ${widget.members.length}`}
                        />

                        <FlatList
                            data={widget.members}
                            keyExtractor={item => item.id}
                            refreshControl={
                                <RefreshControl
                                    colors={[theme.colors.heading]}
                                    tintColor={theme.colors.primary}
                                    refreshing={loading}
                                    onRefresh={fetchGuildWidget}
                                    progressBackgroundColor={theme.colors.primary}
                                />
                            }
                            renderItem={({ item }) => (
                                <Member
                                    key={item.id}
                                    data={item}
                                />
                            )}
                            ItemSeparatorComponent={() => <ListDivider />}
                            contentContainerStyle={styles.members}
                        />

                        {
                            guildSelected.guild.owner &&
                            <FixedBottom >
                                <ButtonsIcon
                                    title='Entrar no servidor do Discord'
                                    source={DiscordImg}
                                    onPress={handleOpenGuild}
                                />
                            </FixedBottom >
                        }
                    </>
            }
        </Background>
    )
}