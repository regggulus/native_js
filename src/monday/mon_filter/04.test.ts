import {CourseType} from "./04";
import exp from "constants";

test('should be tale old', ()=> {
    const age = [10, 24, 36, 48, 55, 63, 78, 88, 96, 101]
    const predicat = (age: number) => {
        return age > 48
    }
    const oldAges = age.filter(predicat)

    expect(oldAges.length).toBe(6);
    expect(oldAges[0]).toBe(55)
})
export {}

test('should take courses chipper 160', () => {
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

