import {
  ScrollView,
  TouchableOpacity,
  Image,
  Platform,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useContext, useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import Header from "../components/Header";
import { useNavigation, useRoute } from "@react-navigation/native";
import { CartContext } from "../Context/CartContext";

const ProductDetailsScreen = () => {
  const route = useRoute();
  const product = route.params.item;
  const [selectedSize, setSelectedSize] = useState("M");
  const [selectedColor, setSelectedColor] = useState("#B11D1D");
  const { addToCartItem } = useContext(CartContext);
  const navigation = useNavigation();

  const colorsArray = [
    "#91A1B0",
    "#B11D1D",
    "#1F44A3",
    "#9F632A",
    "#1D752B",
    "#000000",
  ];

  const handleAddToCart = () => {
    product.color = selectedColor;
    product.size = selectedSize;
    addToCartItem(product);
    navigation.navigate("CART")
  };

  return (
    <View style={styles.container}>
      <LinearGradient
        // Background Linear Gradient
        colors={["rgba(20, 11, 178, 0.8)", "transparent"]}
        style={styles.background}
      />
      <Header />

      <ScrollView>
        <View style={styles.imageContainer}>
          <Image source={{ uri: product.image }} style={styles.coverImage} />
        </View>

        <View style={styles.contentContainer}>
          <View style={styles.textContainer}>
            <Text style={styles.fontText}>{product.title}</Text>
            <Text style={styles.fontText}>${product.price}</Text>
          </View>

          {/* size container */}
          <Text style={[styles.fontText, styles.sizeText]}>Size</Text>
          <View style={styles.sizeContainer}>
            {["S", "M", "L", "XL"].map((size) => (
              <TouchableOpacity
                key={size}
                onPress={() => setSelectedSize(size)}
                style={styles.sizeValueContainer}
              >
                <Text
                  style={[
                    styles.sizeValueText,
                    selectedSize === size && styles.sizeSelected,
                  ]}
                >
                  {size}
                </Text>
              </TouchableOpacity>
            ))}
          </View>

          {/* color container */}
          <Text style={[styles.fontText, styles.sizeText]}>Color</Text>
          <View style={styles.colorContainer}>
            {colorsArray.map((color, index) => {
              return (
                <TouchableOpacity
                  key={index}
                  onPress={() => setSelectedColor(color)}
                >
                  <View
                    style={[
                      styles.borderColorCircle,
                      selectedColor === color && {
                        borderColor: color,
                        borderWidth: 2,
                        borderRadius: 24,
                      },
                    ]}
                  >
                    <View
                      style={[styles.colorCircle, { backgroundColor: color }]}
                    ></View>
                  </View>
                </TouchableOpacity>
              );
            })}
          </View>

          {/* cart button */}
          <View>
            <TouchableOpacity style={styles.button} onPress={handleAddToCart}>
              <Text style={styles.buttonText}>Add to Cart</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default ProductDetailsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    marginTop: Platform.OS == "android" ? 25 : 0,
    padding: 10,
  },
  background: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    height: "100%",
  },
  imageContainer: {
    height: 250,
    width: "100%",
    marginTop: 10,
  },
  coverImage: {
    resizeMode: "contain",
    flex: 1,
  },
  contentContainer: {
    padding: 20,
  },
  textContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  fontText: {
    fontSize: 20,
    fontWeight: "700",
    color: "#444444",
  },
  sizeText: {
    marginTop: 20,
  },
  sizeContainer: {
    flexDirection: "row",
    marginTop: 5,
    marginBottom: 5,
  },
  sizeValueContainer: {
    backgroundColor: "#FFFFFF",
    height: 40,
    width: 40,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 5,
  },
  sizeValueText: {
    fontSize: 18,
    fontWeight: "700",
  },
  sizeSelected: {
    color: "#E55B5B",
  },
  colorContainer: {
    flexDirection: "row",
  },
  borderColorCircle: {
    height: 48,
    width: 48,
    padding: 5,
    marginHorizontal: 5,
  },
  colorCircle: {
    flex: 1,
    borderRadius: 18,
  },
  button: {
    backgroundColor: "#E96E6E",
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
    marginTop: 20,
  },
  buttonText: {
    fontSize: 22,
    color: "#FFFFFF",
    fontWeight: "700",
  },
});