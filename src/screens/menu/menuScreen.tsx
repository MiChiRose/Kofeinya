import React from "react";
import { FlatList, ScrollView } from "react-native";
import Container from "../../reusableComponents/Container";
import { CoffeeData } from "../../dataModel/coffeeModel";
import { ProductCell } from "./components/productCell";

interface Props {
    navigation: any
}

export const MenuScreen = ({ navigation }: Props): JSX.Element => {
    return (
        <Container navigation={navigation}>
            <ScrollView style={{flex: 1}}>
                <FlatList
                    columnWrapperStyle={{justifyContent: 'space-between'}}
                    style={{paddingHorizontal: 20}}
                    data={CoffeeData}
                    numColumns={2}
                    renderItem={({item}) => <ProductCell data={item}/>}
                />
            </ScrollView>
        </Container>
    )
}