import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212"
  },
  scrollContainer: {
    paddingBottom: 50,
  },
  titleContainer: {
    backgroundColor: 'rgba(33,33,33,0.7)',
    paddingVertical: 16,
    paddingHorizontal: 15,
  },
  backButton: {
    position: 'absolute',
    zIndex: 1,
    top: 5,
    left: 5,
    borderRadius: 99,
    backgroundColor: 'rgba(222,222,222,0.7)',
    height: 40,
    width: 40,
    margin: 10,
  },
  title: {
    color: "#ffff",
    textAlign: "left",
    fontSize: 30,
    fontFamily: 'Rubik-Regular',
  },
  topImage: {
    resizeMode: 'cover',
    height: 200,
    justifyContent: 'flex-end',
  },
  movieDetails: {
   flex: 1,
   paddingHorizontal: 18,
   paddingVertical: 15,
   justifyContent: 'flex-start',
  },
  inlineContainer: {
    flexDirection: 'row',
    width: '100%',
    minHeight: 200,
    marginVertical: 20,
  },
  poster:{
    resizeMode: 'contain',
    height: '100%',
    width: 150,
  },
  plotContainer: {
    flexShrink: 1,
    paddingHorizontal: 20,
  },
  plotText: {
    fontFamily: 'Rubik-Regular',
    fontSize: 16,
  },
  movieDetailsText: {
    fontFamily: 'Rubik-Regular',
    color: "#949494",
    textAlign: "left",
    fontSize: 18,
  }
});