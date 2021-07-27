import React from "react";
import { Dimensions } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import theme from "../../theme";
import SprayStackScreen from "../screens/routes/SprayStack";
import CardStackScreen from "../screens/routes/CardStack";

const TopTab = createMaterialTopTabNavigator();

const deviceWidth = Dimensions.get("window").width;

const BarTop = () => {
  return (
    <TopTab.Navigator
      initialRouteName="Sprays"
      tabBarOptions={{
        indicatorStyle: {
          backgroundColor: theme.colors.redAccent,
        },
        tabStyle: {
          width: deviceWidth * 0.5,
          backgroundColor: theme.colors.backgroundGreen,
        },
        activeTintColor: theme.colors.redAccent,
        inactiveTintColor: theme.colors.backgroundWhite,
      }}
    >
      <TopTab.Screen name="Sprays" component={SprayStackScreen} />
      <TopTab.Screen name="Cards" component={CardStackScreen} />
    </TopTab.Navigator>
  );
};

export default BarTop;
