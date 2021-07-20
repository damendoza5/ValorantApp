import { StatusBar } from "expo-status-bar";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { Provider as PaperProvider } from "react-native-paper";
import theme from "../../theme";
import DrawerMenu from "../navigation/drawer";


const AppIndex = () => {
  return(
    <PaperProvider>
      <StatusBar style="light"/>
      <DrawerMenu/>
    </PaperProvider>
  )
}

export default AppIndex;