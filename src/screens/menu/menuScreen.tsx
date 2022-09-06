import React from "react";
import { ScrollView, Text } from "react-native";
import Container from "../../reusableComponents/Container";

interface Props {
    navigation: any
}

export const MenuScreen = ({ navigation }: Props): JSX.Element => {
    return (
        <Container navigation={navigation}>
            <ScrollView style={{flex: 1}}>
                <Text>111111</Text>
            </ScrollView>
        </Container>
    )
}