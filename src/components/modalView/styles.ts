import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
    container: {
        flex: 6,
    },
    overlay: {
        flex: 1,
        // backgroundColor: theme.colors.overlay,
    },
    closeOverlay: {
        flex: 1,
        backgroundColor: theme.colors.overlay,
    },
    bar: {
        width: 40,
        height: 4,
        borderRadius: 2,
        backgroundColor: theme.colors.secondary30,
        alignSelf: 'center',
        marginTop: 12,
    },
});