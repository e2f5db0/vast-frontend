import React from 'react'
import ReactDOM from 'react-dom'
import App from '../App'
import Header from './Header'
import Line from './Line'

const LeftEnd = ({ baseurl, text }) => {

    new Audio(baseurl + 'lines/left_path/36.wav').play()

    setTimeout(() => {
        ReactDOM.render(<App start={true} />, document.getElementById('root'))
    }, 21000)

    return (
        <div>
            <Header />
            <div className='Canvas'>
                <div>
                    <Line text={text} />
                </div>
            </div>
        </div>
    )
}

export default LeftEnd