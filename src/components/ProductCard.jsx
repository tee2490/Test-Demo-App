import { Image, StyleSheet, View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import Feather from "@expo/vector-icons/Feather";
import FontAwesome from "@expo/vector-icons/FontAwesome";

const ProductCard = () => {
  const [isLiked, setIsLiked] = useState(true);

  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/girl2.png")}
        style={styles.coverImage}
      />
      <View style={styles.contentContainer}>
        <Text style={styles.title}>Test</Text>
        <Text style={styles.price}>$9.99</Text>
      </View>

      <TouchableOpacity
        onPress={() => setIsLiked(!isLiked)}
        style={styles.likeContainer}
      >
        {isLiked ? (
          <Feather name="heart" size={15} color="red" />
        ) : (
          <FontAwesome name="heart" size={15} color="red" />
        )}
      </TouchableOpacity>
    </View>
  );
};

export default ProductCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 10,
    marginVertical: 10,
  },
  coverImage: {
    height: 256,
    width: "100%",
    borderRadius: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: "700",
    color: "#444444",
  },
  price: {
    fontSize: 18,
  },
  contentContainer: {
    padding: 10,
  },
  likeContainer: {
    position: "absolute",
    padding: 5,
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    right: 10,
    top: 10,
  },
});
