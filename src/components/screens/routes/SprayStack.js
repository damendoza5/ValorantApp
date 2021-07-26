import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Sprays from "../Sprays";
import SprayDetails from "../SprayDetails";

const SprayStack = createStackNavigator();

function SprayStackScreen() {
  return (
    <SprayStack.Navigator screenOptions={{ headerShown: false }}>
      <SprayStack.Screen name="SprayScreen" component={Sprays} />
      <SprayStack.Screen name="SprayDetails" component={SprayDetails} />
    </SprayStack.Navigator>
  );
}

export default SprayStackScreen;
