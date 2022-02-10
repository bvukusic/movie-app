import { Dimensions, Platform, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        height: 50,
        paddingTop: '2%',
    },
    personItem: {
        height: 35,
        paddingVertical: 5,
        paddingHorizontal: 10,
        marginRight: 5,
        borderRadius: 25,
        borderWidth: 2,
        borderColor: '#949494',
        justifyContent: 'center'
    },
    personName: {
        color: '#bfbfbf',
        fontSize: 15,
        fontFamily: 'Rubik-Regular'
    }
});