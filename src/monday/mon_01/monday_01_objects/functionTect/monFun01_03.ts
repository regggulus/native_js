import {student, StudenType} from "../monday01_02";

export function sum(a: number, b: number) {
    return a + b
}
console.log(sum(5,3))

export const addSkill = (student: StudenType, skill: string) => {
    student.technologies.push({id: 5, title: skill})
}

export const makeStudentActive = (st: StudenType) => {
    st.isStudying = false
}

export const liveCity = (s: StudenType, cityName: string) => {
    return s.address.sity.title === cityName
}