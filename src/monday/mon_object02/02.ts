
type AddressType = {
    country: string
    city: string
    street: string
}
type PersonalType = {
    phone: string
    mail: string
    idCard: string
}
type TechnicalType = {
    id: number
    title: string
}
type StudentType = {
    id: number
    name: string
    age: number
    isStudying: boolean
    address: AddressType,
    personalDate: PersonalType
    technicalSkills: TechnicalType[]


}
export const student: StudentType = {
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