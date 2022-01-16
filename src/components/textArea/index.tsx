import React from 'react';
import { TextInput, TextInputProps } from 'react-native';
import { theme } from '../../global/styles/theme';
import { Background } from '../../layout/background';

import { styles } from './styles';

type Props = TextInputProps & {
    ml?: number;
    mr?: number;
}

export function TextArea({ ml, mr, ...rest }: Props) {

    const linearGradient =
        [
            theme.colors.secondary50,
            theme.colors.secondary70,
        ]

    return (
        <Background
            style={styles.container}
            linearGradient={linearGradient}
        >
            <TextInput
                style={styles.input}
                placeholderTextColor={theme.colors.heading}
                {...rest}
            />
        </Background>
    )

}