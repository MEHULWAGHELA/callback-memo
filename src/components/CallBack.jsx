import React, { memo } from 'react'

const CallBack = (props) => {
    console.log("memo");
    console.log(props.ChangeNumber);
    return (
        <div>Memo</div>
    )
}
export default memo(CallBack)
