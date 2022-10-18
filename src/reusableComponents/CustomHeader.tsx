import React from "react";
import {StyleSheet, TouchableOpacity, Image, View, Text} from "react-native";
import {Color} from "../constants/Color";
import imageAssets from "../assets/imageAssets";

interface Props {
    navigation: any,
    text?: string,
    leftButton: boolean,
    rightButton?: boolean,
    leftAction?: () => void,
    rightAction?: () => void,
    leftButtonImage?: string,
    rightButtonImage?: string,
}

export const CustomHeader = ({
                                 navigation,
                                 text,
                                 leftButtonImage,
                                 leftAction,
                                 leftButton,
                                 rightButtonImage,
                                 rightButton,
                                 rightAction
                             }: Props): JSX.Element => {
    return (
        <View style={styles.container}>
            {leftButton &&
                <TouchableOpacity
                    style={{flex: 1}}
                    onPress={() => leftAction ? leftAction() : navigation.goBack()}
                >
                    <Image source={leftButtonImage ? leftButtonImage : imageAssets.back}/>
                </TouchableOpacity>
            }
            {!!text && <Text style={styles.text}>{text}</Text>}
            {rightButton ?
                <TouchableOpacity style={{flex: 1}} onPress={() => rightAction ? rightAction() : navigation.goBack()}>
                    <Image source={rightButtonImage ? rightButtonImage : imageAssets.back}/>
                </TouchableOpacity> :
                <View style={{flex: 1}}/>}
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        height: 50,
        backgroundColor: Color.transparent,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 30
    },
    text: {
        fontWeight: "500",
        fontSize: 20
    }
})