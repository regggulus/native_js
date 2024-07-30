import {student, TechnicalType} from "../mon_object02/02";

export const age = [10, 24, 36, 48, 55, 63, 78, 88, 96, 101]

const predicate = (age: number) => {
    return (
        age > 37
    )
}

const oldAgest = [63]

export type CourseType = {
    title: string
    price: number
}

const course = [
    {title: 'CSS', price: 120},
    {title: 'JavaScript', price: 220},
    {title: 'React', price: 150},
    {title: 'HTML', price: 50},
]


const chipPredicate = (course: CourseType) => {
    return course.price < 130
}

const chipCourse = [
    {title: 'CSS', price: 110},
    {title: 'REACT', price: 130}
]

export function  technicalSkipp (technicalSkills: TechnicalType[], skillToSkip: string) {
return technicalSkills.filter(skill => skill.title !== skillToSkip)
}