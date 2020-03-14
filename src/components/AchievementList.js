import React from 'react'
import Header from '../components/Header'
import trophy from '../resources/trophy.png'
import Achievement from './Achievement'
import achievementService from '../services/achievementService'
import Button from './Button'

const AchievementList = ({ setAchievementList, setMainscreen, setStartEnabled, achievements, cache }) => {

    const achievementList = achievementService.toList(achievements, cache)
    let count = achievements.get('aCount')
    if (!count) {
        count = cache.length
    }

    if (achievementList.length > 0) {
        return (
            <div className='App'>
                <Header moving={true} />
                <div className='Body'>
                    <div>
                        <h2>Achievements  <small>({count}/5)</small></h2>
                        <img className='Trophy' src={trophy} alt='Black trophy' />
                    </div>
                    <div className='Achievement-list'>
                        {
                            achievementList.map((achievement, x) => <Achievement key={x} achievement={achievement} />)
                        }
                    </div>
                    <Button type='Back-button' text='Back' handleClick={() => {
                        setAchievementList(false)
                        setMainscreen(true)
                        setStartEnabled(true)
                    }} />
                </div>
            </div>
        )
    } else {
        return (
            <div className='App'>
                <Header moving={true} />
                <div className='Body'>
                    <p>No achievements.</p>
                    <Button type='Back-button' text='Back' handleClick={() => {
                        setAchievementList(false)
                        setMainscreen(true)
                        setStartEnabled(true)
                    }} />
                </div>
            </div>
        )
    }
}

export default AchievementList
