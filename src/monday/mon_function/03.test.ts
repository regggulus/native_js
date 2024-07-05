import {StudentType} from "../mon_object02/02";
import {addSkill} from "./03";

let  student: StudentType;
beforeEach( () => {
    student = {
        id: 1,
        name: 'Harry',
        age: 25,
        isStudying: true,
        address: {
            country: 'Belarus',
            city: 'Minsk',
            street: 'Parnikovaya, 3',
        },
        personalDate: {
            phone: '3754843826',
            mail: 'student@gmail.com',
            idCard: 'passport'
        },
        technicalSkills: [
            {
                id: 1,
                title: 'HTML'
            },
            {
                id: 3,
                title: 'React'
            },
            {
                id: 4,
                title: 'Redux'
            },
        ]
    }
})

test('new tech skill should be added to student', () => {
   expect(student.technicalSkills.length).toBe(3)

    addSkill(student, 'JS')

    expect(student.technicalSkills.length).toBe(4)
    expect(student.technicalSkills[3].title).toBe('JS')
    expect(student.technicalSkills[3].id).toBeDefined()
})