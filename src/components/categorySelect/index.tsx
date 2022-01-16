import React from 'react';
import { ScrollView } from 'react-native';

import { styles } from './styles';
import { categories } from '../../util/category'

import { Category } from '../category';

type Props = {
    categorySelected: string;
    setCategory: (categoryId: string) => void;
    hasChecBox?: boolean;
}

export function CategorySelect({ categorySelected, setCategory, hasChecBox = false, }: Props) {

    return (
        <ScrollView
            style={styles.container}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.scroll}
        >
            {
                categories.map(category => (
                    <Category
                        key={category.id}
                        title={category.title}
                        icon={category.icon}
                        checked={String(category.id) === categorySelected}
                        onPress={() => setCategory(String(category.id))}
                        hasChecBox={hasChecBox}
                    />
                ))
            }
        </ ScrollView>
    )

}