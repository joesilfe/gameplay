import React from 'react';

import { Avatar } from '../avatar';
import { Text, View } from 'react-native';

import { styles } from './styles';
import { theme } from '../../global/styles/theme';

export type MemberProps = {
    id: string;
    username: string;
    avatar_url: string;
    status: string;
}

type Props = {
    data: MemberProps;
}

export function Member({ data }: Props) {

    const { on, primary } = theme.colors;
    const isOnline = data.status === 'online';
    const hasOnline = isOnline ? on : primary;

    return (
        <View style={styles.container}>
            <Avatar urlImage={data.avatar_url} />

            <View>
                <Text style={styles.username}>
                    {data.username}
                </Text>

                <View style={styles.status}>

                    <View style={
                        [
                            styles.statusBullets, {
                                backgroundColor: hasOnline
                            }
                        ]
                    } />

                    <Text style={styles.nameStatus}>
                        {isOnline ? 'Disponivel' : 'Ocupado'}
                    </Text>
                </View>
            </View>
        </View>
    );
}