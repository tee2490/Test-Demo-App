import { StyleSheet, Image, View } from "react-native";
import React from "react";

const Header = () => {
  return (
    <View style={styles.header}>
      <View style={styles.appDrawerContainer}>
        <Image
          source={require("../assets/apps.png")}
          style={styles.appDrawerIcon}
        />
      </View>
      <View>
        <Image
          source={require("../assets/Ellipse2.png")}
          style={styles.profileImage}
        />
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  appDrawerContainer: {
    backgroundColor: "white",
    height: 44,
    width: 44,
    borderRadius: 22,
    alignItems: "center",
    justifyContent: "center",
  },
  appDrawerIcon: {
    height: 30,
    width: 30,
  },
  appBackIcon: {
    height: 24,
    width: 24,
    marginLeft: 10,
  },
  profileImage: {
    height: 44,
    width: 44,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});