import React from 'react'
import '../App.css'
import Header from './Header'
import Line from './Line'
import Button from './Button'

const Canvas = ({ line, choices, filename }) => {

    return (
        <div>
            <Header />
            <div className='Canvas'>
                <div>
                    <Line text={line} filename={filename} />
                </div>
                <div className='Choices'>
                    <Button text={choices[0]} />
                    <Button text={choices[1]} />
                    <Button text={choices[2]} />
                </div>
            </div>
        </div>
    )
}

export default Canvas