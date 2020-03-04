import React from 'react'
import Button from './Button'
import Header from './Header'

const PermissionDialogue = ({ setWarning, setPermissionDialogue }) => {
    return (
        <div className='App'>
            <div className='Body'>
                <Header moving={false} />
                <h2>Cookie Policy</h2>
                <p>This game uses cookies to save your progress.</p>
                <Button type='Main-button' text='Accept' handleClick={() => {
                    setPermissionDialogue(false)
                    setWarning(true)
                }} />
                <Button type='Main-button' text='Reject' handleClick={() => {
                    // TODO
                }} />
            </div>
        </div>
    )
}

export default PermissionDialogue
