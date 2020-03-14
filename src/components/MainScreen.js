import React, { useState } from 'react'
import ReactAudioPlayer from 'react-audio-player'
import Header from '../components/Header'
import Button from '../components/Button'
import vast from '../resources/vast.gif'
import sound from '../resources/intro.wav'
import achievementService from '../services/achievementService'

const MainScreen = ({ startEnabled, setMainscreen, setCanvas, setAchievementList, setChapel, setChapelRevisited, achievements, cache }) => {

    const [volume, setVolume] = useState('on')
    const [message, setMessage] = useState('')
    const [volumeClicks, setVolumeClicks] = useState(0)
    const [startButton, setStartButton] = useState(startEnabled)
    const [playIntro, setPlayIntro] = useState(false)

    return (
        <div className='App'>
            <Header moving={true} />
            <img className='Logo' src={vast} alt='vast' />
            <div className='Body'>
                <p>{message}</p>
                {
                    startButton &&
                    <Button type='Main-button' text='Start' handleClick={() => {
                        setCanvas(true)
                        setMainscreen(false)
                    }} />
                }
                {
                    playIntro &&
                    <ReactAudioPlayer src={sound} autoPlay onEnded={() => {
                        setStartButton(true)
                    }} />
                }
                <div className='Main-sound'>
                    {
                        !startButton &&
                        <p>Sound:</p>
                    }
                    {
                        !startButton &&
                        <Button type='Main-button' text={volume} handleClick={() => {
                            setVolumeClicks(volumeClicks + 1)
                            if (volume === 'on') {
                                setVolume('off')
                                setPlayIntro(true)
                                setMessage('Now you can never turn it off.')
                            }
                            if (volumeClicks >= 2 && volumeClicks < 15) {
                                setMessage('No matter how many times you try.')
                            }
                            if (volumeClicks >= 15) {
                                setMessage('What is wrong with you?')
                            }
                        }} />
                    }
                </div>
                <div className='Button-stack'>
                    {
                        achievementService.hasAchievements(achievements, cache) &&
                        <Button type='Chapel-button' text='Chapel' handleClick={() => {
                            if (achievementService.hasAchievement(achievements, cache, 'E')) {
                                setChapelRevisited(true)
                                setMainscreen(false)
                            } else {
                                setChapel(true)
                                setMainscreen(false)
                            }
                        }} />
                    }
                    <Button type='Achievements-button' text='Achievements' handleClick={() => {
                        setAchievementList(true)
                        setMainscreen(false)
                    }} />
                </div>
            </div>
        </div>
    )
}

export default MainScreen
