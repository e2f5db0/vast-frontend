import React from 'react'

const Button = ({ text, handleClick, type }) => {
    return (
        <>
            <button className={type} onClick={handleClick}>{text}</button>
        </>
    )
}

export default Button