import {CourseType, technicalSkipp} from "./04";
import {AddressType, PersonalType, TechnicalType} from "../mon_object02/02";

type StudentType = {
    id: number
    name: string
    age: number
    isStudying: boolean
    address: AddressType,
    personalDate: PersonalType
    technicalSkills: TechnicalType[]


}
const student: StudentType = {
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
            id: 2,
            title: 'JavaScript'
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
test.skip('should be tale old', ()=> {
    const age = [10, 24, 36, 48, 55, 63, 78, 88, 96, 101]
    const predicat = (age: number) => {
        return age > 48
    }
    const oldAges = age.filter(predicat)

    expect(oldAges.length).toBe(6);
    expect(oldAges[0]).toBe(55)
})
export {}

test.skip('should take courses chipper 160', () => {
    const courses = [
        {title: 'CSS', price: 120},
        {title: 'JavaScript', price: 220},
        {title: 'React', price: 150},
        {title: 'HTML', price: 50},
    ]
    const chipPredicate = (course: CourseType) => {
        return course.price < 130
    }
    const chipCourses = courses.filter(chipPredicate)

    expect(chipCourses.length).toBe(2);
    expect(chipCourses[0].title).toBe('CSS')
    expect(chipCourses[1].title).toBe('HTML')
})
test("should don't show off the technologies you ve learned", () => {
    const filteredSkills = technicalSkipp(student.technicalSkills, "JavaScript")
    console.log('Filterd Skills: ', filteredSkills)

    expect(student.technicalSkills.length).toBe(4)
    expect(student.technicalSkills[0].title).toBe("HTML")
    expect(student.technicalSkills[1].title).toBe("JavaScript")
    expect(student.technicalSkills[2].title).toBe("React")
    expect(student.technicalSkills[3].title).toBe("Redux")
})
