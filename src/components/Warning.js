import React from 'react'
import Button from './Button'
import Header from './Header'

const Warning = ({ setWarning, setChapel, setMainScreen }) => {
    return (
        <div className='App'>
            <div className='Body'>
                <Header moving={true} />
                <div className='Dialogue'>
                    <h2 className='Warning'><b>Warning!</b></h2>
                    <p>This game expresses strong views towards religion.</p>
                    <p>Side effects may include permanent resentment towards centralized
                        authority and loss of faith.</p>
                    <p>Do you want to know the <b>truth</b>?</p>
                    <Button type='Choice-button' text='No.' handleClick={() => {
                        setWarning(false)
                        setChapel(true)
                    }} />
                    <Button type='Choice-button' text='Yes.' handleClick={() => {
                        setWarning(false)
                        setMainScreen(true)
                    }} />
                </div>
            </div>
        </div>
    )
}

export default Warning
