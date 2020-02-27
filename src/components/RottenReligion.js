import React from 'react'
import Header from './Header'
import Button from './Button'
import gif from '../achievements/rotten-religion.gif'
import sound from '../achievements/rotten-religion.wav'

const RottenReligion = ({ setStartEnabled, setEnd, setMainscreen, achievements, setAchievements }) => {

    new Audio(sound).play()

    return (
        <div>
            <div className='App'>
                <Header className='Header' moving={false} />
                <img className='Achievement' src={gif} alt='Achievement unlocked - Rotten Religion' />
                <br></br>
                <Button type='Achievement-button' text='To Beginning' handleClick={() => {
                    setAchievements(achievements.concat('rotten_religion'))
                    setStartEnabled(true)
                    setEnd('')
                    setMainscreen(true)
                }} />
            </div>
        </div>
    )
}

export default RottenReligion