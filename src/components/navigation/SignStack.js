  
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Signin from "../screens/Signin"
import Signup from "../screens/Singup"
import AgentStackScreen from "../screens/routes/AgentStack";

const Stack = createStackNavigator();

function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Signin" component={Signin} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="Agents" component={AgentStackScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;