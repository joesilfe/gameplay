import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    bar: {
        width: 40,
        height: 4,
        borderRadius: 2,
        backgroundColor: theme.colors.secondary30,
        alignSelf: 'center',
        marginTop: 8,
    },
});