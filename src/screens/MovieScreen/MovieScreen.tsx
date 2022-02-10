import React, { useEffect, useState } from 'react';
import { Image, ImageBackground, ScrollView, Text, TouchableOpacity, View } from "react-native";
import PersonList from '../../components/PersonList/PersonList';
import { MovieProps } from '../../navigation/Routes';
import { styles } from "./MovieScreen.style";

const MovieScreen = ({ route, navigation }: MovieProps) => {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollContainer}>
        <ImageBackground source={require('../../assets/closeIcon.png')} style={styles.backButton}><TouchableOpacity style={{ flex: 1 }} onPress={() => navigation.goBack()} /></ImageBackground>
        <ImageBackground source={{ uri: route.params.movie.posterUrl }} resizeMode="cover" style={styles.topImage}>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>{route.params.movie.title}</Text>
          </View>
        </ImageBackground>
        <View style={styles.movieDetails}>
          <Text style={styles.movieDetailsText}>{route.params.movie.year}  •  {route.params.movie.duration} minutes</Text>
          <View>
            <Text style={styles.movieDetailsText}>Genre:</Text>
            <PersonList people={route.params.movie.genres} />
          </View>
          <View style={styles.inlineContainer}>
            <Image source={{ uri: route.params.movie.posterUrl }} style={styles.poster} />
            <View style={styles.plotContainer}>
              <Text style={[styles.movieDetailsText, styles.plotText]}>Plot: {route.params.movie.plot}</Text>
            </View>
          </View>
          <View>
            <Text style={styles.movieDetailsText}>Director:</Text>
            <PersonList people={route.params.movie.director.split(', ')} />
          </View>
          <View>
            <Text style={styles.movieDetailsText}>Actors:</Text>
            <PersonList people={route.params.movie.actors.split(', ')} />
          </View>
        </View>
      </ScrollView>
    </View >
  );
};

export default MovieScreen;