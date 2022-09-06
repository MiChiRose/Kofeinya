interface CoffeeModel {
    id: number,
    name: string,
    image: string,
    price: number,
    points: number
}
export const Cappuccino: CoffeeModel = {
    id: 1,
    name: "Cappuccino",
    image: "",
    price: 2.5,
    points: 4
}

export const Espresso: CoffeeModel = {
    id: 2,
    name: "Espresso",
    image: "",
    price: 1.99,
    points: 3
}

export const CoffeeData: Array<CoffeeModel> = [
    Cappuccino,
    Espresso
]

