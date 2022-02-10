import React, { useEffect, useState } from 'react';
import { ActivityIndicator, Dimensions, FlatList, ImageBackground, ListRenderItemInfo, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import { fetchMovies } from '../../api/movieService';
import { styles } from "./HomeScreen.style";
import { ICarousel, IMovie } from '../../types';
import { HomeProps } from '../../navigation/Routes';
import MovieCard from '../../components/MovieCard/MovieCard';
import Header from '../../components/Header/Header';

const { width: screenWidth } = Dimensions.get('window')

const HomeScreen = ({ route, navigation }: HomeProps) => {
    const [movies, setMovies] = useState<ICarousel[] | []>([])
    const [isLoading, setIsLoading] = useState<boolean>(true);

    useEffect(() => {
        loadMovies();
    })

    const loadMovies = async () => {
        let data = await fetchMovies();
        setMovies(data);
        setIsLoading(false);
    }

    const renderMovieItem = ({ item }: ListRenderItemInfo<IMovie>) => {
        return (
            <MovieCard movie={item} touchAction={() => navigation.navigate('Movie', { movie: item })} />
        )
    };

    const renderSectionItem = ({ item }: ListRenderItemInfo<ICarousel>) => {
        return (
            <View style={styles.sectionContainer}>
                <View style={styles.inline}>
                    <View style={styles.bullet} />
                    <Text style={styles.categoryTitle}>{item.title}</Text>
                </View>
                <FlatList
                    data={item.items}
                    renderItem={renderMovieItem}
                    keyExtractor={item => item.title}
                    horizontal={true}
                    contentContainerStyle={styles.movieListContainer}
                />
            </View>
        )
    };

    return (
        <View style={styles.container}>
            <Header/>
            {isLoading ?
                <View style={styles.loaderWrapper}>
                    <ActivityIndicator size="large" />
                </View> :
                <FlatList
                    data={movies}
                    renderItem={renderSectionItem}
                    keyExtractor={item => item.title}
                />}
        </View>
    );
};

export default HomeScreen;
