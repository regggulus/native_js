test('should take old man older then 90', () => {
    const agas = [10, 20, 25, 69, 91, 95, 100]
    const predicate = (age: number) => {
        return age > 90
    }
    const oldAges = agas.filter(predicate)

    expect(oldAges.length).toBe(3)
    expect(oldAges[0]).toBe(91)

})
test('should take courses chipper 160', () => {
    const courses = [
        {title: 'CSS', price: 100},
        {title: 'HTML', price: 120},
        {title: 'JS', price: 200},
        {title: 'React', price: 170},
    ]
    const chipCourses = courses.filter(courses => courses.price < 160)

    expect(chipCourses.length).toBe(2)
    expect(chipCourses[0].title).toBe('CSS')
    expect(chipCourses[1].title).toBe('HTML')

})

test('get only completed tasks', () => {
    const tasks = [
        {id: 1, title: 'Bread', isDone: true},
        {id: 2, title: 'Milk', isDone: false},
        {id: 3, title: 'Solt', isDone: true},
        {id: 4, title: 'Sugar', isDone: false}
    ]

    const completedTasks = tasks.filter(task => task.isDone)

    expect(completedTasks.length).toBe(2)
    expect(completedTasks[0].id).toBe(1)
    expect(completedTasks[1].id).toBe(3)
})