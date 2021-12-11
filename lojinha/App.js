import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./src/pages/Home";
import DetalheProdutos from "./src/pages/DetalheProdutos/index"
import Login from "./src/pages/Login";

export default function App() {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer initialRouteName="Home">
      <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="Login" component={Login} options={{headerShown: false}}  />
        <Stack.Screen name="Home" component={Home} options={{headerShown: false}} />
        <Stack.Screen name="DetalheProdutos" component={DetalheProdutos} options={{headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

