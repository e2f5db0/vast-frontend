import React from 'react'
import Header from './Header'
import Button from './Button'
import gif from '../resources/everything.gif'
import sound from '../resources/everything.wav'

const Everything = ({ achievements, setAchievements }) => {

    new Audio(sound).play()

    return (
        <div>
            <div className='App'>
                <Header className='Header' moving={false} />
                <img className='Achievement' src={gif} alt='Achievement unlocked - Everything' />
                <br></br>
                <Button type='Achievement-button' text='To Beginning' handleClick={() => {
                    setAchievements(achievements.concat('Everything'))
                    // render completionist
                }} />
            </div>
        </div>
    )
}

export default Everything
