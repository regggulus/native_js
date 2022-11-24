const agas = [10, 20, 25, 69, 91, 95, 100]


const predicate = (age: number) => {
    return age > 90
}
const oldAges = [100]

type CoursesType = {
    title: string
    price: number
}

const courses = [
    {title: 'CSS', price: 100},
    {title: 'HTML', price: 120},
    {title: 'JS', price: 200},
    {title: 'React', price: 170},
]

const cheapPredicate = (course: CoursesType) =>{
    return course.price < 160
}

const chipCourses = [
    {title: 'CSS', price: 100},
    {title: 'HTML', price: 120}
]