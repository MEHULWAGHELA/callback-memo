import React, { Fragment, useCallback, useState } from 'react'
import Memo from './Memo'

const MemoParent = () => {
    const [first, setfirst] = useState(10)
    const [number, setnumber] = useState(50)
    /* it is only work when we send state as a props.if we send function as a props then it can not stop rerendering of child component that we can stop using call back */
    /*memo use in child component when we pass from parent to child and when parent component render but which value we pass to child as a props that is same then it is unnecessary render therefore to stop unnecessary rendering of child component we use memo wrapper in childcomponent during export */
    return (
        <Fragment>
            {console.log("Memo Parent")}
            <h1>Memo Parent</h1>
            <h1>First:{first}</h1>
            <Memo number={number} />
            <button onClick={() => setfirst(first + 1)}>Change number</button>
        </Fragment>
    )
}
export default MemoParent
