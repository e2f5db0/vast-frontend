import React from 'react'
import Button from './Button'
import Header from './Header'

const Warning = ({ setWarning, setChapel, setMainScreen }) => {
    return (
        <div className='App'>
            <div className='Body'>
                <Header moving={true} />
                <div className='Warning-dialogue'>
                    <h2 className='Warning'><b>Warning!</b></h2>
                    <p>This game expresses strong views towards religion.</p>
                    <p>Side effects may include permanent loss of religion and belief in central authority.</p>
                    <p>Choose carefully.</p>
                    <Button type='Choice-button Blue-pill' text='Blue pill' handleClick={() => {
                        setWarning(false)
                        setChapel(true)
                    }} />
                    <Button type='Choice-button Warning' text='Red pill' handleClick={() => {
                        setWarning(false)
                        setMainScreen(true)
                    }} />
                </div>
            </div>
        </div>
    )
}

export default Warning
