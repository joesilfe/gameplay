import React from 'react';
import {
    View,
    Text,
} from 'react-native';

import { ButtonsTouchableOpacity } from '../../components/button';

import LogoSvg from '../../assets/logo.svg'
import useAuth from '../../hook/useAuth';

import { styles } from './styles';

import useModal from '../../hook/useModal';


export function SignOut() {

    const { signOut } = useAuth();
    const { handleCloseModal } = useModal();

    function handerSignOut(){
        handleCloseModal()
        signOut()
    }

    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.message}>
                    Deseja sair do
                </Text>

                <LogoSvg />

                <Text style={styles.message}>?</Text>
            </View>
            <View style={styles.footer}>
                <ButtonsTouchableOpacity
                    title='Não'
                    onPress={handleCloseModal}
                    sty={styles.buttomNo} 
                    activeOpacity={1}    
                />

                <ButtonsTouchableOpacity
                    title='Sim'
                    onPress={handerSignOut}
                    sty={styles.buttomYes} 
                    activeOpacity={1}    
                />
            </View>
        </View>
    )

}