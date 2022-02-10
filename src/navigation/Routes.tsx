import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator, NativeStackScreenProps } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen/HomeScreen";
import MovieScreen from "../screens/MovieScreen/MovieScreen";
import { IMovie } from '../types';

type RootStackParamList = {
    Home: undefined;
    Movie: { movie: IMovie };
};

export type HomeProps = NativeStackScreenProps<RootStackParamList, 'Home'>;

export type MovieProps = NativeStackScreenProps<RootStackParamList, 'Movie'>;

const Routes = () => {

    const RootStack = createNativeStackNavigator<RootStackParamList>();

    return (
        <NavigationContainer>
            <RootStack.Navigator screenOptions={{
                headerShown: false
            }}>
                <RootStack.Screen name="Home" component={HomeScreen} />
                <RootStack.Screen name="Movie" component={MovieScreen} />
            </RootStack.Navigator>
        </NavigationContainer>
    );
};

export default Routes;
