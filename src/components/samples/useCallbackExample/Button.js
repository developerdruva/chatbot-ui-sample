import React from 'react'

const Button = ({ handleClick, children }) => {
    console.log('hi in Button component' + children);
    return (
        <div>
            <button onClick={handleClick} >{children}</button>
        </div>
    )
}

export default React.memo(Button)