import React, { useState } from 'react'
import god_speaking from '../resources/god-speaking.gif'
import god_beaten from '../resources/god-beaten.png'
import ReactAudioPlayer from 'react-audio-player'
import banner from '../background.png'
import sound from '../resources/chapel-revisited.wav'
import evil_laugh from '../resources/evil-laugh.wav'
import Button from './Button'

const ChapelRevisited = ({ setChapelRevisited, setMainScreen, setStartEnabled }) => {

    const [laugh, setLaugh] = useState(true)
    const [beaten, setBeaten] = useState(false)
    const [message, setMessage] = useState('Move with the arrow keys')

    return (
        <div className='App'>
            <div className='Body'>
                <img src={banner} alt='banner' />
                <ReactAudioPlayer src={sound} autoPlay onEnded={() => {
                    setLaugh(false)
                    setBeaten(true)
                    setMessage('You did it! We are free at last!')
                }} />
                {
                    laugh === true &&
                    <ReactAudioPlayer src={evil_laugh} autoPlay loop />
                }
                <div>
                    {
                        beaten === false && 
                        <img src={god_speaking} className='God' alt='God speaking' />
                    }
                    {
                        beaten === true &&
                        <img src={god_beaten} className='God' alt='God beaten' />
                    }
                </div>
                <div>
                    <p>{message}</p>
                </div>
                <div className='Chapel-revisited-box'>
                    <div className='Player'></div>
                </div>
                {
                    beaten === true && 
                    <Button className='Main-button' text='To Vast' handleClick={() => {
                        setChapelRevisited(false)
                        setStartEnabled(true)
                        setMainScreen(true)
                    }} />
                }
            </div>
        </div>
    )
}

export default ChapelRevisited
