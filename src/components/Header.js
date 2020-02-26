import React from 'react'
import logo from '../vast-logo.gif'
import logo_static from '../vast-logo.jpg'


const Header = ({ moving }) => {

    if (moving) {
        return (
            <div>
                <img className='Logo' src={logo_static} alt='logo' />
            </div>
        )
    } else {
        return (
            <div>
                <img className='Logo' src={logo} alt='logo' />
            </div>
        )
    }
}

export default Header