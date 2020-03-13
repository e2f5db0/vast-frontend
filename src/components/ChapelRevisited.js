import React, { useState } from 'react'
import Button from '../components/Button'
import ReactAudioPlayer from 'react-audio-player'
import banner from '../background.png'
import god_beaten from '../resources/god-beaten.png'
import sound from '../resources/shame.wav'
import music from '../resources/chapel-revisited.wav'
import devil from '../resources/pray-for-the-devil.wav'
import cross from '../resources/white-cross.png'

const ChapelRevisited = ({ setChapelRevisited, setMainScreen }) => {

    const [shame, setShame] = useState(false)
    const [showButtons, setShowButtons] = useState(true)

    return (
        <div className='App'>
            <div className='Body'>
                <img src={banner} alt='banner' />
                <ReactAudioPlayer src={music} autoPlay loop />
                {
                    shame === true &&
                    <ReactAudioPlayer src={sound} autoPlay onEnded={() => {
                        setShame(false)
                        setShowButtons(true)
                    }} />
                }
                <div>
                    <div>
                        <img src={cross} className='Cross' alt='A White Cross' />
                        <br></br>
                        <img src={god_beaten} className='God' alt='God is beaten' />
                        <p>Here lies God. He lies no more.</p>
                    </div>
                    <div>
                        {
                            showButtons &&
                            <div>
                                <Button type='Main-button' text='Shame' handleClick={() => {
                                    setShame(true)
                                    setShowButtons(false)
                                }} />
                                <br></br>
                                <Button type='Main-button' text='To Vast' handleClick={() => {
                                    new Audio(devil).play()
                                    setMainScreen(true)
                                    setChapelRevisited(false)
                                }} />
                            </div>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ChapelRevisited
