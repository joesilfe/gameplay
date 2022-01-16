import React, { useState } from 'react';
import { Alert, Text, View } from 'react-native';
import { GestureHandlerRootView, RectButton } from 'react-native-gesture-handler';

import { styles } from './styles';

import { Avatar } from '../avatar';
import { SignOut } from '../../screen/SignOut';
import { ModalView } from '../modalView';

import useAuth from '../../hook/useAuth';

export function Profile() {

    const { user, signOut } = useAuth();
    const [signOutModal, setSignOutModal] = useState<boolean>(false);

    const uri = 'https://github.com/joesilfe.png';

    const avatar = user.avatar === null ? uri : user.avatarUri

    function handleSignOutModal() {
        setSignOutModal(isOpen => !isOpen);
    };

    // function handleSignOut() {
    //     Alert.alert('Logout', 'Deseja sair do Gameplay?',
    //         [
    //             {
    //                 text: 'Não',
    //                 style: 'cancel'
    //             },
    //             {
    //                 text: 'Sim',
    //                 onPress: () => signOut()
    //             },
    //         ]
    //     )
    // }

    return (
        <View style={styles.container}>

            <RectButton onPress={handleSignOutModal}>
                <Avatar urlImage={avatar} />
            </RectButton>

            <View>
                <View style={styles.user}>
                    <Text style={styles.greeting}>
                        Olá,
                    </Text>

                    <Text style={styles.username}>
                        {user.firstName}
                    </Text>
                </View>
                <Text style={styles.message}>
                    Hoje é dia de vitória
                </Text>
            </View>

            <ModalView
                visible={signOutModal}
                open={handleSignOutModal}
                heigthModal={{height: 174}}
            >
                <SignOut open={handleSignOutModal}/>
            </ModalView>

        </View>
    )

}