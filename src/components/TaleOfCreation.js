import React, { useState } from 'react'
import Header from './Header'
import Button from './Button'
import ReactAudioPlayer from 'react-audio-player'
import gif from '../resources/tale-of-creation.gif'
import sound from '../resources/tale-of-creation.wav'
import achievementService from '../services/achievementService'

const TaleOfCreation = ({ setStartEnabled, setEnd, setMainscreen, sCount, achievements, cookiePermission, cache, setCache }) => {

    const [showButton, setShowButton] = useState(false)

    return (
        <div>
            <div className='App'>
                <Header className='Header' moving={false} />
                <ReactAudioPlayer src={sound} autoPlay onEnded={() => {
                    setShowButton(true)
                }} />
                <img className='Achievement' src={gif} alt='Achievement unlocked - Tale of Creation' />
                <br></br>
                {
                    showButton === true &&
                    <Button type='Achievement-button' text='To Vast' handleClick={() => {
                        if (!achievementService.hasAchievement(achievements, cache, 'O') && sCount >= 9) {
                           achievementService.completeAchievement(cookiePermission, cache, setCache, achievements, 'Tale of Creation', 'T')
                            setEnd('onlooker')
                        } else {
                            achievementService.completeAchievement(cookiePermission, cache, setCache, achievements, 'Tale of Creation', 'T')
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

export default TaleOfCreation
