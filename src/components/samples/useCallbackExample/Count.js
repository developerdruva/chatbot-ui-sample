import React from 'react'

const Count = ({ text, count }) => {
    console.log('hi in count component')
    return (
        <div>
            <div>{text}-{count}</div>
        </div>
    )
}

export default React.memo(Count )