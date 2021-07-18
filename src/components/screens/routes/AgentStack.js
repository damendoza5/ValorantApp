import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Agents from '../Agents';

const AgentStack = createStackNavigator();

function AgentStackScreen() {
    return (
        <AgentStack.Navigator screenOptions={{ headerShown: false }}>
            <AgentStack.Screen name="Agents" component={Agents} />
        </AgentStack.Navigator>
     );
   }

export default AgentStackScreen;