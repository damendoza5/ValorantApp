  
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Signin from "../screens/Signin"
import Signup from "../screens/Singup"
import AppIndex from "../screens/Index";
import { NavigationContainer } from "@react-navigation/native";

const Stack = createStackNavigator();

function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="AppIndex" component={AppIndex} />
        <Stack.Screen name="Signin" component={Signin} />
        <Stack.Screen name="Signup" component={Signup} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;