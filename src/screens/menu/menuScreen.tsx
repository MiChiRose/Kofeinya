import React, {useState} from "react";
import { FlatList, ScrollView, Text } from "react-native";
import Container from "../../reusableComponents/Container";
import { CoffeeData } from "../../dataModel/coffeeModel";
import { ProductCell } from "./components/productCell";
import {HorizontalScrollSortList} from "./components/horizontalScrollSortList";

interface Props {
    navigation: any
}

export const MenuScreen = ({ navigation }: Props): JSX.Element => {
    const [data, setData] = useState([...new Set(CoffeeData)])
    return (
        <Container navigation={navigation}>
            <HorizontalScrollSortList
                productList={data}
                headerWithText={"categories"}
                chooseType={(a) => {
                    let b = data.filter((itm) => itm.type === a.type)
                    setData(b)
                }}
            />
            <ScrollView style={{flex: 1}}>
                <FlatList
                    columnWrapperStyle={{justifyContent: 'space-between'}}
                    style={{paddingHorizontal: 20}}
                    data={data}
                    numColumns={2}
                    renderItem={({item}) => <ProductCell data={item}/>}
                />
            </ScrollView>
        </Container>
    )
}