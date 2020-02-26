import React from 'react'
import ReactDOM from 'react-dom'
import App from '../App'
import Header from './Header'
import Button from './Button'
import gif from '../achievements/rotten-religion.gif'
import sound from '../achievements/rotten-religion.wav'

const LeftEnd = () => {

    new Audio(sound).play()

    return (
        <div>
            <div className='App'>
                <Header className='Header' moving={false} />
                <img className='Achievement' src={gif} alt='Achievement unlocked - Rotten Religion' />
                <br></br>
                <Button type='Achievement-button' text='To Beginning' handleClick={() => {
                    ReactDOM.render(<App start={true} />, document.getElementById('root'))
                }} />
            </div>
        </div>
    )
}

export default LeftEnd