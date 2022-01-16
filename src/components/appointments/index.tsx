import React from 'react';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler'
import { View, Text } from 'react-native';

import PlayerSvg from '../../assets/player.svg'
import CalendarSvg from '../../assets/calendar.svg'

import { styles } from './styles';
import { GuildProps } from '../guild';
import { GuidIcon } from '../guidIcon';
import { categories } from '../../util/category';
import { theme } from '../../global/styles/theme';
import { Background } from '../../layout/background';


export type AppointmentsProps = {
    id: string;
    guild: GuildProps;
    category: string;
    date: string;
    hours: string;
    description: string;
}

type Props = RectButtonProps & {
    data: AppointmentsProps;
}

export function Appointments({ data, ...rest }: Props) {

    const [category] = categories.filter(item => item.id === data.category);
    const { owner } = data.guild;
    const { primary, on } = theme.colors

    const isOwner = owner ? primary : on
    const hostOrVisitor = owner ? 'Anfitrião' : 'Visitante'

    const linearGradient =
        [
            theme.colors.secondary50,
            theme.colors.secondary70,
        ]
    
    return (
        <RectButton
            {...rest}
        >
            <View style={styles.container}>
                <Background
                    linearGradient={linearGradient}
                    style={styles.icon}
                >
                    <GuidIcon guildId={data.guild.id} iconId={data.guild.icon} />
                </Background>

                <View style={styles.content}>
                    <View style={styles.header}>

                        <Text style={styles.title}>
                            {data.guild.name}
                        </Text>

                        <Text style={styles.category}>
                            {category.title}
                        </Text>
                    </View>

                    <View style={styles.footer}>
                        <View style={styles.dateInfo}>
                            <CalendarSvg />

                            <Text style={styles.date}>
                                {`${data.date} às ${data.hours}h`}
                            </Text>
                        </View>

                        <View style={styles.playerInfo}>
                            <PlayerSvg fill={isOwner} />

                            <Text style={
                                [
                                    styles.player,
                                    { color: isOwner }
                                ]
                            }>
                                {hostOrVisitor}
                            </Text>
                        </View>
                    </View>

                </View>

            </View>
        </RectButton>
    )

}