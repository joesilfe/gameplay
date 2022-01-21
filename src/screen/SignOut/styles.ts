import { StyleSheet } from 'react-native';
import { theme } from './../../global/styles/theme';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    content: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 12,
        marginBottom: 32,
    },
    message: {
        fontFamily: theme.fonts.title700,
        fontSize: 24,
        color: theme.colors.heading,
        paddingRight: 8,
    },
    buttomNo: {
        borderColor: theme.colors.secondary30,
        borderWidth: 1,
        marginRight: 8,
    },
    buttomYes: {
        backgroundColor: theme.colors.primary,
    },
    footer: {
        flexDirection: 'row',
        paddingHorizontal: 24,
    }
});