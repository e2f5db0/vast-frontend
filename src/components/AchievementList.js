import React from 'react'
import Header from '../components/Header'
import achievementService from '../services/achievementService'

const AchievementList = ({ achievements, setAchievementList, setMainscreen, setStartEnabled }) => {
    if (achievements.length > 0) {
        return (
            <div className='App'>
                <Header moving={true} />
                <div className='Body'>
                    {
                        achievements.map((achievement) => <p>{achievement} - {achievementService.getDescription(achievement)}</p>)
                    }
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
