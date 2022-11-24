import {GovernmentBuildingType, HousesType} from "../monday_01_objects/cityTest/monday_01_02_01";

export const getStreetsTitlesOfGovernmentsBuildings = (building: Array<GovernmentBuildingType>) => {
    return building.map(b => b.address.street.title)
}

export const getStreetsTitlesOffHouses = (houses: Array<HousesType>) => {
    return houses.map(h => h.address.street.title)
}

export const createMessages = (houses: Array<HousesType>) => {
    return houses.map(m => `Hello guys from ${m.address.street.title}` )
}