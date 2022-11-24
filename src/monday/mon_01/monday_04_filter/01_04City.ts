import {CityType, GovernmentBuildingType} from "../monday_01_objects/cityTest/monday_01_02_01";

export function demolishHousesOnTheStreet(city: CityType, street: string) {
    city.houses = city.houses.filter( house => house.address.street.title !== street)
}

export function getBuildingsWithStaffCountGreaterThen(building: Array<GovernmentBuildingType>, numberPipl: number) {
    return building.filter(bild => bild.staffCount > numberPipl)
}