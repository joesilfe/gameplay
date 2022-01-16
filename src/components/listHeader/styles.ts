import { StyleSheet} from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        
        paddingHorizontal: 24,
        marginTop: 40,
        marginBottom: 24,
    },
    title: {
        fontFamily: theme.fonts.title700,
        fontSize: 18,
        color: theme.colors.heading,
    },
    subtitle: {
        fontFamily: theme.fonts.text400,
        fontSize: 14,
        color: theme.colors.highlight,
    },
});