import {addMoneyToBudget, CityType, repairHouse, toFireStaff, toHireStaff} from "./monday_01_02_01";

let city: CityType;

beforeEach(() => {
    city = {
        title: "New York",
        houses: [
            {
                buildedAt: 2012,
                repaired: false,
                address: {
                    number: 100,
                    street: {
                        title: "White street"
                    }
                }
            },
            {
                buildedAt: 2008,
                repaired: false,
                address: {
                    number: 100,
                    street: {
                        title: "Happy street"
                    }
                }
            },
            {
                buildedAt: 2020,
                repaired: false,
                address: {
                    number: 101,
                    street: {
                        title: "Happy street"
                    }
                }
            }
        ],
        governmentBuilding: [
            {
                type: "Hospital",
                budget: 200000,
                staffCount: 200,
                address: {
                    street: {
                        title: "Central Str"
                    }
                }
            },
            {
                type: "Fire-Station",
                budget: 500000,
                staffCount: 2000,
                address: {
                    street: {
                        title: "Couth Str"
                    }
                }
            }
        ],
        citizensNumber: 100000
    }
})

//01. создайте в отдельном файле функцию, чтобы тесты прошли
test("Butget should be changed for Hospital", () => {
    addMoneyToBudget(city.governmentBuilding[0], 200000)

    expect(city.governmentBuilding[0].budget).toBe(400000)
})

//01 Тесты должны пройти
test("Butget should be changed for Fire-Station", () => {
    addMoneyToBudget(city.governmentBuilding[1], -200000)

    expect(city.governmentBuilding[1].budget).toBe(300000)
})
//01 дополните тип HouseType (добавте порядковый id от 1 и по возрастанию)
//02 создайте в том же файле еще одну функцию, чтобы тесты прошли
// test.skip("Houses should be destroyed", () => {
//     demolishHousesOnTheStreet(city, "Happy street")
//
//     expect(city.houses.length).toBe(1)
//     expect(city.houses[0].address.id).toBe(1)
// })
test("House shoulhd be repared", () => {
    repairHouse(city.houses[1])

    expect(city.houses[1].repaired).toBeTruthy()
})
test("staff should be increased", () => {
    toFireStaff(city.governmentBuilding[0], 20)

    expect(city.governmentBuilding[0].staffCount).toBe(180)
})
test("House should be repaired", () => {
    toHireStaff(city.governmentBuilding[1], 200)

    expect(city.governmentBuilding[1].staffCount).toBe(1800)
})