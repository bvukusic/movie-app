import { Dimensions, Platform, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#121212",
        paddingTop: '5%'
    },
    title: {
        color: "white",
        textAlign: "center",
        fontSize: 30,
        fontWeight: "bold"
    },
    categoryTitle: {
        color: "#ffff",
        textAlign: "left",
        fontSize: 25,
        fontFamily: 'Rubik-Regular'
    },
    loaderWrapper: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    sectionContainer: {
        flexShrink: 1,
        width: '100%',
        marginBottom: 30,
    },
    movieListContainer: {
        paddingRight: 50,
    },
    inline: {
        paddingHorizontal: 22,
        flexDirection: 'row',
        alignItems: 'flex-start',
        marginBottom: 16,
    },
    bullet: {
        backgroundColor: 'yellow',
        width: 6,
        height: 28,
        marginRight: 12,
    }
});