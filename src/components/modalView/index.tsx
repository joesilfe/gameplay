import React, { ReactNode } from 'react';
import {
    View,
    Modal,
    ModalProps,
    TouchableOpacity,
} from 'react-native';

import { Background } from '../../layout/background';

import { styles } from './styles';

type Props = ModalProps & {
    heigthModal?: Object;
    children: ReactNode;
    open: () => void;
}

export function ModalView({
    heigthModal,
    open,
    children,
    ...rest
}: Props) {

    return (
        <Modal
            statusBarTranslucent
            transparent
            animationType='slide'
            {...rest}
        >
            <View style={styles.overlay} >
                <TouchableOpacity
                    style={styles.closeOverlay}
                    activeOpacity={1}
                    onPress={open}
                />

                <View style={heigthModal || styles.container}>
                    <Background>
                        {/* <View style={styles.bar} /> */}
                        {children}
                    </Background>
                </View>
            </View>
        </Modal >
    )
}