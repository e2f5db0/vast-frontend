import React from 'react'

const Button = ({ text, handleClick }) => {
    return (
        <>
            <button className='Button' onClick={handleClick}>{text}</button>
        </>
    )
}

export default Button