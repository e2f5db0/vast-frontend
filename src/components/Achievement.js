import React from 'react'
import achievementService from '../services/achievementService'

const Achievement = ({ achievement }) => {
    return (
        <div className='Achievement-entry'>
            <p>{achievement}</p>
            <small>{achievementService.getDescription(achievement)}</small>
        </div>
    )
}

export default Achievement
