import React from "react";
import Container from "../../reusableComponents/Container";

interface Props {
    navigation: any
}

export const CartScreen = ({ navigation }:Props): JSX.Element => {
    return (
        <Container isHeaderHidden navigation={navigation}>

        </Container>
    )
}