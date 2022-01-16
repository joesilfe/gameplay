import React, { ReactNode } from 'react';
import { Text, View } from 'react-native';
import { Background } from '../../layout/background';
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons'

import { styles } from './styles';
import { theme } from '../../global/styles/theme';

import * as C from '../BorderlessButtons'


type Props = {
    title: string;
    action?: ReactNode;
}

export function Header({ title, action }: Props) {

    const navigation = useNavigation();

    const linearGradient =
        [
            theme.colors.secondary100,
            theme.colors.secondary40,
        ]

    function handleGoBack() {
        navigation.goBack();
    }

    return (
        <Background
            style={styles.container}
            linearGradient={linearGradient}
        >
            <C.BorderlessButtons onPress={handleGoBack}>
                <Feather
                    name="arrow-left"
                    size={24}
                    color={theme.colors.heading}
                />
            </ C.BorderlessButtons>

            <Text style={styles.title}>
                {title}
            </Text>

            {
                action ?
                    (<View>{action}</View>)
                    :
                    (<C.BorderlessButtons />)
            }
        </Background>
    );
}