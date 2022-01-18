import React, { useState, useCallback, useMemo, useRef, ReactNode } from 'react';

import BottomSheet, { BottomSheetView, BottomSheetBackdrop  } from '@gorhom/bottom-sheet';

import {
    View,
    Modal,
    ModalProps,
    TouchableOpacity,
    Text,
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

export function BottomSheetModalView() {

    // ref
    const bottomSheetRef = useRef<BottomSheet>(null);
    const [isOpen, setIsOpen] = useState(true);

    // variables
    const snapPoints = useMemo(() => ['1%', '55%'], []);

    // callbacks
    const handleSheetChanges = useCallback((index: number) => {
        console.log('handleSheetChanges', index);
        setIsOpen(true)
    }, []);

    const renderBackdrop = useCallback(
        props => (
          <BottomSheetBackdrop
            {...props}
            animatedPosition={false}
            disappearsOnIndex={false}
            appearsOnIndex={true}
            opacity={0.8}
            enableTouchThrough={true}
          />
        ),
        []
      );


    return (
        <BottomSheet
            backdropComponent={renderBackdrop}
            ref={bottomSheetRef}
            index={1}
            snapPoints={snapPoints}
            onChange={handleSheetChanges}
            enablePanDownToClose={true}
            onClose={() => setIsOpen(false)}
        >
            <BottomSheetView style={styles.overlay}>
                <View style={styles.overlay} >

                    <View style={styles.container}>
                        <Background>
                            {/* <View style={styles.bar} /> */}
                            <Text>Awesome 🎉</Text>
                        </Background>
                    </View>
                </View>

            </BottomSheetView>
        </BottomSheet>
    )
}