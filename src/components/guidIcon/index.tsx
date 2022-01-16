import React from 'react';
import { Image, View } from 'react-native';
import { SvgProps } from 'react-native-svg';

import { styles } from './styles';

type Props = {
    guildId: string;
    iconId: React.FC<SvgProps> | null;
}

export function GuidIcon({ guildId, iconId }: Props) {
    
    const { CDN_IMAGE } = process.env

    const uri = 
        iconId ? `${CDN_IMAGE}/icons/${guildId}/${iconId}.png`
        : 'https://github.com/joesilfe.png';   

    return (
        <View style={styles.container}>
                <Image
                    source={{ uri }}
                    style={styles.image}
                    resizeMode='cover'
                />
        </View>
    );

}