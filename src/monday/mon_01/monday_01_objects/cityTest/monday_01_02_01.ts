export const value3 = "monday_02_01"
export type StreetType = {
    title: string
}
export type AddressType = {
    number: number
    street: StreetType
}
export type HousesType = {
    buildedAt: number
    repaired: boolean
    address: AddressType
}
export type CityType = {
    title: string
    houses: Array<HousesType>
    governmentBuilding: Array<string>
    citizensNumber: number
}