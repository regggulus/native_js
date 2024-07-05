import {StudentType} from "../mon_object02/02";


export const sum = (a: number, b: number) => {
    return (
        a + b
    )
}

export const addSkill = (student: StudentType, skill: string) => {
    student.technicalSkills.push({
        id: new Date().getTime(),
        title: skill
    })
}