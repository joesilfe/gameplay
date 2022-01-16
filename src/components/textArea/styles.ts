import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
    container: {
        borderRadius: 8,
        padding: 2,
    },
    input: {
        width: '100%',
        height: 95,
        backgroundColor: theme.colors.secondary40,
        color: theme.colors.heading,
        borderRadius: 6,
        fontFamily: theme.fonts.text400,
        fontSize: 14,
        paddingTop: 16,
        paddingLeft: 16,
        paddingRight: 16,
        paddingBottom: 16,
        textAlignVertical: 'top',
    }
});