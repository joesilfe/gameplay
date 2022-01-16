import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        paddingTop: 24,
    },
    guilds: {
        width: '100%',
    },
    guildsSpace: {
        paddingBottom: 56,
    },
    title: {
        textAlign: 'center',
        fontFamily: theme.fonts.title700,
        fontSize: 20,
        color: theme.colors.heading,
        paddingBottom: 16,
    },
});