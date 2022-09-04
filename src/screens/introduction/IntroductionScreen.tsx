import React from "react"
import { Text, Image, View, StyleSheet } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context";
import { CustomButton } from "../../reusableComponents/CustomButton";
import ButtonNames from "../../constants/ButtonNames";
import {CustomHeader} from "../../reusableComponents/CustomHeader";

interface Props {
    navigation: any,
}

const introductionTitle = "It's time for a coffee"
const introductionSubtitle = "Monte coffee on order"

export const IntroductionScreen = ({ navigation }: Props): JSX.Element => {
    return (
        <SafeAreaView style={styles.flex}>
            <CustomHeader/>
            <View style={styles.flex}>
                <View style={{alignItems: 'center'}}>
                    <Image source={require("../../assets/monteLogo/monteLogo.png")}/>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.title}>{introductionTitle}</Text>
                    <Text style={styles.subtitle}>{introductionSubtitle}</Text>
                </View>
            </View>
            <View style={{flexDirection: 'row', paddingHorizontal: 30}}>
                <View style={styles.flex}/>
                <CustomButton
                    style={{flex: 1}}
                    onPress={() => navigation.goBack()}
                    title={ButtonNames.GetStarted}
                />
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    flex: {
        flex: 1
    },
    textContainer: {
        marginTop: 69,
        marginHorizontal: 30
    },
    title: {
        fontSize: 32,
        fontWeight: "500",
        lineHeight: 48
    },
    subtitle: {
        fontSize: 20,
        fontWeight: "400",
        lineHeight: 23
    }
})