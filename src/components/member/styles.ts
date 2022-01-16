import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';


export const styles = StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 24,
        marginVertical: 16,
    },
    username: {
        fontFamily: theme.fonts.title700,
        color: theme.colors.heading,
        fontSize: 18,
        marginBottom: 8,
    },
    status: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    statusBullets: {
        width: 8,
        height: 8,
        borderRadius: 4,
        marginRight: 8,
    },
    nameStatus: {
        fontFamily: theme.fonts.text400,
        color: theme.colors.highlight,
        fontSize: 14,
    },
});