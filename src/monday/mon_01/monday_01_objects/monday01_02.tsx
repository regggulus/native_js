export const value2 = "monday_02"

export type StudenType = {
    name: string
    age: number
    isStudying: boolean
    сommunity: string
    address: AddressType
    technologies: Array<TechnologiesType>
    booksForLearning: Array<BooksForLearningType>
}
type AddressType = {
    street: string
    sity: SityType
}
type SityType = {
    country: string
    title: string
}
type TechnologiesType = {
    id: number
    title: string
}
type BooksForLearningType = {
    id: number
    book: string
}

export let student: StudenType  = {
    name: "Egor",
    age: 34,
    isStudying: true,
    сommunity: "IT-incubator",
    address: {
        street: "Surganova 2",
        sity: {
            country: "Belarus",
            title: "Mинск",
        }
    },
    technologies: [
        {
            id: 1,
            title: "HTML"
        },
        {
            id: 2,
            title: "CSS"
        },
        {
            id: 3,
            title: "JavaScript"
        },
        {
            id: 4,
            title: "React"
        }
    ],
    booksForLearning: [
        {
            id: 1,
            book: "HTML and CSS. Website development and design, John Duckett"
        }, {
            id: 2,
            book: "Learning HTML, XHTML and CSS by Eric Freeman and Elizabeth Robson"
        }, {
            id: 3,
            book: "HTML5 and CSS3 for Dummies by Chris Minnick and Ed Tittel"
        }, {
            id: 4,
            book: "Learn JavaScript Programming by Eric Freeman and Elizabeth Robeson"
        }
    ]
}

console.log(student.address)