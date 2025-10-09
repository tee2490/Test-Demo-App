import { Platform, StyleSheet, View } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { Dimensions } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../components/Header";

const windowH = Dimensions.get('window').height; // พื้นที่แอปหลังหัก status bar/nav bar (ส่วนมาก)
const screenH  = Dimensions.get('screen').height; // ความสูงเต็มหน้าจอ (รวมระบบ)

const HomeScreen = () => {
  return (
    <SafeAreaView>
    <View style={styles.container}>
      <LinearGradient
        // Background Linear Gradient
        colors={["rgba(0,0,0,0.5)", "transparent"]}
        style={styles.background}
      />
      <Header />
    </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  // backgroundColor: "white",
   padding: 20,
  },
  background: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    height: windowH/2,
  },
  button: {
    padding: 15,
    alignItems: "center",
    borderRadius: 5,
  },
  text: {
    backgroundColor: "transparent",
    fontSize: 15,
    color: "#fff",
  },
});