import React, { Fragment, useCallback, useState } from 'react'
import Memo from './Memo'
import CallBack from './CallBack'

/* when we send function using props and we want to stop unnecessary rendering then useCallback
which stop unnecessary rerendering of child component */
const CallBackparent = () => {
    const [first, setfirst] = useState(10)
    const ChangeNumber = useCallback(() => {
        return 0
    }, [])
    return (
        <Fragment>
            <CallBack ChangeNumber={ChangeNumber} />
            {console.log("memo Parent", first)}
            <h1>{first}</h1>
            <button onClick={() => setfirst(first + 1)}>Change number</button>
        </Fragment>
    )
}
export default CallBackparent
