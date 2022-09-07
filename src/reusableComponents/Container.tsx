import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import {StyleProp, StyleSheet, ViewStyle} from "react-native";
import {CustomHeader} from "./CustomHeader";

interface Props {
    navigation: any,
    isHeaderHidden?: boolean | false,
    children?: JSX.Element | JSX.Element[],
    style?: StyleProp<ViewStyle>
}

const Container = ({ navigation, isHeaderHidden, children, style }: Props): JSX.Element => {
    return (
        <SafeAreaView style={[styles.container, style]}>
            {!isHeaderHidden && <CustomHeader navigation={navigation}/>}
            {children}
        </SafeAreaView>
    )
}

export default React.memo(Container)

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})