import { Dimensions } from 'react-native';
import { getBottomSpace } from 'react-native-iphone-x-helper';

export function useQueryHeight(
    display: number,
    defaults: number,
    alternative: number
): number {
    
    
    const height = Dimensions.get('window').height;
    const position = height <= display ? defaults : alternative;
    
    // utilize essa lógica para pegar o espaçamento
    // const spaceBottom = getBottomSpace();
    // const position = defaults + spaceBottom;
    
    // alternative
    // const positionImage = height <= 720 ? 16 : 48
    // const positionContent = height <= 720 ? -112 : -40

    return position;
}