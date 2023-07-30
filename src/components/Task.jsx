import React, { memo } from 'react'

const Task = (props) => {
    console.log(props)
    return (
        <div>
            <button onClick={() => { props.change() }}>{props.children}</button>
        </div>
    )
}
export default memo(Task)
