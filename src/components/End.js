import React, { useState, useEffect } from 'react'
import end from '../resources/end.gif'
import solid from '../background.png'

const End = ({ setMainScreen, setStartEnabled, setEnd, setChapelRevisited }) => {

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
                <img className='End-gif' src={end} alt='Dark creature sitting in a dark twitching room afraid.' />
                <br></br>
                {
                    showButton &&
                    <div className='App-header'>
                        <p>More death:</p>
                        <a className='Link' href='http://www.orderofthegooddeath.com/' >The Order of a Good Death</a>
                        <br></br>
                        <div className='Centered'>
                            <button className='Main-button' onClick={() => {
                                setStartEnabled(false)
                                setMainScreen(true)
                                setEnd('')
                            }} >Back to Vast
                            </button>
                            <button className='Main-button' onClick={() => {
                                setEnd('')
                                setChapelRevisited(true)
                            }} >Chapel (Revisited)
                            </button>
                        </div>
                    </div>
                }
            </div>
        </div>
    )
}

export default End
