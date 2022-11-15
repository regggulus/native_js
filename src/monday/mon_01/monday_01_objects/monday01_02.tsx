export const value2 = "monday_02"

type StudenType = {
    name: string
    age: number
    isStudying: boolean
    сommunity: string
    address: AddressType
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
type BooksForLearningType = {
    id: number
    book: string
}

let student: StudenType  = {
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