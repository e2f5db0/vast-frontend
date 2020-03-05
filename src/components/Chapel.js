import React, { useState, useEffect } from 'react'
import Header from '../components/Header'
import Button from '../components/Button'
import god from '../resources/god.png'
import god_speaking from '../resources/god-speaking.gif'
import wisdomService from '../services/wisdomService'
import ReactAudioPlayer from 'react-audio-player'
import devil from '../resources/pray-for-the-devil.wav'

const Chapel = ({ baseurl, setStartEnabled, setMainscreen, setChapel }) => {

    const [speaking, setSpeaking] = useState(true)
    const [id, setId] = useState(wisdomService.getRandomId())
    const [showPrey, setShowPrey] = useState(false)
    const [showPray, setShowPray] = useState(false)

    useEffect(() => {
        setTimeout(() => {
            setShowPray(true)
        }, 3000)
    }, [])

    return (
        <div className='App'>
            <div className='Body'>
                <Header className='Header' moving={false} />
                <ReactAudioPlayer src={baseurl + 'prey-for-god/' + String(id)} autoPlay onEnded={() => {
                    setSpeaking(false)
                    setShowPrey(true)
                }} />
                <div>
                    <div>
                        {speaking === false && <img src={god} className='God' alt='God' />}
                        {speaking === true && <img src={god_speaking} className='God-speaking' alt='God speaking' />}
                    </div>
                    {
                        showPray === true &&
                        <div>
                            <p><b>You fool!</b></p>
                            <p>Escape quickly!</p>
                            <Button type='Main-button' text='Pray for The Devil' handleClick={() => {
                                new Audio(devil).play()
                                setChapel(false)
                                setStartEnabled(true)
                                setMainscreen(true)
                            }} />
                        </div>
                    }
                    {
                        showPrey === true &&
                        <div>
                            <Button type='Main-button' text='Pray to God' handleClick={() => {
                                setId(wisdomService.getRandomId())
                                setShowPrey(false)
                                setSpeaking(true)
                            }} />
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}

export default Chapel
