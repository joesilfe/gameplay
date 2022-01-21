import React, {
    useState,
    useCallback,
    useMemo,
    useRef,
    ReactNode
} from 'react';

import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet';

import { getBottomSpace } from 'react-native-iphone-x-helper';

import { CustomBackground } from './customBackground';
import { CustomBackdrop } from './customBackdrop';


import { styles } from './styles';

import useModal from '../../hook/useModal';

type Props = {
    children: ReactNode;
}

export function BottomSheetModalView({ children }: Props) {

    const { isOpen, handleCloseModal } = useModal()

    // ref
    const bottomSheetRef = useRef<BottomSheet>(null);

    // variables
    const snapPoints = useMemo(() => [0.1, 200 + getBottomSpace()], []);

    // callbacks
    const handleSheetChanges = useCallback((index: number) => {
        console.log('handleSheetChanges', index);

        if(index === 0){
            return handleCloseModal();
        }
    }, []);

    const renderBackdrop = useCallback((props) => (
        <CustomBackdrop {...props} />
    ), []);

    return (
        <BottomSheet
            backdropComponent={renderBackdrop}
            backgroundComponent={CustomBackground}
            ref={bottomSheetRef}
            index={isOpen}
            snapPoints={snapPoints}
            onChange={handleSheetChanges}
            enablePanDownToClose={true}
            onClose={handleCloseModal}
            handleIndicatorStyle={styles.bar}
        >
            <BottomSheetView style={styles.container}>
                {children}
            </BottomSheetView>
        </BottomSheet>
    )
}