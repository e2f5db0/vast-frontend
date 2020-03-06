import React, { useState } from 'react'
import Header from './Header'
import Button from './Button'
import ReactAudioPlayer from 'react-audio-player'
import gif from '../resources/everything.gif'
import sound from '../resources/everything.wav'
import achievementService from '../services/achievementService'

const Everything = ({ achievements, setCredits, setEnd, cookiePermission }) => {

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
                    <Button type='Achievement-button' text='Credits' handleClick={() => {
                       achievementService.completeAchievement(cookiePermission, achievements, 'Everything')
                        setCredits(true)
                        setEnd('')
                    }} />
                }
            </div>
        </div>
    )
}

export default Everything
