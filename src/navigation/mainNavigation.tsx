import React from "react"
import { createStackNavigator } from "@react-navigation/stack";

import {Main} from "../screens/Main";
import {IntroductionScreen} from "../screens/introduction/IntroductionScreen";
import {BottomNavigation} from "./bottomNavigation";

import routeNames from "./routeNames";

const Stack = createStackNavigator()

export const MainNavigation = () => {
    return (
        <>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false
                }}
                initialRouteName={routeNames.IntroductionScreen}>
                {/*<Stack.Screen*/}
                {/*    name={routeNames.MainScreen}*/}
                {/*    component={Main}*/}
                {/*/>*/}
                <Stack.Screen
                    name={routeNames.IntroductionScreen}
                    component={IntroductionScreen}
                />
                <Stack.Screen
                    name={routeNames.BottomNavigation}
                    component={BottomNavigation}
                />
            </Stack.Navigator>
        </>
    );
};