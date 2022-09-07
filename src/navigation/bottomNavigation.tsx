import React from "react";
import {Image} from "react-native";
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import routeNames from "./routeNames";
import imageAssets from "../assets/imageAssets";

import {MenuScreen} from "../screens/menu/menuScreen";
import {CartScreen} from "../screens/cart/cartScreen";
import {FavoritesScreen} from "../screens/favorites/favoritesScreen";
import {AccountScreen} from "../screens/account/accountScreen";
import {Color} from "../constants/Color";

const Tab = createBottomTabNavigator();

export const BottomNavigation = () => {
    return (
        <>
            <Tab.Navigator
                initialRouteName={routeNames.MenuScreen}
                screenOptions={({route}) => ({
                    tabBarLabel: () => {
                        return null
                    },
                    tabBarIcon: ({focused}) => {
                        let iconName;

                        if (route.name === routeNames.MenuScreen) {
                            iconName = imageAssets.home
                        } else if (route.name === routeNames.CartScreen) {
                            iconName = imageAssets.cart
                        } else if (route.name === routeNames.FavoritesScreen) {
                            iconName = imageAssets.heart
                        } else if (route.name === routeNames.AccountScreen) {
                            iconName = imageAssets.account
                        }

                        return (
                            <Image
                                source={iconName}
                                style={{tintColor: focused ? Color.orange_tan_crayola : Color.black}}
                            />
                        );
                    },
                    headerShown: false
                })}
            >
                <Tab.Screen name={routeNames.MenuScreen} component={MenuScreen}/>
                <Tab.Screen name={routeNames.CartScreen} component={CartScreen}/>
                <Tab.Screen name={routeNames.FavoritesScreen} component={FavoritesScreen}/>
                <Tab.Screen name={routeNames.AccountScreen} component={AccountScreen}/>
            </Tab.Navigator>
        </>
    )
}