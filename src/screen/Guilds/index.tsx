import React, { useState, useEffect } from 'react';
import {
    View,
    FlatList,
    Text,
    RefreshControl
} from 'react-native';

import { ListDivider } from '../../components/listDivider';
import { theme } from '../../global/styles/theme';
import { api } from '../../services/api';
import { Guild, GuildProps } from './../../components/guild';
import { Load } from './../../components/load';

import { styles } from './styles';

type Props = {
    handleGuildsSelected: (guild: GuildProps) => void;
}

export function Guilds({ handleGuildsSelected }: Props) {

    const [guilds, setGuilds] = useState<GuildProps[]>([]);

    const [loading, setLoading] = useState(true);

    async function fechtGuilds() {
        await api.get('/users/@me/guilds')
            .then(res => {
                setGuilds(res.data);
                setLoading(false);
                return
            })
            .catch(err => {
                setLoading(true);
                throw new Error(err);
            })
    }

    useEffect(() => {
        fechtGuilds();
    }, [])

    return (
        <View style={styles.container}>

            <Text style={styles.title}>Selecione um servidor</Text>

            {
                loading
                    ?
                    <Load />
                    :
                    <FlatList
                        data={guilds}
                        refreshControl={
                            <RefreshControl
                                colors={[theme.colors.heading]}
                                tintColor={theme.colors.primary}
                                refreshing={loading}
                                onRefresh={fechtGuilds}
                                progressBackgroundColor={theme.colors.primary}
                            />
                        }

                        keyExtractor={item => item.id}
                        renderItem={({ item }) => (
                            <Guild
                                data={item}
                                onPress={() => handleGuildsSelected(item)}
                            />
                        )}
                        ItemSeparatorComponent={() => <ListDivider />}
                        showsVerticalScrollIndicator={false}
                        contentContainerStyle={styles.guildsSpace}
                        style={styles.guilds}
                    />
            }
        </ View>
    )
}