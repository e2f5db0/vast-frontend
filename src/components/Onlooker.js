import React from 'react'
import Header from './Header'
import Button from './Button'
import gif from '../resources/onlooker.gif'
import sound from '../resources/onlooker.wav'
import achievementService from '../services/achievementService'

const Onlooker = ({ setStartEnabled, setEnd, setMainscreen, achievements, completeAchievement }) => {

    new Audio(sound).play()

    return (
        <div>
            <div className='App'>
                <Header className='Header' moving={false} />
                <img className='Achievement' src={gif} alt='Achievement unlocked - Onlooker' />
                <br></br>
                <Button type='Achievement-button' text='To Beginning' handleClick={() => {
                    completeAchievement('Onlooker')
                    achievementService.all_achievements(achievementService.toList(achievements), completeAchievement, setEnd)
                    setStartEnabled(true)
                    setEnd('')
                    setMainscreen(true)
                }} />
            </div>
        </div>
    )
}

export default Onlooker
