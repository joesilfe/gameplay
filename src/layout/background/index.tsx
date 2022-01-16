import React, { ReactNode } from 'react';
import { LinearGradient} from 'expo-linear-gradient';

import { styles } from './styles';
import { theme } from '../../global/styles/theme';

type Props = {
    children: ReactNode;
    style?: Object;
    linearGradient?: string[];
}

export function Background(props: Props) {

    const linearGradient =
        props.linearGradient ||
        [theme.colors.secondary80, theme.colors.secondary100]

    return (
        <LinearGradient
            style={props.style || styles.container}
            colors={linearGradient}
        >
            {props.children}
        </ LinearGradient >
    )

}