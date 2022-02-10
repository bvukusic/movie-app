import { Dimensions, Platform, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    movieCard: {
        width: Dimensions.get('screen').width * 0.5,
        height: Dimensions.get('screen').width * 0.7,
        marginLeft: 22,
        overflow: 'hidden',
        borderRadius: 5,
    },
    image: {
        ...StyleSheet.absoluteFillObject,
        resizeMode: 'cover',
    },
    touchable: {
        flex: 1,
        justifyContent: 'flex-end'
    },
    movieTitleContainer: {
        backgroundColor: '#212121',
        justifyContent: 'center',
        height: 50,
    },
    movieTitle: {
        fontFamily: 'Rubik-Light',
        color: "#ffff",
        textAlign: "left",
        fontSize: 18,
        paddingHorizontal: 10,
    },
});