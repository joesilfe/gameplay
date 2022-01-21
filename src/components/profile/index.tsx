import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { getBottomSpace } from 'react-native-iphone-x-helper'
import { RectButton } from 'react-native-gesture-handler';

import { styles } from './styles';

import { Avatar } from '../avatar';

import useAuth from '../../hook/useAuth';
import useModal from '../../hook/useModal';

export function Profile() {

    const { user } = useAuth();
    const { handleOpenModal } = useModal();
    
    const uri = 'https://github.com/joesilfe.png';

    const avatar = user.avatar === null ? uri : user.avatarUri

    function handleSignOutModal() {
        handleOpenModal()
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

            {/* <ModalView
                visible={signOutModal}
                open={handleSignOutModal}
                heigthModal={{ height: 174 + getBottomSpace() }}
            >
                <SignOut open={handleSignOutModal} />
            </ModalView> */}
            

        </View>
    )

}