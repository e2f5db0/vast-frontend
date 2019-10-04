import React from 'react'

const Line = ({ text, filename }) => {

    const line = new Audio('https://vast-backend.herokuapp.com/lines/' + filename + '.wav')
    line.play()

    return (
        <>
            <h2 className='mt-7'>{text}</h2>
        </>
    )
}

export default Line