import React, { useState, useEffect } from 'react'
import Button from '../components/Button'
import end from '../resources/end.gif'
import solid from '../background.png'

const End = ({ setEnd, setMinigame }) => {

    const [showButton, setShowButton] = useState(false)

    useEffect(() => {
        setTimeout(() => {
            setShowButton(true)
        }, 7000)
    }, [])

    return (
        <div className='App'>
            <div className='Body'>
                <img className='Header' src={solid} alt='grey solid' />
                <div className='Centered'>
                    <img className='End-gif' src={end} alt='Dark creature sitting in a dark twitching room afraid.' />
                    <br></br>
                    {
                        showButton &&
                        <div className='App-header'>
                            <p>More death:</p>
                            <a className='Link' href='http://www.orderofthegooddeath.com/' >The Order of a Good Death</a>
                            <br></br>
                            <div className='Centered'>
                                <Button type='Minigame-button' text='Chapel (Revisited)' handleClick={() => {
                                    setEnd('')
                                    setMinigame(true)
                                }} />
                            </div>
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}

export default End
