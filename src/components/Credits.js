import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'
import App from '../App'
import Header from './Header'
import credits from '../credits.gif'
import audio from '../credits.wav'

const Credits = () => {

    const [showBack, setShowBack] = useState(false)

    useEffect(() => {
        new Audio(audio).play()
        setTimeout(() => {
            setShowBack(true)
        }, 32000)
    }, [])

    return (
        <div className='App'>
            <Header className='Header' />
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
                    ReactDOM.render(<App start={true} />, document.getElementById('root'))
                }} >Back</button>}
            </div>
        </div>
    )
}

export default Credits