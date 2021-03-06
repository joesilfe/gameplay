import React, {
    createContext,
    ReactNode,
    useState,
    useEffect,
} from 'react';

import AsyncStorage from '@react-native-async-storage/async-storage';
import * as AuthSession from 'expo-auth-session';
import { api } from '../services/api';

import useModal from '../hook/useModal';

import {
    COLLECTION_USER,
} from './../configs/database';

type User = {
    id: string;
    username: string;
    firstName: string;
    avatar: string;
    avatarUri: string;
    email: string;
    token: string;
}

type AuthContextData = {
    user: User;
    loading: boolean;
    signIn: () => Promise<void>;
    signOut: () => Promise<void>;
}

type AuthProviderProps = {
    children: ReactNode;
}

type AuthorizarionResponse = AuthSession.AuthSessionResult & {
    params: {
        access_token?: string;
        error?: string;
    }
}

export const AuthContext = createContext({} as AuthContextData)

export function AuthProvider({ children }: AuthProviderProps) {

    const [user, setUser] = useState<User>({} as User)
    const [loading, setLoading] = useState(false);

    const { REDIRECT_URI } = process.env
    const { SCOPE } = process.env
    const { RESPONSE_TYPE } = process.env
    const { CLIENT_ID } = process.env
    const { CDN_IMAGE } = process.env

    async function signIn() {
        try {
            setLoading(true)

            const authUrl =
                `${api.defaults.baseURL}/oauth2/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=${SCOPE}`;

            const { type, params } =
                await AuthSession.startAsync({ authUrl }) as AuthorizarionResponse

            if (type === 'success' && !params.error) {
                api.defaults.headers.common['Authorization'] = `Bearer ${params.access_token}`

                const userInfo = await api.get('/users/@me')
                const firstName = userInfo.data.username.split('.', 1)[0]
                userInfo.data.avatarUri = `${CDN_IMAGE}/avatars/${userInfo.data.id}/${userInfo.data.avatar}.png`;

                const userData = {
                    ...userInfo.data,
                    firstName,
                    token: params.access_token
                }

                await AsyncStorage.setItem(COLLECTION_USER, JSON.stringify(userData))
                setUser(userData);
            }

        } catch (error) {

            console.log(error)
            throw new Error('N??o foi poss??vel autenticar!')

        } finally {
            setLoading(false)
        }
    }

    async function loadUserDataBase() {
        const storage = await AsyncStorage.getItem(COLLECTION_USER);

        if (storage) {
            const userLogged = JSON.parse(storage) as User;
            api.defaults.headers.common['Authorization'] = `Bearer ${userLogged.token}`

            setUser(userLogged);
        }
    }

    async function signOut() {
        await AsyncStorage.removeItem(COLLECTION_USER);
        setUser({} as User);
    }

    useEffect(() => {
        loadUserDataBase();

    }, [])

    return (
        <AuthContext.Provider value={{
            user,
            loading,
            signIn,
            signOut,
        }}>
            {children}
        </AuthContext.Provider>
    )
}