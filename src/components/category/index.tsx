import React from 'react';
import { Text, View } from 'react-native';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';
import { SvgProps } from 'react-native-svg';

import { styles } from './styles';
import { theme } from '../../global/styles/theme';

import { Background } from '../../layout/background';


type Props = RectButtonProps & {
    title: string;
    icon: React.FC<SvgProps>;
    hasChecBox?: boolean;
    checked?: boolean;
}

export function Category({
    title,
    icon: Icon,
    hasChecBox = false,
    checked = false,
    ...rest
}: Props) {

    const linearGradient =
        [
            theme.colors.secondary40,
            theme.colors.secondary50,
            theme.colors.secondary70,
            theme.colors.secondary85,
        ]

    const linearGradientSecondary =
        [
            checked ?
                theme.colors.secondary85 :
                theme.colors.secondary40,
            theme.colors.secondary50
        ]

    return (
        <RectButton {...rest} >
            <Background
                linearGradient={linearGradient}
                style={styles.container}
            >
                <Background
                    linearGradient={linearGradientSecondary}
                    style={[styles.content, { opacity: checked ? 1 : 0.6 }]}
                >
                    {
                        hasChecBox &&
                        <View style={checked ? styles.checked : styles.check} />
                    }

                    <Icon width={48} height={48} />

                    <Text style={styles.title}>
                        {title}
                    </Text>
                </Background>
            </Background>
        </ RectButton>
    )

}