import React, { useState } from 'react'
import Header from './Header'
import Button from './Button'
import ReactAudioPlayer from 'react-audio-player'
import gif from '../resources/tale-of-creation.gif'
import sound from '../resources/tale-of-creation.wav'
import achievementService from '../services/achievementService'

const TaleOfCreation = ({ setStartEnabled, setEnd, setMainscreen, achievements, completeAchievement, sCount }) => {

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
                    <Button type='Achievement-button' text='To Beginning' handleClick={() => {
                        if (!achievementService.find(achievements, 'Onlooker') && sCount >= 9) {
                            completeAchievement('Tale of Creation')
                            setEnd('onlooker')
                        } else {
                            completeAchievement('Tale of Creation')
                            achievementService.all_achievements(achievementService.toList(achievements), completeAchievement, setEnd)
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

export default TaleOfCreation
