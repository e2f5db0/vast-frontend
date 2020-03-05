import React, { useState } from 'react'
import Header from './Header'
import Button from './Button'
import ReactAudioPlayer from 'react-audio-player'
import gif from '../resources/everything.gif'
import sound from '../resources/everything.wav'

const Everything = ({ completeAchievement }) => {

    const [showButton, setShowButton] = useState(false)

    return (
        <div>
            <div className='App'>
                <Header className='Header' moving={false} />
                <ReactAudioPlayer src={sound} autoPlay onEnded={() => {
                    setShowButton(true)
                }} />
                <img className='Achievement' src={gif} alt='Achievement unlocked - Everything' />
                <br></br>
                {
                    showButton === true &&
                    <Button type='Achievement-button' text='To Beginning' handleClick={() => {
                        completeAchievement('Everything')
                        // render Completionist
                    }} />
                }
            </div>
        </div>
    )
}

export default Everything
