import React from 'react'

const Title = () => {
    console.log(' hi in title component ')
    return (
        <div>
            <h1>use call back example</h1>  
        </div>
    )
}

export default React.memo(Title)