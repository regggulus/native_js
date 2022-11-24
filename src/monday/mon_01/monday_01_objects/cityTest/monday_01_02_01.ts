export const value3 = "monday_02_01"
export type StreetType = {
    title: string
}
export type AddressType = {
    number?: number
    street: StreetType
}
export type HousesType = {
    id?: number
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

// export const demolishHousesOnTheStreet = (city: CityType, street: string) => {
//
// }

export function repairHouse(housesType: HousesType) {
housesType.repaired =  true
}
export const toFireStaff = (buildingType: GovernmentBuildingType, staffCou: number) => {
buildingType.staffCount -= staffCou
}
export const toHireStaff = (buildingType: GovernmentBuildingType, staffCou: number) => {
buildingType.staffCount -= staffCou
}
