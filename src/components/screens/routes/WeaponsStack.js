import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Weapons from "../Weapons";
import WeaponDetails from "../WeaponDetails";

const WeaponStack = createStackNavigator();

function WeaponStackScreen() {
  return (
    <WeaponStack.Navigator screenOptions={{ headerShown: false }}>
      <WeaponStack.Screen name="Weapons" component={Weapons} />
      <WeaponStack.Screen name="WeaponDetails" component={WeaponDetails} />
    </WeaponStack.Navigator>
  );
}

export default WeaponStackScreen;
