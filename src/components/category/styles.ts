import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
    container: {
        width: 104,
        height: 120,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
        marginRight: 8,
    },
    content: {
        width: 100,
        height: 116,
        borderRadius: 6,
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 16,
    },
    title: {
        fontFamily: theme.fonts.title700,
        color: theme.colors.heading,
        fontSize: 16,
    },
    check: {
        position: 'absolute',
        top: 8,
        right: 8,
        width: 12,
        height: 12,
        backgroundColor: theme.colors.secondary100,
        borderColor: theme.colors.secondary50,
        borderWidth: 1,
        borderRadius: 4,
    },
    checked: {
        position: 'absolute',
        top: 8,
        right: 8,
        width: 12,
        height: 12,
        backgroundColor: theme.colors.primary,
        borderRadius: 4,
    },
});