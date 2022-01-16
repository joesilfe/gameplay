import React from 'react';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler'
import {
    View,
    Text,
    Image,
    ImageSourcePropType,
} from 'react-native';

import { styles } from './styles';



type Props = RectButtonProps & {
    title: string;
    source: ImageSourcePropType;
}

export function ButtonsIcon({ title, source, ...rest }: Props) {

    return (
        <RectButton style={styles.container} {...rest}>
            <View style={styles.iconWrapper}>
                <Image
                    source={source}
                    style={styles.icon}
                />
            </ View >
            <Text style={styles.title}>{title}</Text>
        </ RectButton>
    )

}