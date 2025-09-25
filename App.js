import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
import {
  Platform,
  Text,
  View,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const isIOS = Platform.OS == "ios";

const Tab = createBottomTabNavigator();

function HomeScreen() {
  return (
    <SafeAreaView edges={['top']} style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>{isIOS ? "IOS" : "Home"}</Text>
    </SafeAreaView>
  );
}

const App = () => {
  return (
    <SafeAreaProvider>
        <NavigationContainer>
          <Tab.Navigator screenOptions={{headerShown:true}}>
            <Tab.Screen name="HOME" component={HomeScreen} />
            <Tab.Screen name="REORDER" component={HomeScreen} />
            <Tab.Screen name="CART" component={HomeScreen} />
            <Tab.Screen name="ACCOUNT" component={HomeScreen} />
          </Tab.Navigator>
        </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;
