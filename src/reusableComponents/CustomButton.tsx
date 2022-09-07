import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import {Color} from "../constants/Color";

interface Props {
    onPress: () => void,
    title: string,
    style?: any
}

export const CustomButton = ({ onPress, title, style }: Props): JSX.Element => {
    return (
        <TouchableOpacity
            style={[styles.container, style]}
            onPress={onPress}
        >
            <Text style={styles.text}>{title ?? "Press me"}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 16,
        backgroundColor: Color.green_msu,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        fontSize: 15,
        fontWeight: "500",
        color: Color.white,
        lineHeight: 18
    }
})