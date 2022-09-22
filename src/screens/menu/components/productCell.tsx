import React from "react";
import {Image, Text, TouchableOpacity, View, StyleSheet} from "react-native";
import {CoffeeModel} from "../../../dataModel/coffeeModel";
import {Color} from "../../../constants/Color";

interface Props {
    data: CoffeeModel
}

const test: boolean = false

export const ProductCell = ({ data }: Props): JSX.Element => {
    return (
        <View style={styles.container}>
            <View style={styles.topContainer}>
                <Text style={styles.points}>{`${data.points} ${data.points > 1 ? 'points' : 'point'}`}</Text>
                <TouchableOpacity>
                    <Image
                        resizeMode={'contain'}
                        style={{tintColor: true ? Color.black : Color.red}}
                        source={require("../../../assets/heart/heart.png")}
                    />
                </TouchableOpacity>
            </View>
            {test ? (
                <View style={styles.rowContainer}>
                    <Text>☕️</Text>
                </View>
                ) : (
                    <View style={[styles.rowContainer, {marginVertical: 10, flex: 1}]}>
                        {/*@ts-ignore*/}
                        {data.image && <Image source={data.image}/>}
                    </View>
            )}
            <View style={[styles.rowContainer, styles.bottomContainer]}>
                <View>
                    <Text style={styles.productPrice}>${data.price}</Text>
                    <Text style={styles.productName}>{data.name}</Text>
                </View>
                <TouchableOpacity>
                    <Image source={require("../../../assets/addPlus/addPlus.png")}/>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginVertical: 10,
        marginHorizontal: 10,
        flex: 1,
        paddingHorizontal: 14,
        paddingVertical: 14,
        backgroundColor: Color.cream_alabaster,
        borderRadius: 15,
        shadowColor: Color.black,
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
    },
    topContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    rowContainer: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    bottomContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    productName: {
        fontSize: 14,
        fontWeight: '600'
    },
    productPrice: {
        fontSize: 10,
        fontWeight: '400'
    },
    points: {
        fontSize: 10,
        fontWeight: '500'
    }
})