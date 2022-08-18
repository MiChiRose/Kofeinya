import React from "react";
import { StyleSheet, Text, View } from 'react-native';
import {Color} from "../constants/Color";

export const Main = (): JSX.Element => {
    return (
        <View style={styles.container}>
            <Text>Kofeinya App</Text>
        </View>
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