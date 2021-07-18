import { StatusBar } from "expo-status-bar";
import React from "react";
import { Provider as PaperProvider } from "react-native-paper";
import theme from "./src/theme";
import Navigation from "./src/components/navigation/SignStack";

export default function App() {
  return (
    <PaperProvider theme={theme}>
      <StatusBar style="light"/>
      <Navigation />
    </PaperProvider>
  );
}

