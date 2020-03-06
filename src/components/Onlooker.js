import React, { useState } from 'react'
import Header from './Header'
import Button from './Button'
import ReactAudioPlayer from 'react-audio-player'
import gif from '../resources/onlooker.gif'
import sound from '../resources/onlooker.wav'
import achievementService from '../services/achievementService'

const Onlooker = ({ setStartEnabled, setEnd, setMainscreen, achievements, cookiePermission }) => {

    const [showButton, setShowButton] = useState(false)

    return (
        <div>
            <div className='App'>
                <Header className='Header' moving={false} />
                <ReactAudioPlayer src={sound} autoPlay onEnded={() => {
                    setShowButton(true)
                }} />
                <img className='Achievement' src={gif} alt='Achievement unlocked - Onlooker' />
                <br></br>
                {
                    showButton === true &&
                    <Button type='Achievement-button' text='To Beginning' handleClick={() => {
                        achievementService.completeAchievement(cookiePermission, achievements, 'Onlooker')
                        // check if all achievements are completed
                        if (achievementService.allAchievements(achievements) === true) {
                            setEnd('everything')
                        } else {
                            setStartEnabled(true)
                            setEnd('')
                            setMainscreen(true)
                        }
                    }} />
                }
            </div>
        </div>
    )
}

export default Onlooker
