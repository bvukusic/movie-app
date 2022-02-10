import React, { useEffect, useState } from 'react';
import { ActivityIndicator, Dimensions, FlatList, ImageBackground, ListRenderItemInfo, Text, TouchableOpacity, View } from "react-native";
import { styles } from './Header.style';

const { width: screenWidth } = Dimensions.get('window')

const Header = () => {

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Borna Vukusic</Text>
            <Text style={styles.subtitle}>24i Assignment</Text>
        </View>
    );
};

export default Header;
      