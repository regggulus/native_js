import {CityType} from "../monday_01_objects/cityTest/monday_01_02_01";
import {createMessages, getStreetsTitlesOffHouses, getStreetsTitlesOfGovernmentsBuildings} from "./01_05_City";


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


//01. создайте в том же файле еще одну функцию, чтобы тесты прошли

test.skip('list of streets of goverments buildings', () => {
    let streets = getStreetsTitlesOfGovernmentsBuildings(city.governmentBuilding)

    expect(streets.length).toBe(2)
    expect(streets[0]).toBe(1)
})

//01 создайте в том же файле еще одну функциюб чтобы тесты прошли
test.skip('list of streets title', () => {
    let buildings = getStreetsTitlesOffHouses(city.houses)

    expect(buildings.length).toBe(3)
    expect(buildings[0]).toBe('White street')
    expect(buildings[1]).toBe('Happy street')
    expect(buildings[2]).toBe('Happy street')
})

test.skip('create greeting messages for streets', () => {
let message = createMessages(city.houses)

    expect(message.length).toBe(3)
    expect(message[0]).toBe('Hello guys from White street')
    expect(message[1]).toBe('Hello guys from Happy street')
    expect(message[2]).toBe('Hello guys from Happy street')
})