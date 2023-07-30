import React, { useCallback, useState } from 'react'
import Task from './Task'

/* in this task we pass different function on task component.that function call from child component and which function is use from child component that component only render other child component not render that time for that three term is rquired
1=>memo use
2=>call back use
3=>dependency use */
export const TaskParent = () => {
    const [first, setfirst] = useState(10)
    const [second, setsecond] = useState(15)
    const changefirst = useCallback(() => {
        setfirst(first + 1)
    }, [first])
    const changesecond = useCallback(() => {
        setsecond(second + 1)
    }, [second])
    return (
        <div>
            <Task change={changefirst}>first</Task>
            <Task change={changesecond}>second</Task>
            <h1>{first}</h1>
            <h1>{second}</h1>
        </div>
    )
}
