import React from 'react'
import logo from '../resources/vast-logo.gif'
import logo_static from '../resources/vast-logo.jpg'

const Header = ({ moving }) => {

    if (moving === false) {
        return (
            <div>
                <img className='Logo' src={logo_static} alt='logo' />
            </div>
        )
    } else if (moving === true) {
        return (
            <div>
                <img className='Logo' src={logo} alt='logo' />
            </div>
        )
    }
}

export default Header
