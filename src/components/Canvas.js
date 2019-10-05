import React, { useState } from 'react'
import '../App.css'
import axios from 'axios'
import Header from './Header'
import Line from './Line'
import Button from './Button'

const Canvas = ({ baseurl }) => {

    const [line, setLine] = useState('That was rather unpleasant. Do you believe they will fall in the end?')
    const [choices, setChoices] = useState(['I hope so', 'No.', 'Remain silent'])
    const [index, setIndex] = useState('1')

    const left_path = async () => {
        const l = await axios.get(baseurl + 'left-path/' + index)
        const choices = [
            l.data.choice1,
            l.data.choice2,
            l.data.choice3
        ]
        setLine(l.data.text)
        setChoices(choices)
        new Audio(baseurl + 'lines/left_path' + index + '.wav').play()
        setIndex(index + 1)
    }

    const center_path = async () => {

    }

    const right_path = async () => {

    }

    return (
        <div>
            <Header />
            <div className='Canvas'>
                <div>
                    <Line text={line} />
                </div>
                <div className='Choices'>
                    <Button text={choices[0]} handleClick={left_path} />
                    <Button text={choices[1]} handleClick={center_path} />
                    <Button text={choices[2]} handleClick={right_path} />
                </div>
            </div>
        </div>
    )
}

export default Canvas