import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { Platform, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./src/screen/HomeScreen";
import Entypo from "@expo/vector-icons/Entypo";
import Ionicons from "@expo/vector-icons/Ionicons";
import AntDesign from "@expo/vector-icons/AntDesign";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

const isIOS = Platform.OS == "ios";
const size = 24;

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={{
            headerShown: true,
            tabBarShowLabel: false,
            tabBarActiveTintColor: "red",
            size: 51,
          }}
        >
          <Tab.Screen
            name="HOME"
            component={HomeScreen}
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
                return (
                  <Ionicons name="reorder-four" size={size} color={color} />
                );
              },
            }}
          />
          <Tab.Screen
            name="CART"
            component={HomeScreen}
            options={{
              tabBarIcon: ({ focused, color }) => {
                return (
                  <AntDesign name="shopping-cart" size={size} color={color} />
                );
              },
            }}
          />
          <Tab.Screen
            name="ACCOUNT"
            component={HomeScreen}
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
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;
