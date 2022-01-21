import React, { useState } from 'react';
import { Feather } from '@expo/vector-icons'
import {
    View,
    Platform,
    ScrollView,
    KeyboardAvoidingView,
    Text,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage'
import uuid from 'react-native-uuid'
import { RectButton } from 'react-native-gesture-handler';


import { Header } from '../../components/header';
import { ListHeader } from '../../components/listHeader';
import { Background } from '../../layout/background';
import { CategorySelect } from '../../components/categorySelect';
import { GuidIcon } from '../../components/guidIcon';
import { SmallInput } from '../../components/smallInput';
import { TextArea } from '../../components/textArea';
import { Buttons } from '../../components/button';
import { ModalView } from '../../components/modalView';
import { Guilds } from '../Guilds';

import { theme } from '../../global/styles/theme';
import { maskDayMonth, maskHourMinute } from '../../util/masks';
import { styles } from './styles';

import { GuildProps } from '../../components/guild';
import { COLLECTION_APPOINTMENTS } from '../../configs/database';
import { BottomSheetModalView } from '../../components/BottomSheetModalView';
import useModal from '../../hook/useModal';
import { Message } from '../../components/message';


export function AppointmentsCreate() {

    const navigation = useNavigation();

    const { handleOpenModal } = useModal()

    const [category, setCategory] = useState<string>('');
    const [openGuildsModal, setOpenGuildsModal] = useState<boolean>(false);
    const [guild, setGuild] = useState<GuildProps>({} as GuildProps);

    const [hourMinute, setHourMinute] = useState('');
    const [dayMonth, setDayMonth] = useState('');
    const [description, setDescription] = useState('');

    function handletHourMinute(text: string) {
        const value = maskHourMinute(text)
        setHourMinute(value)
    };

    function handleDayMonth(text: string) {
        const value = maskDayMonth(text)
        setDayMonth(value)
    };


    function handleCategorySelect(categoryId: string) {
        setCategory(categoryId)
    };

    function handleOpenGuild() {
        setOpenGuildsModal(isOpen => !isOpen);
    };

    function handleGuildSelected(guildSelected: GuildProps) {
        setOpenGuildsModal(isOpen => !isOpen);
        setGuild(guildSelected);
    };

    async function handleSave() {


        if (category && guild.id && hourMinute && dayMonth && description) {
            const newAppointment = {
                id: uuid.v4(),
                guild,
                category,
                date: dayMonth,
                hours: hourMinute,
                description,
            }

            const storage = await AsyncStorage.getItem(COLLECTION_APPOINTMENTS);
            const appointments = storage ? JSON.parse(storage) : []

            await AsyncStorage.setItem(
                COLLECTION_APPOINTMENTS,
                JSON.stringify([...appointments, newAppointment])
            );

            navigation.navigate('home');

        } else {
            return handleOpenModal();
        }


    }


    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={styles.container}
        >

            <Background style={styles.container}>
                <Header
                    title='Agendar partida'
                />
                <ScrollView>
                    <ListHeader title='Categoria' mb={24} />

                    <View>
                        <CategorySelect
                            hasChecBox
                            setCategory={handleCategorySelect}
                            categorySelected={category}
                        />
                    </View>

                    <View style={styles.form}>
                        <RectButton onPress={handleOpenGuild}>
                            <View style={styles.select}>

                                <GuidIcon guildId={guild.id} iconId={guild.icon} />

                                <View style={styles.selectBody}>
                                    <Text style={styles.label}>
                                        {guild.name ? guild.name : 'Selecione um servidor'}
                                    </Text>

                                </View>

                                {
                                    Object.keys(guild).length !== 0 ?
                                        <RectButton
                                            style={styles.trash}
                                            onPress={() => setGuild({} as GuildProps)}
                                        >
                                            <Feather
                                                name="trash-2"
                                                color={theme.colors.primary}
                                                size={18}
                                            />
                                        </RectButton>
                                        :
                                        <Feather
                                            style={styles.add}
                                            name='chevron-right'
                                            color={theme.colors.heading}
                                            size={18}
                                        />}

                            </View>
                        </RectButton>

                        <View style={styles.field}>

                            <View style={[styles.column, { marginRight: 8, }]}>
                                <Text style={[styles.label, {
                                    marginBottom: 12,
                                }]}>Dia e Mês</Text>
                                <SmallInput
                                    maxLength={5}
                                    placeholder="dd/mm"
                                    onChangeText={handleDayMonth}
                                    value={dayMonth}
                                />
                            </View>

                            <View style={[styles.column, { marginLeft: 8, }]}>
                                <Text style={[styles.label, {
                                    marginBottom: 12,
                                }]}>Horário</Text>
                                <SmallInput
                                    maxLength={5}
                                    placeholder="hh:mm"
                                    onChangeText={handletHourMinute}
                                    value={hourMinute}
                                />
                            </View>
                        </View>

                        <View style={styles.textArea}>
                            <View style={[styles.field, {
                                marginTop: 0, marginBottom: 12,
                            }]}>
                                <Text style={styles.label}>Descrição</Text>
                                <Text style={styles.charLimit}>Max 100 caracteres</Text>
                            </View>

                            <TextArea
                                multiline
                                maxLength={100}
                                numberOfLines={5}
                                autoCorrect={false}
                                onChangeText={setDescription}
                            />
                        </View>
                    </View>

                    <View style={styles.footer}>
                        <Buttons
                            title='Agendar'
                            onPress={handleSave}
                            sty={{ backgroundColor: theme.colors.primary }}
                        />
                    </View>

                </ScrollView>

                <ModalView
                    visible={openGuildsModal}
                    open={handleOpenGuild}
                >
                    <Guilds handleGuildsSelected={handleGuildSelected} />
                </ModalView>

                <BottomSheetModalView >
                    <Message
                        icon={
                            <Feather
                                name={'info'}
                                size={32}
                                color={theme.colors.primary}
                            />
                        }
                        message='Por favor, verifique se você preencheu todas as informações para criar sua partida.'
                    />
                </BottomSheetModalView>

            </Background>
        </KeyboardAvoidingView>
    )
}