import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { Home } from '../screen/Home';
import { AppointmentsDetailes } from '../screen/AppointmentsDetailes';
import { AppointmentsCreate } from '../screen/AppointmentsCreate';

const { Navigator, Screen } = createStackNavigator();

export function AppRoutes() {

    return (
        <Navigator
            screenOptions={{
                headerShown: false,
                cardStyle: {
                    backgroundColor: 'transparent',
                },
            }}
        >
            <Screen name="home" component={Home} />
            <Screen name="appointmentsDetailes" component={AppointmentsDetailes} />
            <Screen name="appointmentsCreate" component={AppointmentsCreate} />
        </Navigator>
    )


}