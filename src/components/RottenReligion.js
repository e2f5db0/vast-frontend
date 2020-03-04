import React from 'react'
import Header from './Header'
import Button from './Button'
import gif from '../resources/rotten-religion.gif'
import sound from '../resources/rotten-religion.wav'
import achievementService from '../services/achievementService'

const RottenReligion = ({ setStartEnabled, setEnd, setMainscreen, achievements, completeAchievement, sCount }) => {

    new Audio(sound).play()

    return (
        <div>
            <div className='App'>
                <Header className='Header' moving={false} />
                <img className='Achievement' src={gif} alt='Achievement unlocked - Rotten Religion' />
                <br></br>
                <Button type='Achievement-button' text='To Beginning' handleClick={() => {
                    if (!achievementService.find(achievements, 'Onlooker') && sCount >= 9) {
                        completeAchievement('Rotten Religion')
                        setEnd('onlooker')
                    } else {
                        completeAchievement('Rotten Religion')
                        achievementService.all_achievements(achievementService.toList(achievements), completeAchievement, setEnd)
                        setStartEnabled(true)
                        setEnd('')
                        setMainscreen(true)
                    }
                }} />
            </div>
        </div>
    )
}

export default RottenReligion
