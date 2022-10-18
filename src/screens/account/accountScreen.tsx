import React from "react";
import Container from "../../reusableComponents/Container";
import {CustomHeader} from "../../reusableComponents/CustomHeader";
import imageAssets from "../../assets/imageAssets";

interface Props {
    navigation: any
}

export const AccountScreen = ({ navigation }: Props): JSX.Element => {
    return (
        <Container isHeaderHidden navigation={navigation}>
            <CustomHeader
                navigation={navigation}
                text={"Profile"}
                leftButton
                leftAction={() => {}}
                leftButtonImage={imageAssets.burgerMenu}
            />

        </Container>
    )
}