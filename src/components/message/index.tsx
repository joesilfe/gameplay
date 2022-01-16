import React, { ReactNode } from 'react';

import { Text, View, ScrollView } from 'react-native';

import { styles } from './styles';

type MessageProps = {
    message: string;
    icon?: ReactNode;
}

export function Message({ message, icon }: MessageProps) {

    return (
        <ScrollView>
            <View style={styles.container}>
                {icon}
                <Text style={styles.messageContent}>{message}</Text>
            </View>
        </ScrollView>
    );
}