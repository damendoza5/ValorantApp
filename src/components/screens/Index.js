import { StatusBar } from "expo-status-bar";
import React from "react";
import { Provider as PaperProvider } from "react-native-paper";
import DrawerMenu from "../navigation/drawer";

const AppIndex = () => {
  return (
    <PaperProvider>
      <StatusBar style="light" />
      <DrawerMenu />
    </PaperProvider>
  );
};

export default AppIndex;
