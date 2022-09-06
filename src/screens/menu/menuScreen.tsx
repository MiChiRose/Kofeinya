import React from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import {CustomHeader} from "../../reusableComponents/CustomHeader";

interface Props {

}

export const MenuScreen = ({}: Props): JSX.Element => {
    return (
        <SafeAreaView style={{flex: 1}}>
            <CustomHeader/>
            <ScrollView style={{flex: 1, backgroundColor: 'red'}}>
                <Text>111111</Text>
            </ScrollView>
        </SafeAreaView>
    )
}