import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
    container: {
        borderRadius: 8,
        padding: 2,
    },
    input: {
        width: '100%',
        height: 48,
        backgroundColor: theme.colors.secondary40,
        color: theme.colors.heading,
        borderRadius: 6,
        fontFamily: theme.fonts.text400,
        fontSize: 14,
        marginRight: 4,
        textAlign: 'left',
        padding: 16,
    }
});