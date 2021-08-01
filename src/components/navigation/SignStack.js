import React, { useContext, useEffect } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Signin from "../screens/Signin";
import Signup from "../screens/Singup";
import AppIndex from "../screens/Index";
import PasswordScreen from "../screens/ForgotPassword";
import { NavigationContainer } from "@react-navigation/native";
import { Context as AuthContext } from "../../providers/AuthContext";

const Stack = createStackNavigator();
<Stack.Screen name="AppIndex" component={AppIndex} />;
function Navigation() {
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
						<Stack.Screen name="ForgotPassword" component={PasswordScreen} />
					</Stack.Navigator>
				)}
			</>
		</NavigationContainer>
	);
}

export default Navigation;
