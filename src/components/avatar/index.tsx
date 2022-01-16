import React from 'react';
import { Image } from 'react-native';

import { Background } from '../../layout/background'
import { styles } from './styles';

import { theme } from '../../global/styles/theme';

type Props = {
    urlImage: string
}

export function Avatar({ urlImage }: Props) {

    const linearGradient = [theme.colors.secondary50, theme.colors.secondary60]

    return (
        <Background
            style={styles.container}
            linearGradient={linearGradient}
        >
            <Image
                source={{ uri: urlImage }}
                style={styles.avatar}
            />
        </Background>
    )

}