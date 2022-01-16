import { StyleSheet} from 'react-native';
import { theme } from './../../global/styles/theme';
import { useQueryHeight } from '../../util/useMediaQuery'

export const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    info: {
        marginTop: useQueryHeight(720, 16, 48),
        height: '100%',
    },
    content: {
        marginTop: useQueryHeight(720, -112, -40),
    },
    image: {
        width: '100%',
        height: 407,
        marginTop: 26,
    },
    title: {
        color: theme.colors.heading,
        textAlign: 'center',
        fontSize: 40,
        lineHeight: 40,
        fontFamily: theme.fonts.title700,

    },
    subtitle: {
        marginTop: 16,
        marginBottom: 48,
        color: theme.colors.highlight,
        textAlign: 'center',
        fontSize: 16,
        lineHeight: 24,
        fontFamily: theme.fonts.title500,
    },
});