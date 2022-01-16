import { StyleSheet} from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper'
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 104,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: getStatusBarHeight(),
        paddingHorizontal: 16,
    },
    title: {
        flex: 1,
        textAlign: 'center',
        fontFamily: theme.fonts.title700,
        fontSize: 20,
        color: theme.colors.heading,
    },
    btn: {
        borderColor: 'red',
        borderWidth: 1,
        width: 48,
        height: 48,
        justifyContent: 'center',
    }
});