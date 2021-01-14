import { NavigationContainer, StackRouter } from "@react-navigation/native";
import {createStackNavigator} from '@react-navigation/stack'
import Home from "./Home";
import React from 'react';
import Orders from "./Orders";
import OrderDetails from "./OrderDetails";
const Routes = () => {
    const Stack = createStackNavigator()
    return <NavigationContainer>
        <Stack.Navigator headerMode="none" screenOptions={{cardStyle: {
            backgroundColor: '#fff'
        }}}>
            <Stack.Screen name="Home" component={Home}></Stack.Screen>
            <Stack.Screen name="Orders" component={Orders}></Stack.Screen>
            <Stack.Screen name="OrderDetails" component={OrderDetails}></Stack.Screen>
        </Stack.Navigator>
    </NavigationContainer>
}

export default Routes;