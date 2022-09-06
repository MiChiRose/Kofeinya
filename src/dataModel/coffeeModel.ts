import assets from "./dataModelAssets";

export interface CoffeeModel {
    id: number,
    name: string,
    image: string,
    price: number,
    points: number,
    type: number
}

const MENU_TYPE = {
    cappuccino: 1,
    raf: 2,
    latte: 3,
    flatWhite: 4,
    espresso: 5,
    americano: 6
}

export const Cappuccino: CoffeeModel = {
    id: 1,
    name: "Cappuccino",
    image: assets.cappuccino,
    price: 2.5,
    points: 2,
    type: MENU_TYPE.cappuccino
}

export const Raf: CoffeeModel = {
    id: 2,
    name: "Raf",
    image: assets.raf,
    price: 1.99,
    points: 3,
    type: MENU_TYPE.raf
}

export const Latte: CoffeeModel = {
    id: 3,
    name: "Latte",
    image: assets.latte,
    price: 1.50,
    points: 4,
    type: MENU_TYPE.latte
}

export const FlatWhite: CoffeeModel = {
    id: 4,
    name: "Flat White",
    image: assets.flatWhite,
    price: 1.50,
    points: 4,
    type: MENU_TYPE.flatWhite
}

export const Espresso: CoffeeModel = {
    id: 5,
    name: "Espresso",
    image: assets.espresso,
    price: 1.99,
    points: 3,
    type: MENU_TYPE.espresso
}

export const Americano: CoffeeModel = {
    id: 6,
    name: "Americano",
    image: assets.americano,
    price: 1.49,
    points: 4,
    type: MENU_TYPE.americano
}

export const CoffeeData: Array<CoffeeModel> = [
    Cappuccino,
    Raf,
    Latte,
    FlatWhite,
    Espresso,
    Americano
]

