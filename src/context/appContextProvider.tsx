import React, { FC } from 'react';
import { combineComponents } from './../util/combineComponents';

import { AuthProvider } from './authContext';

type ProviderProps = FC<{}>

const providers: ProviderProps[] = [
    AuthProvider as ProviderProps,
]

export const AppContextProvider = combineComponents(...providers);