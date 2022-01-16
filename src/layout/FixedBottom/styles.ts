import { StyleSheet } from 'react-native';
import { useQueryHeight } from '../../util/useMediaQuery';
import { getBottomSpace } from 'react-native-iphone-x-helper';

export const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        // bottom: useQueryHeight(720, 32, 96),
        bottom: getBottomSpace() + 32,
        left: 0,
        right: 0,
        paddingHorizontal: 24,
    }
});