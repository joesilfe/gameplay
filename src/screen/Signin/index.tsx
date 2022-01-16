import React from 'react';
import {
    View,
    Text,
    Image,
    Alert,
    ActivityIndicator
} from 'react-native';

import { ButtonsIcon } from '../../components/buttonsIcon';
import { FixedBottom } from '../../layout/FixedBottom';

import { styles } from './styles';
import { theme } from '../../global/styles/theme';

import IllustationImg from '../../assets/illustration.png';
import DiscordImg from '../../assets/discord.png';
import useAuth from '../../hook/useAuth';

export function SignIn() {

    const { loading, signIn } = useAuth();

    async function handleSignIn() {
        try {
            await signIn()
        } catch (error) {
            Alert.alert(String(error))
        }
    }

    return (
        <View style={styles.container}>
            <View style={styles.info}>
                <Image
                    source={IllustationImg}
                    style={styles.image}
                    resizeMode="stretch"
                />

                <View style={styles.content}>
                    <Text style={styles.title}>
                        Conecte-se {'\n'} e organize suas {'\n'}  jogatinas
                    </Text>
                    <Text style={styles.subtitle}>
                        Crie grupos para jogar seus games {'\n'}  favoritos com seus amigos
                    </Text>
                </View>
            </View>
            <FixedBottom >
                {
                    loading
                        ?
                        <ActivityIndicator
                            color={theme.colors.primary}
                        />
                        :
                        <ButtonsIcon
                            title='Entrar com Discord'
                            source={DiscordImg}
                            onPress={handleSignIn}
                        />
                }
            </FixedBottom >
        </View>
    )

}