import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    banner: {
        width: '100%',
        height: 234,
    },
    bannerContent: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-end',
        padding: 24,
    },
    title: {
        fontFamily: theme.fonts.title700,
        fontSize: 32,
        color: theme.colors.heading,
        marginBottom: 12,
    },
    description: {
        fontFamily: theme.fonts.text500,
        fontSize: 14,
        lineHeight: 21,
        color: theme.colors.heading,
    },
    members: {
        paddingBottom: 144,
    },
});