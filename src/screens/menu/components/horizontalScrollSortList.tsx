import React from "react";
import {ScrollView, Text, View, TouchableOpacity, StyleSheet} from "react-native";
import {Color} from "../../../constants/Color";
import {CoffeeModel, MENU_TYPE} from "../../../dataModel/coffeeModel";
import {capitalized} from "../../../reusableComponents/Capitalized";

interface Props {
    headerWithText?: string,
    productList: Array<CoffeeModel> | []
}

interface ButtonProps {
    isSelected: boolean,
    name: string,
    onPress: () => void,
}

const SortedButton = ({ isSelected, name, onPress }: ButtonProps): JSX.Element => {
    return (
        <TouchableOpacity
            style={[styles.sortedButtonContainer, {backgroundColor: isSelected ? Color.green_msu : Color.white}]}
            onPress={onPress}
        >
            <Text
                style={[styles.sortedButtonText, {color: isSelected ? Color.white : Color.black}]}
            >
                {name}
            </Text>
        </TouchableOpacity>
    )
}

export const HorizontalScrollSortList = ({ headerWithText, productList }: Props): JSX.Element => {
    let a = Object.keys(MENU_TYPE)
    return (
        <View style={styles.container}>
            {headerWithText && <Text style={styles.headerText}>{capitalized(headerWithText)}</Text>}
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                style={styles.horizontalScroll}
            >
                {a.map((item, index) => {
                    return (
                        <SortedButton
                            key={index}
                            name={capitalized(item)}
                            isSelected={false}
                            onPress={() => productList.filter(itm => itm.type === item.latte)}
                        />
                    )
                })}
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20,
    },
    headerText: {
        fontWeight: '500',
        fontSize: 20,
        paddingHorizontal: 10,
    },
    horizontalScroll: {
        paddingVertical: 20,
        paddingHorizontal: 10,
    },
    sortedButtonContainer: {
        borderRadius: 10,
        paddingHorizontal: 15,
        paddingVertical: 10,
        marginRight: 16,
        shadowColor: Color.black,
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
    },
    sortedButtonText: {
        fontWeight: '400',
        fontSize: 15,
    }
})