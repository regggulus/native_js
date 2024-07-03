export type StreetType = {
    title: string
}
export type AdressType = {
    number: number
    street: StreetType
}
export type HousesType = {
    buildedAt: number
    repaired: boolean
    address: AdressType
}
export type Citytype = {
    title: string
    houses: Array<HousesType>,
    governmentBuilding: Array<string>
    citizensNumber: number
}