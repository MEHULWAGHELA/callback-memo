import React, { memo } from 'react'

const Memo = (props) => {
    console.log("memo");
    // console.log(props.ChangeNumber);
    console.log(props.number)
    return (
        <div>
            <h2>
                Memo
            </h2>
            <h2>
                number:{props.number}
            </h2>

        </div>
    )
}
export default memo(Memo)
