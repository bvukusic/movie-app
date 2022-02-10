import React, { useEffect, useState } from 'react';
import {
    FlatList,
    SafeAreaView,
    ListRenderItemInfo,
    View,
    Text,
} from 'react-native';
import { styles } from './PersonList.style';

type PersonListProps = {
    people: string[];
}

const PersonList = ({ people }: PersonListProps) => {

    const renderPersonItem = (person: ListRenderItemInfo<string>) => {
        return(
            <View style={styles.personItem}>
                <Text style={styles.personName}>{person.item}</Text>
            </View>
        )
    }

    return (
        <FlatList
            data={people}
            renderItem={renderPersonItem}
            keyExtractor={item => item}
            horizontal={true}
            contentContainerStyle={styles.container}
        />
    );
};

export default PersonList;
