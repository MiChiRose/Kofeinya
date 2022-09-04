import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Color } from "../constants/Color";
import routeNames from "../navigation/routeNames";

interface Props {
    navigation: any
}

export const Main = ({ navigation }: Props): JSX.Element => {
    return (
        <SafeAreaView style={styles.container}>
            <Text>Kofeinya App</Text>
            <TouchableOpacity
                onPress={() => {
                    navigation.navigate(routeNames.IntroductionScreen)
                }}
            >
                <Text>Press me</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Color.white,
        alignItems: 'center',
        justifyContent: 'center',
    },
});