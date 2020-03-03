import React, { useState } from 'react'
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
    const [showButtons, setShowButtons] = useState(false)

    return (
        <div className='App'>
            <div className='Canvas'>
                <Header className='Header' moving={false} />
                <ReactAudioPlayer src={baseurl + 'prey-for-god/' + String(id)} autoPlay onEnded={() => {
                    setSpeaking(false)
                    setShowButtons(true)
                }} />
                <div>
                    <div>
                        {speaking === false && <img src={god} className='God' alt='God' />}
                        {speaking === true && <img src={god_speaking} className='God-speaking' alt='God speaking' />}
                    </div>
                    {
                        showButtons === true && 
                        <div>
                            <Button type='Choice-button' text='Prey for God' handleClick={() => {
                                setId(wisdomService.getRandomId())
                                setShowButtons(false)
                                setSpeaking(true)
                            }} />
                            <Button type='Choice-button' text='Pray for The Devil' handleClick={() => {
                                new Audio(devil).play()
                                setChapel(false)
                                setStartEnabled(true)
                                setMainscreen(true)
                            }} />
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}

export default Chapel
