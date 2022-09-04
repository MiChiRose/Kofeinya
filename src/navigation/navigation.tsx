import React from "react"
import { createStackNavigator } from "@react-navigation/stack"
import {NavigationContainer} from "@react-navigation/native";
import routeNames from "./routeNames";
import {MainNavigation} from "./mainNavigation";

const Stack = createStackNavigator()

export const Navigation = () => {
    return (
     <NavigationContainer>
         <Stack.Navigator
             screenOptions={{
                 headerShown: false
             }}
             initialRouteName={routeNames.MainNavigation}
         >
             <Stack.Screen
                 name={routeNames.MainNavigation}
                 component={MainNavigation}
             />
         </Stack.Navigator>
     </NavigationContainer>
    );
};