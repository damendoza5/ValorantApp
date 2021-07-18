import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from '@react-navigation/drawer';
import AgentStack from "../screens/routes/AgentStack";

const Drawer = createDrawerNavigator();

const DrawerMenu = () => {
    return(
    <NavigationContainer>
        <Drawer.Navigator initialRouteName="Agents">
            <Drawer.Screen name="Agents" component={AgentStack} />
        </Drawer.Navigator>
    </NavigationContainer>
    )
}

export default DrawerMenu;
