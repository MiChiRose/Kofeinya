import React from "react"
import { createStackNavigator } from "@react-navigation/stack";

import {Main} from "../screens/Main";
import {IntroductionScreen} from "../screens/introduction/IntroductionScreen";

import routeNames from "./routeNames";

const Stack = createStackNavigator()

export const MainNavigation = () => {
    return (
        <>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false
                }}
                initialRouteName={routeNames.MainScreen}>
                <Stack.Screen
                    name={routeNames.MainScreen}
                    component={Main}
                />
                <Stack.Screen
                    name={routeNames.IntroductionScreen}
                    component={IntroductionScreen}
                />
            </Stack.Navigator>
        </>
    );
};