import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';


export const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        paddingTop: 24,
    },
    messageContent: {
        fontFamily: theme.fonts.text500,
        fontSize: 16,
        lineHeight: 24,
        color: theme.colors.heading,
        textAlign: 'center',
        marginTop: 16,
        paddingHorizontal: 24,
    },
});