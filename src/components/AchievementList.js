import React from 'react'
import Header from '../components/Header'
import trophy from '../resources/trophy.png'
import Achievement from './Achievement'
import achievementService from '../services/achievementService'

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
                    <div className='AchievementList'>
                        {
                            achievementList.map((achievement) => <Achievement achievement={achievement} />)
                        }
                    </div>
                    <button className='Back-button' onClick={() => {
                        setAchievementList(false)
                        setMainscreen(true)
                        setStartEnabled(true)
                    }} >Back</button>
                </div>
            </div>
        )
    } else {
        return (
            <div className='App'>
                <Header moving={true} />
                <div className='Body'>
                    <p>No achievements.</p>
                    <button className='Back-button' onClick={() => {
                        setAchievementList(false)
                        setMainscreen(true)
                        setStartEnabled(true)
                    }} >Back</button>
                </div>
            </div>
        )
    }
}

export default AchievementList
