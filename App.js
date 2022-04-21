import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./src/screens/Home/HomeScreen";
import ProductScreen from "./src/screens/Product/ProductScreen";

const Stack = createNativeStackNavigator();

function App() {
  return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Product"
            component={ProductScreen}
            // options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
  );
}

export default App;
