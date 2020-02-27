import React, { useState, useEffect } from 'react'
import Header from './Header'
import credits from '../credits.gif'
import audio from '../credits.wav'

const Credits = ({ setStartEnabled, setMainscreen, setCredits }) => {

    const [showBack, setShowBack] = useState(false)

    useEffect(() => {
        new Audio(audio).play()
        setTimeout(() => {
            setShowBack(true)
        }, 32000)
    }, [])

    return (
        <div className='App'>
            <Header className='Header' moving={false} />
            <div className='Body'>
                <div className='Credits-left'>
                    <img className='Credits-gif' src={credits} alt='Dark creature sitting in a dark twitching room afraid.' />
                </div>
                <div className='Credits-right'>
                    <img className='Credits-gif' src={credits} alt='Placeholder for credits' />
                    <br></br>
                    <small>Placeholder for credits</small>
                </div>
                <br></br>
                {showBack && <button className='Credits-button' onClick={() => {
                    setStartEnabled(true)
                    setMainscreen(true)
                    setCredits(false)
                }} >Back</button>}
            </div>
        </div>
    )
}

export default Credits