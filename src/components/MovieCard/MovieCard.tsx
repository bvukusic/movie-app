import React, { useEffect, useState } from 'react';
import { ImageBackground, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./MovieCard.style";
import { IMovie } from '../../types';


type MovieCardProps = {
    movie: IMovie;
    touchAction: () => void;
}

const MovieCard = ({ movie, touchAction }: MovieCardProps) => {

    return (
        <View style={styles.movieCard}>
            <ImageBackground
                source={{ uri: movie.posterUrl }} resizeMode="cover" style={styles.image}>
                <TouchableOpacity activeOpacity={0.8} onPress={() => touchAction()} style={styles.touchable}>
                    <View style={styles.movieTitleContainer}>
                        <Text style={styles.movieTitle} numberOfLines={2}>
                            {movie.title}
                        </Text>
                    </View>
                </TouchableOpacity>
            </ImageBackground>
        </View >
    )
};

export default MovieCard;
