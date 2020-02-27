import React, { useState } from 'react'
import Header from '../components/Header'
import Button from '../components/Button'
import vast from '../resources/vast.gif'
import intro from '../resources/intro.wav'

const MainScreen = ({ baseurl, startEnabled, setMainscreen, setCanvas, setCredits }) => {

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
                <button className='Credits-button' onClick={() => {
                    setCredits(true)
                    setMainscreen(false)
                }} >Credits</button>
            </div>
        </div>
    )
}

export default MainScreen
