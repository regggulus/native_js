import {CityType} from "../monday_01_objects/cityTest/monday_01_02_01";
import {demolishHousesOnTheStreet, getBuildingsWithStaffCountGreaterThen} from "./01_04City";

let city: CityType

beforeEach(() => {
    city = {
        title: 'New York',
        houses: [
            {
                id: 1, buildedAt: 2012, repaired: false,
                address: {
                    number: 100,
                    street: {title: 'White street'}
                }
            },
            {
                id: 2, buildedAt: 2012, repaired: false,
                address: {
                    number: 100,
                    street: {title: 'Happy street'}
                }
            },
            {
                id: 3, buildedAt: 2012, repaired: false,
                address: {
                    number: 100,
                    street: {title: 'Happy street'}
                }
            }

        ],
        governmentBuilding: [
            {
                type: 'Hospital',
                address: {street: {title: 'Central Str'}, number: 12},
                budget: 200000, staffCount: 200
            },
            {
                type: 'Fire-Station',
                address: {street: {title: 'South Str'}, number: 12},
                budget: 500000, staffCount: 1200
            }
        ],
        citizensNumber: 1000000
    }
})


//01. дополните тип HouseType (добавьте порядковый номер id от 1 по позрастанию)
//02. создайте в тои же файле еще одну функцию, чтобы тесты прошли

test.skip('Houses should be destroyed', () => {
    demolishHousesOnTheStreet(city, "Happy street")

    expect(city.houses.length).toBe(1)
    expect(city.houses[0].id).toBe(1)
})

//01 создайте в том же файле еще одну функциюб чтобы тесты прошли
test.skip('buildings with correct staff count', () => {
    let buildings = getBuildingsWithStaffCountGreaterThen(city.governmentBuilding, 500)

    expect(buildings.length).toBe(1)
    expect(buildings[0].type).toBe('Fire-Station')
})