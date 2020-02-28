import React from 'react'
import Header from './Header'
import Button from './Button'
import gif from '../resources/tale-of-creation.gif'
import sound from '../resources/tale-of-creation.wav'
import achievementService from '../services/achievementService'

const TaleOfCreation = ({ setStartEnabled, setEnd, setMainscreen, achievements, setAchievements, sCount }) => {

    new Audio(sound).play()

    return (
        <div>
            <div className='App'>
                <Header className='Header' moving={false} />
                <img className='Achievement' src={gif} alt='Achievement unlocked - Tale of Creation' />
                <br></br>
                <Button type='Achievement-button' text='To Beginning' handleClick={() => {
                    if (!achievements.includes('Onlooker') && sCount >= 9) {
                        setAchievements(achievements.concat('Tale of Creation'))
                        setEnd('onlooker')
                    } else {
                        setAchievements(achievements.concat('Tale of Creation'))
                        achievementService.all_achievements(achievements, setAchievements, setEnd)
                        setStartEnabled(true)
                        setEnd('')
                        setMainscreen(true)
                    }
                }} />
            </div>
        </div>
    )
}

export default TaleOfCreation
