import React, { ReactNode } from 'react';
import { FlexStyle } from 'react-native';
import { BorderlessButton, BorderlessButtonProps } from 'react-native-gesture-handler'

import { styles } from './styles';

type Props = BorderlessButtonProps & {
    children?: ReactNode;
    sty?: FlexStyle;
}

export function BorderlessButtons({ children, sty, ...rest }: Props) {

    return (
        <BorderlessButton
            style={[styles.btn, { ...sty }]}
            {...rest}
        >
            {children}
        </ BorderlessButton>
    );
}