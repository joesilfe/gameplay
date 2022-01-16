import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    label: {
        fontFamily: theme.fonts.title700,
        fontSize: 18,
        color: theme.colors.heading,
    },
    form: {
        paddingHorizontal: 24,
        marginTop: 32,
    },
    select: {
        flexDirection: 'row',
        width: '100%',
        height: 67,
        borderColor: theme.colors.secondary50,
        borderWidth: 1,
        borderRadius: 8,
        alignItems: 'center',
        overflow: 'hidden',
    },
    selectBody: {
        flex: 1,
        alignItems: 'center',
    },
    trash: {
        height: '100%',
        paddingHorizontal: 24,
        alignItems: 'center',
        justifyContent: 'center',       
    },
    add: {
        paddingHorizontal: 24,
    },
    image: {
        width: 64,
        height: 64,
        backgroundColor: theme.colors.secondary50,
        borderColor: theme.colors.secondary100,
        borderWidth: 2,
        borderRadius: 6,
    },
    field: {
        marginTop: 32,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    textArea: {
        marginTop: 32,
        flexDirection: 'column',
    },
    column: {
        flex: 1,
    },
    charLimit: {
        fontFamily: theme.fonts.text400,
        fontSize: 14,
        color: theme.colors.highlight,
    },
    footer: {
        marginTop: 32,
        marginHorizontal: 24,
        marginBottom: 32,
    }
});