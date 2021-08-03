import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Cards from "../Cards";
import CardDetails from "../CardDetails";

const CardStack = createStackNavigator();

function CardStackScreen() {
  return (
    <CardStack.Navigator screenOptions={{ headerShown: false }}>
      <CardStack.Screen name="CardsScreen" component={Cards} />
      <CardStack.Screen name="CardDetails" component={CardDetails} />
    </CardStack.Navigator>
  );
}

export default CardStackScreen;
