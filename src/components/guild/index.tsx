import React from 'react';
import {
    View,
    Text,
    TouchableOpacity, 
    TouchableOpacityProps
} from 'react-native';
import { Feather } from '@expo/vector-icons'
import { SvgProps } from 'react-native-svg';

import { GuidIcon } from '../guidIcon'

import { styles } from './styles';
import { theme } from '../../global/styles/theme';
import { Background } from '../../layout/background';

export type GuildProps = {
    id: string;
    name: string;
    game?: string;
    icon: React.FC<SvgProps> | null;
    owner: boolean;
}

type props = TouchableOpacityProps & {
    data: GuildProps
}

export function Guild({ data, ...rest }: props) {

    return (
        <TouchableOpacity
            style={styles.container}
            activeOpacity={0.7}
            {...rest}
        >
            <Background
                style={styles.icon}
            >
                <GuidIcon guildId={data.id} iconId={data.icon} />
            </Background>

            <View style={styles.content}>
                <Text style={styles.title}>
                    {data.name}
                </Text>

                <Text style={styles.game}>
                    { data.owner ? 'Administrador' : 'Convidado'}
                </Text>
            </View>

            <Feather
                name='chevron-right'
                color={theme.colors.heading}
                size={24}
            />
        </ TouchableOpacity>
    )
}