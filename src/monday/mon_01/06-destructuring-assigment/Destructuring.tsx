import React from "react";
type LessonType = {
    title: string
}
export type ManType = {
    name: string
    age: number
    lesson: Array<LessonType>
    address: {street: {title: string}}
}
type PropsType = {
    title: string
    man: ManType

}
export const ManComponent: React.FC<PropsType> = (props) => {
    const {title, man} = props
    return (
        <div>
            <h1>{title}</h1>
            <hr/>
            <div>
                {man.name}
            </div>
        </div>
    )
}