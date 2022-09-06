import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import routeNames from "./routeNames";
import {MenuScreen} from "../screens/menu/menuScreen";
import {TabBar} from "./tabbar/tabbar";
import {Main} from "../screens/Main";

const Tab = createBottomTabNavigator();

export const BottomNavigation = () => {
    return (
        <>
            <Tab.Navigator
                initialRouteName={routeNames.MenuScreen}
                tabBar={(props) => {
                    console.log(1111, props)
                    return (
                        <TabBar {...props}/>
                        )
                }}>
                <Tab.Screen name={routeNames.MenuScreen} component={MenuScreen}/>
                <Tab.Screen name={routeNames.MainScreen} component={Main}/>
            </Tab.Navigator>
        </>
    )
}