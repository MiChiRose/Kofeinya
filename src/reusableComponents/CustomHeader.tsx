import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import {Text, StyleSheet, TouchableOpacity, Image, View } from "react-native";

export const CustomHeader = (): JSX.Element => {
    return (
        <View style={styles.container}>
            {/*<Image source={require('../assets/backButton/backButton.png')}/>*/}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        height: 50,
        flexDirection: 'row'
    }
})