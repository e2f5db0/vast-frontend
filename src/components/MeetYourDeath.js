import React, { useState } from 'react'
import Header from './Header'
import Button from './Button'
import ReactAudioPlayer from 'react-audio-player'
import gif from '../resources/meet-your-death.gif'
import sound from '../resources/meet-your-death.wav'
import achievementService from '../services/achievementService'

const MeetYourDeath = ({ setStartEnabled, setEnd, setMainscreen, sCount, achievements, cookiePermission, cache, setCache }) => {

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
                    <Button type='Achievement-button' text='To Vast' handleClick={() => {
                        if (!achievementService.hasAchievement(achievements, cache, 'O') && sCount >= 9) {
                            achievementService.completeAchievement(cookiePermission, cache, setCache, achievements, 'Meet Your Death', 'M')
                            setEnd('onlooker')
                        } else {
                            achievementService.completeAchievement(cookiePermission, cache, setCache, achievements, 'Meet Your Death', 'M')
                            if (achievementService.allAchievements(achievements, cache) === true) {
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
