import React from 'react'
import Button from './Button'
import Header from './Header'

const PermissionDialogue = ({ setWarning, setPermissionDialogue, setCookiePermission }) => {
    return (
        <div className='App'>
            <div className='Body'>
                <Header moving={false} />
                <div className='Dialogue'>
                    <h2>Cookie Policy</h2>
                    <p>This game uses cookies to save completed achievements.</p>
                    <Button type='Main-button' text='Accept' handleClick={() => {
                        setCookiePermission(true)
                        setPermissionDialogue(false)
                        setWarning(true)
                    }} />
                    <Button type='Main-button' text='Reject' handleClick={() => {
                        setCookiePermission(false)
                        setPermissionDialogue(false)
                        setWarning(true)
                    }} />
                </div>
            </div>
        </div>
    )
}

export default PermissionDialogue
