import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 24,

        marginTop: 16,
        marginBottom: 16,
    },
    icon: {
        width: 64,
        borderRadius: 8,
        marginRight: 16,
    },
    content: {
        flex: 1,
        justifyContent: 'center',
    },
    title: {
        fontFamily: theme.fonts.title700,
        color: theme.colors.heading,
        fontSize: 18,
        marginBottom: 12,
    },
    game: {
        fontFamily: theme.fonts.text400,
        color: theme.colors.heading,
        fontSize: 12,
    },
});