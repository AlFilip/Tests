type StreetType = {
    title: string
    prefix: string
}

type HouseNumberType = {
    number: number
    litera: number | string
}

type AdressType = {
    country: string
    city: string
    street: StreetType
    houseNumber: HouseNumberType
    flat: number
}

export type PersonType = {
    name: string
    secondName: string
    age: number
    adress: AdressType
}