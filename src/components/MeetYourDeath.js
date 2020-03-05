import React, { useState } from 'react'
import Header from './Header'
import Button from './Button'
import ReactAudioPlayer from 'react-audio-player'
import gif from '../resources/meet-your-death.gif'
import sound from '../resources/meet-your-death.wav'
import achievementService from '../services/achievementService'

const MeetYourDeath = ({ setStartEnabled, setEnd, setMainscreen, sCount, achievements, completeAchievement }) => {

    const [showButton, setShowButton] = useState(false)

    return (
        <div>
            <div className='App'>
                <Header className='Header' moving={false} />
                <ReactAudioPlayer src={sound} autoPlay onEnded={() => {
                    setShowButton(true)
                }} />
                <img className='Achievement' src={gif} alt='Achievement unlocked - Meet Your Death' />
                <br></br>
                {
                    showButton === true &&
                    <Button type='Achievement-button' text='To Beginning' handleClick={() => {
                        if (!achievementService.find(achievements, 'Onlooker') && sCount >= 9) {
                            completeAchievement('Meet Your Death')
                            setEnd('onlooker')
                        } else {
                            completeAchievement('Meet Your Death')
                            if (achievementService.allAchievements(achievements) === true) {
                                setEnd('everything')
                            } else {
                                setStartEnabled(true)
                                setEnd('')
                                setMainscreen(true)
                            }
                        }
                    }} />
                }
            </div>
        </div>
    )
}

export default MeetYourDeath
