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
export type GovernmentBuilding = {
    type : 'Hospital' | 'Fire-Station'
    budget: number
    staffCount: number
    address: AdressType
}
export type CityType = {
    title: string
    houses: Array<HousesType>,
    governmentBuilding: Array<GovernmentBuilding>
    citizensNumber: number
}