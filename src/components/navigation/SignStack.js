import React, { useContext, useEffect } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Signin from "../screens/Signin";
import Signup from "../screens/Singup";
import AppIndex from "../screens/Index";
import { NavigationContainer } from "@react-navigation/native";
import { Context as AuthContext } from "../../providers/AuthContext";

const Stack = createStackNavigator();
<Stack.Screen name="AppIndex" component={AppIndex} />;
function Navigation() {
<<<<<<< HEAD
	const { state, persistLogin } = useContext(AuthContext);

	useEffect(() => {
		persistLogin();
	}, []);

	return (
		<NavigationContainer>
			<>
				{state.loggedIn ? (
					<Stack.Navigator screenOptions={{ headerShown: false }}>
						<Stack.Screen name="AppIndex" component={AppIndex} />
					</Stack.Navigator>
				) : (
					<Stack.Navigator screenOptions={{ headerShown: false }}>
						<Stack.Screen name="Signin" component={Signin} />
						<Stack.Screen name="Signup" component={Signup} />
					</Stack.Navigator>
				)}
			</>
		</NavigationContainer>
	);
=======
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="AppIndex" component={AppIndex} />
        <Stack.Screen name="Signin" component={Signin} />
        <Stack.Screen name="Signup" component={Signup} />
      </Stack.Navigator>
    </NavigationContainer>
  );
>>>>>>> 9a28f98c61ef4ee207f2e489c7c616c9b9ddaa71
}

export default Navigation;
