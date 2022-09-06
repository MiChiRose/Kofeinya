import React from "react";
import { StyleSheet, TouchableOpacity, Image, View} from "react-native";

interface Props {
    navigation: any
}

export const CustomHeader = ({navigation}: Props): JSX.Element => {
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <Image source={require('../assets/backButton/backButton.png')}/>
            </TouchableOpacity>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        height: 50,
        backgroundColor: 'yellow',
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 30
    }
})