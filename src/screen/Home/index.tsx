import React, { useState, useCallback } from 'react';
import { View, FlatList, RefreshControl } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage'

import { Background } from '../../layout/background';

import { ButtonsAdd } from '../../components/buttonAdd';
import { CategorySelect } from '../../components/categorySelect';
import { Profile } from '../../components/profile';
import { ListHeader } from '../../components/listHeader';
import { Appointments, AppointmentsProps } from '../../components/appointments';
import { ListDivider } from '../../components/listDivider';
import { Load } from '../../components/load';

import { styles } from './styles';

import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { COLLECTION_APPOINTMENTS } from '../../configs/database';
import { theme } from '../../global/styles/theme';
import { BottomSheetModalView } from '../../components/modalView';



export function Home() {

    const [category, setCategory] = useState<string>('');
    const [appointments, setAppointments] = useState<AppointmentsProps[]>([]);
    const [loading, setLoading] = useState(true)

    const navigtion = useNavigation();


    function handleCategorySelect(categoryId: string) {
        categoryId === category ?
            setCategory('') : setCategory(categoryId)
    };

    function handleAppointmentDetails(guildSelected: AppointmentsProps) {
        navigtion.navigate('appointmentsDetailes', { guildSelected });
    };

    function handleAppointmentCreate() {
        navigtion.navigate('appointmentsCreate');
    };


    async function loadAppointments() {
        const response = await AsyncStorage.getItem(COLLECTION_APPOINTMENTS);

        const storage: AppointmentsProps[] = response ? JSON.parse(response) : []

        if (category) {

            setAppointments(
                storage
                    .filter(item => item.category === category));
        } else {
            setAppointments(storage)
        }

        setLoading(false)
    }



    useFocusEffect(
        useCallback(() => {
            loadAppointments();
        }, [category])
    );

    return (

        <Background style={styles.container}>
            <View style={styles.header}>
                <Profile />
                <ButtonsAdd onPress={handleAppointmentCreate} />
            </View>

            <View>
                <CategorySelect
                    categorySelected={category}
                    setCategory={handleCategorySelect}
                />
            </View>

            {loading ?
                <Load />
                :
                <>
                    <ListHeader
                        title='Partidas agendadas'
                        subtitle={`Total ${appointments.length}`}
                    />

                    <FlatList
                        data={appointments}
                        refreshControl={
                            <RefreshControl
                                colors={[theme.colors.heading]}
                                tintColor={theme.colors.primary}
                                refreshing={loading}
                                onRefresh={loadAppointments}
                                progressBackgroundColor={theme.colors.primary}
                            />
                        }
                        keyExtractor={(item) => item.id}
                        renderItem={({ item }) => (
                            <Appointments
                                data={item}
                                onPress={() => handleAppointmentDetails(item)}
                            />
                        )}
                        ItemSeparatorComponent={() => <ListDivider />}
                        style={styles.matches}
                        showsHorizontalScrollIndicator={false}
                        contentContainerStyle={styles.scroll}

                    />
                </>
            }

            <BottomSheetModalView />

        </Background >
    )
}