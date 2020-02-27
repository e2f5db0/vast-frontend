import React from 'react'
import Header from './Header'
import Button from './Button'
import gif from '../resources/rotten-religion.gif'
import sound from '../resources/tale-of-creation.wav'
import achievementService from '../services/achievementService'

const TaleOfCreation = ({ setStartEnabled, setEnd, setMainscreen, achievements, setAchievements, sCount }) => {

    new Audio(sound).play()
    setAchievements(achievements.concat('tale_of_creation'))

    return (
        <div>
            <div className='App'>
                <Header className='Header' moving={false} />
                <img className='Achievement' src={gif} alt='Achievement unlocked - Tale of Creation' />
                <br></br>
                <Button type='Achievement-button' text='To Beginning' handleClick={() => {
                    if (!achievements.includes('onlooker') && sCount >= 9) {
                        setEnd('onlooker')
                    } else {
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
