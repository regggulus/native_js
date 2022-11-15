import {StudenType} from "../monday01_02";
import {addSkill, liveCity, makeStudentActive} from "./monFun01_03";

let student: StudenType;

beforeEach(() => {
    student = {
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
})
test.skip("new tech skill should be added to student", () => {
    expect(student.technologies.length).toBe(4)

    addSkill(student, "Redux")

    expect(student.technologies.length).toBe(5)
    expect(student.technologies[4].title).toBe("Redux")
    expect(student.technologies[4].id).toBeDefined()
})

test.skip("student shouldd be made active", () => {
    expect(student.isStudying).toBe(true)

    makeStudentActive(student)

    expect(student.isStudying).toBe(false)
})
test("student lives in city?", () => {

    let result1 = liveCity(student, "Moscow")
    let result2 = liveCity(student, "Minsk")

    expect(result1).toBe(false)
    expect(result2).toBe(false)
})