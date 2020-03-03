import React, { useState } from 'react'
import Header from '../components/Header'
import Button from '../components/Button'
import vast from '../resources/vast.gif'
import intro from '../resources/intro.wav'
import holy_sound from '../resources/holy_sound.wav'

const MainScreen = ({ baseurl, startEnabled, setMainscreen, setCanvas, setCredits, setAchievementList, achievements, setChapel }) => {

    const [volume, setVolume] = useState('on')
    const [message, setMessage] = useState('')
    const [volumeClicks, setVolumeClicks] = useState(0)
    const [startButton, setStartButton] = useState(startEnabled)

    const intro_song = new Audio(intro)

    return (
        <div className='App'>
            <Header moving={true} />
            <img className='Logo' src={vast} alt='vast' />
            <div className='Body'>
                <p>{message}</p>
                {startButton && <Button type='Main-button' text='Start' handleClick={() => {
                    new Audio(baseurl + 'lines/start.wav').play()
                    setCanvas(true)
                    setMainscreen(false)
                }} />}
                <div className='Main-sound'>
                    {!startButton && <p>Sound:</p>}
                    <br></br>
                    {!startButton && <Button type='Main-button' text={volume} handleClick={() => {
                        setTimeout(() => {
                            setStartButton(true)
                        }, 10000)
                        setVolumeClicks(volumeClicks + 1)
                        if (volume === 'on') {
                            setVolume('off')
                            intro_song.play()
                            setMessage('Now you can never turn it off.')
                        }
                        if (volumeClicks >= 2 && volumeClicks < 15) {
                            setMessage('No matter how many times you try.')
                        }
                        if (volumeClicks >= 15) {
                            setMessage('What is wrong with you?')
                        }
                    }} />}
                </div>
                <div className='Button-stack'>
                    <button className='Achievements-button' onClick={() => {
                        setAchievementList(true)
                        setMainscreen(false)
                    }} >Achievements</button>
                    {achievements.length > 0 && <button className='Chapel-button' onClick={() => {
                        setChapel(true)
                        new Audio(holy_sound).play()
                        setMainscreen(false)
                    }} >Chapel</button>}
                    {achievements.length > 0 && <button className='Credits-button' onClick={() => {
                        setCredits(true)
                        setMainscreen(false)
                    }} >Credits</button>}
                </div>
            </div>
        </div>
    )
}

export default MainScreen
