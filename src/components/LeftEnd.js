import React from 'react'
import ReactDOM from 'react-dom'
import App from '../App'
import Header from './Header'
import Button from './Button'
import achievement from '../rotten-religion.png'
import audio from '../amen.wav'

const LeftEnd = () => {

    new Audio(audio).play()

    return (
        <div>
            <div className='App'>
                <Header className='Header' />
                <img className='Achievement' src={achievement} alt='Achievement unlocked! - Rotten Religion' />
                <p></p>
                <Button type='Achievement-button' text='To Beginning' handleClick={() => {
                    ReactDOM.render(<App start={true} />, document.getElementById('root'))
                }} />
            </div>
        </div>
    )
}

export default LeftEnd