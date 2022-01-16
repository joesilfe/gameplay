import React, { ReactNode } from 'react';
import { Text, View } from 'react-native';

import { styles } from './styles';

type Props = {
    title: string;
    subtitle?: string;
    mb?: number;
}

export function ListHeader({ title, subtitle, mb,  }: Props) {

    return (
        <View style={[styles.container, { marginBottom: mb }]}>
            <Text style={styles.title}>
                {title}
            </Text>
            <Text style={styles.subtitle}>
                {subtitle}
            </Text>
        </View>
    );

}