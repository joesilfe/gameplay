import React, { useContext } from 'react';
import { BottomSheetModalViewContext } from '../context/BottomSheetModalViewContext';

export default function useModal() {
    const context = useContext(BottomSheetModalViewContext)

    return context;
}