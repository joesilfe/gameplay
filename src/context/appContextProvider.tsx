import React, { FC } from 'react';
import { combineComponents } from './../util/combineComponents';

import { AuthProvider } from './authContext';
import { BottomSheetModalViewProvider } from './BottomSheetModalViewContext';

type ProviderProps = FC<{}>

const providers: ProviderProps[] = [
    AuthProvider as ProviderProps,
    BottomSheetModalViewProvider as ProviderProps,
]

export const AppContextProvider = combineComponents(...providers);