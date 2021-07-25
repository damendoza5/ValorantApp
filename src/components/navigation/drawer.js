import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import AgentStack from "../screens/routes/AgentStack";
import WeaponStackScreen from "../screens/routes/WaponsStack";
import Home from "../screens/Home";
import DrawerContent from "./DrawerContent";
import theme from "../../theme";

const Drawer = createDrawerNavigator();

<<<<<<< HEAD
const DrawerMenu = () => {
	return (
		<Drawer.Navigator
			drawerContent={(props) => <DrawerContent {...props} />}
			initialRouteName="Home"
			drawerStyle={{ backgroundColor: theme.colors.backgroundGreen }}
		>
			<Drawer.Screen name="Home" component={Home} />
			<Drawer.Screen name="Agents" component={AgentStack} />
		</Drawer.Navigator>
	);
=======
const DrawerMenu = ({}) => {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <DrawerContent {...props} />}
      initialRouteName="Home"
      drawerStyle={{ backgroundColor: theme.colors.backgroundGreen }}
    >
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Agents" component={AgentStack} />
      <Drawer.Screen name="Weapons" component={WeaponStackScreen} />
    </Drawer.Navigator>
  );
>>>>>>> 9a28f98c61ef4ee207f2e489c7c616c9b9ddaa71
};

export default DrawerMenu;
