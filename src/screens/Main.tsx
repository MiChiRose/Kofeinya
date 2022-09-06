import React from "react";
import { StyleSheet, Text, TouchableOpacity} from 'react-native';
import { Color } from "../constants/Color";
import routeNames from "../navigation/routeNames";
import Container from "../reusableComponents/Container";

interface Props {
    navigation: any
}

export const Main = ({ navigation }: Props): JSX.Element => {
    return (
        <Container
            isHeaderHidden
            navigation={navigation}
            style={styles.container}
        >
            <Text>Kofeinya App</Text>
            <TouchableOpacity
                onPress={() => {
                    navigation.navigate(routeNames.IntroductionScreen)
                }}
            >
                <Text>Press me</Text>
            </TouchableOpacity>
        </Container>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: Color.white,
        alignItems: 'center',
        justifyContent: 'center',
    },
});