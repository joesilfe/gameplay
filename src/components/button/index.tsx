import React from 'react';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler'
import {
    Text,
    TouchableOpacity,
    TouchableOpacityProps,
} from 'react-native';

import { styles } from './styles';

type Props = RectButtonProps & {
    title: string;
    sty?: Object;
}

type ButtonsProps = TouchableOpacityProps & {
    title: string;
    sty?: Object;
}

export function ButtonsTouchableOpacity({ sty, title, ...rest }: ButtonsProps) {
    return (
        <TouchableOpacity
            style={[styles.container, sty]}
            {...rest}
        >
            <Text style={styles.title}>
                {title}
            </Text>
        </TouchableOpacity>
    )
}

export function Buttons({ sty, title, ...rest }: Props) {

    return (
        <RectButton style={[styles.container, sty]} {...rest} >
            <Text style={styles.title}>{title}</Text>
        </ RectButton>
    )

}