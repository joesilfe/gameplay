import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { SignIn } from './../screen/Signin';
import { AppRoutes } from './app.routes';

import useAuth from '../hook/useAuth';

export function Routes() {
    const { user } = useAuth()

    return (
        <NavigationContainer>
            {user.id
                ? <AppRoutes />
                : <SignIn />
            }
        </NavigationContainer>
    )
}