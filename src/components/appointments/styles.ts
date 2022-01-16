import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'row',
        alignSelf: 'center',
        
        marginTop: 16,
        marginBottom: 16,
        
        paddingHorizontal: 24,
    },    
    icon: {
        borderRadius: 8,
        padding: 2,
        marginRight: 16,
    },
    content: {
        flex: 1,
    },
    header: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 12,
    },
    footer: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    dateInfo: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    date: {
        fontFamily: theme.fonts.text500,
        color: theme.colors.heading,
        fontSize: 14,
        marginLeft: 8,
    },
    title: {
        fontFamily: theme.fonts.title700,
        color: theme.colors.heading,
        fontSize: 18,

    },
    category: {
        fontFamily: theme.fonts.text400,
        color: theme.colors.highlight,
        fontSize: 14,
    },
    playerInfo: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    player: {
        fontFamily: theme.fonts.text500,
        fontSize: 14,
        marginLeft: 8,
    },
});