import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { TouchableOpacity, StyleSheet, Text, View } from "react-native";
import {Color} from "../../constants/Color";

interface Props {
    state: any,
    descriptors: any,
    navigation: any
}

export const TabBar = ({ state, descriptors, navigation }: Props): JSX.Element => {
    return (
        <SafeAreaView style={{ flexDirection: 'row', backgroundColor: 'transparent', paddingHorizontal: 30}}>
            {state.routes.map((route: any, index: number) => {
                const { options } = descriptors[route.key];
                const label =
                    options.tabBarLabel !== undefined
                        ? options.tabBarLabel
                        : options.title !== undefined
                            ? options.title
                            : route.name;

                const isFocused = state.index === index;

                const onPress = () => {
                    const event = navigation.emit({
                        type: 'tabPress',
                        target: route.key,
                    });

                    if (!isFocused && !event.defaultPrevented) {
                        navigation.navigate(route.name);
                    }
                };

                const onLongPress = () => {
                    navigation.emit({
                        type: 'tabLongPress',
                        target: route.key,
                    });
                };

                return (
                    <TouchableOpacity
                        accessibilityRole="button"
                        accessibilityState={isFocused ? { selected: true } : {}}
                        accessibilityLabel={options.tabBarAccessibilityLabel}
                        testID={options.tabBarTestID}
                        onPress={onPress}
                        onLongPress={onLongPress}
                        style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}
                    >
                        <Text style={{ color: isFocused ? Color.green_msu : Color.black }}>
                            {label}
                        </Text>
                    </TouchableOpacity>
                );
            })}
        </SafeAreaView>
    );
}
