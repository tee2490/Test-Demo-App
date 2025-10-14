import "react-native-gesture-handler";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { StatusBar } from "expo-status-bar";
import React, { useContext } from "react";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./src/screen/HomeScreen";
import Entypo from "@expo/vector-icons/Entypo";
import Ionicons from "@expo/vector-icons/Ionicons";
import AntDesign from "@expo/vector-icons/AntDesign";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ProductDetailsScreen from "./src/screen/ProductDetailsScreen";
import CartScreen from "./src/screen/CartScreen";
import { CartContext, CartProvider } from "./src/Context/CartContext";
import { StyleSheet, Text, View } from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { useFonts } from "expo-font";
import AccountScreen from "./src/screen/AccountScreen";

const size = 24;

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const MyHomeStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="HomeScreen"
    >
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="PRODUCT_DETAILS" component={ProductDetailsScreen} />
      <Stack.Screen name="CartScreen" component={CartScreen} />
      <Stack.Screen name="AccountScreen" component={AccountScreen} />
    </Stack.Navigator>
  );
};

const TabsNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: "red",
      }}
    >
      <Tab.Screen
        name="HOME"
        component={MyHomeStack}
        initialParams={{ screen: "HomeScreen" }}
        options={{
          tabBarIcon: ({ focused, color }) => {
            return <Entypo name={"home"} size={size} color={color} />;
          },
        }}
      />
      <Tab.Screen
        name="REORDER"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused, color }) => {
            return <Ionicons name="reorder-four" size={size} color={color} />;
          },
        }}
      />
      <Tab.Screen
        name="CART"
        component={MyHomeStack}
        initialParams={{ screen: "CartScreen" }}
        options={{
          tabBarIcon: ({ size, color }) => {
            const { cartItems } = useContext(CartContext);

            return (
              <View>
                <MaterialIcons
                  name={"shopping-cart"}
                  size={size}
                  color={color}
                />
                <View style={styles.badge}>
                  <Text style={{ color: "white", fontSize: 10 }}>
                    {cartItems?.length}
                  </Text>
                </View>
              </View>
            );
          },
        }}
      />

      <Tab.Screen
        initialParams={{ screen: "AccountScreen" }}
        name="ACCOUNT"
        component={AccountScreen}
        options={{
          tabBarIcon: ({ focused, color }) => {
            return (
              <MaterialCommunityIcons
                name="account"
                size={size}
                color={color}
              />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};

function NotificationsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Button onPress={() => navigation.goBack()} title="Go back home" />
    </View>
  );
}

const App = () => {
  const [fontsLoaded, fontError] = useFonts({
    "Poppins-Regular": require("./src/assets/fonts/Poppins-Regular.ttf"),
    "Poppins-Medium": require("./src/assets/fonts/Poppins-Medium.ttf"),
    "Poppins-Bold": require("./src/assets/fonts/Poppins-Bold.ttf"),
    "Poppins-BlackItalic.ttf": require("./src/assets/fonts/Poppins-BlackItalic.ttf"),
  });

  if (!fontsLoaded && !fontError) {
    return <Text>Font loading...</Text>;
  }

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <CartProvider>
          <Drawer.Navigator>
            <Drawer.Screen name="Home" component={TabsNavigator} />
            <Drawer.Screen name="About" component={NotificationsScreen} />
          </Drawer.Navigator>
        </CartProvider>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;

const styles = StyleSheet.create({
  badge: {
    position: "absolute",
    right: -5,
    bottom: 22,
    height: 14,
    width: 14,
    backgroundColor: "#E96E6E",
    borderRadius: 7,
    alignItems: "center",
    justifyContent: "center",
  },
});
