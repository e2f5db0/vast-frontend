import React from 'react'
import Header from './Header'
import Button from './Button'
import gif from '../resources/rotten-religion.gif'
import sound from '../resources/meet-your-death.wav'
import achievementService from '../services/achievementService'

const MeetYourDeath = ({ setStartEnabled, setEnd, setMainscreen, achievements, setAchievements, sCount }) => {

    new Audio(sound).play()
    setAchievements(achievements.concat('meet_your_death'))

    return (
        <div>
            <div className='App'>
                <Header className='Header' moving={false} />
                <img className='Achievement' src={gif} alt='Achievement unlocked - Meet Your Death' />
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

export default MeetYourDeath
