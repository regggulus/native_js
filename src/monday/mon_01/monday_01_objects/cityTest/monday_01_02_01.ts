export const value3 = "monday_02_01"
export type StreetType = {
    title: string
}
export type AddressType = {
    id: number
    number?: number
    street: StreetType
}
export type HousesType = {
    buildedAt: number
    repaired: boolean
    address: AddressType
}
export type GovernmentBuildingType = {
    type: string
    budget: number
    staffCount: number
    address: AddressType
}
export type CityType = {
    title: string
    houses: Array<HousesType>
    governmentBuilding: Array<GovernmentBuildingType>
    citizensNumber: number
}

export function addMoneyToBudget(building: GovernmentBuildingType, budget: number) {
    building.budget += budget
}

export const demolishHousesOnTheStreet = (city: CityType, street: string) => {

}
