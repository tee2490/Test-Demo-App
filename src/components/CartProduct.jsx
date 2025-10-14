import { TouchableOpacity,Image,StyleSheet, Text, View } from 'react-native'
import React from 'react'

const imageUrl =
    "https://res.cloudinary.com/dlc5c1ycl/image/upload/v1710567613/cwlk21f74nd9iamrlzkh.png";

const CartProduct = () => {
  return (
    <View style={styles.card}>
    <Image source={{ uri: imageUrl }} style={styles.image} />
    <View style={styles.content}>
      <Text style={styles.title}>JeanTest</Text>
      <Text style={styles.price}>$9.99</Text>
      <View style={styles.textCircleContainer}>
        <View
          style={[styles.circle, { backgroundColor: "red" }]}
        ></View>
        <View style={styles.sizeContainer}>
          <Text style={styles.sizeText}>M</Text>
        </View>
      </View>
    </View>
    <TouchableOpacity onPress={() => {}}>
      <Image
        source={require("../assets/deleteIcon.png")}
        style={styles.deleteIcon}
      />
    </TouchableOpacity>
  </View>
  )
}

export default CartProduct

const styles = StyleSheet.create({
    card: {
      flexDirection: "row",
      marginVertical: 15,
    },
    image: {
      height: 125,
      width: "30%",
      resizeMode: "contain",
      borderRadius: 20,
    },
    title: {
      fontSize: 18,
      fontWeight: "700",
      color: "#444444",
    },
    price: {
      fontSize: 18,
      color: "#797979",
      marginVertical: 7,
      fontWeight: "700",
    },
    content: {
      flex: 1,
      padding: 5,
    },
    circle: {
      height: 32,
      width: 32,
      borderRadius: 16,
    },
    sizeContainer: {
      backgroundColor: "#FFFFFF",
      height: 32,
      width: 32,
      borderRadius: 16,
      justifyContent: "center",
      alignItems: "center",
      marginHorizontal: 20,
    },
    sizeText: {
      fontSize: 18,
      fontWeight: "700",
    },
    textCircleContainer: {
      flexDirection: "row",
    },
    deleteIcon: {
      height: 30,
      width: 30,
      marginTop: 10,
    },
  });