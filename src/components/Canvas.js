import React, { useState } from 'react'
import '../App.css'
import axios from 'axios'
import Header from './Header'
import Line from './Line'
import Button from './Button'

const Canvas = ({ baseurl }) => {

    const [line, setLine] = useState('That was rather unpleasant to watch. Do you believe they will fall in the end?')
    const [choices, setChoices] = useState(['I hope so.', 'No.', 'Remain silent'])
    const [index, setIndex] = useState(1)
    const [path, setPath] = useState('')

    const next_line = async (path) => {
        const l = await axios.get(baseurl + path + '-path/' + String(index))
        const choices = [
            l.data.choice1,
            l.data.choice2,
            l.data.choice3
        ]
        setLine(l.data.text)
        setChoices(choices)
        new Audio(baseurl + 'lines/' + path + '_path' + String(index) + '.wav').play()
        setIndex(index + 1)
    }

    return (
        <div>
            <Header />
            <div className='Canvas'>
                <div>
                    <Line text={line} />
                </div>
                <div className='Choices'>
                    <Button text={choices[0]} handleClick={() => {
                        if (path === '') {
                            setPath('left')
                            next_line('left')
                            return
                        }
                        next_line()
                    }} />
                    <Button text={choices[1]} handleClick={() => {
                        if (path === '') {
                            setPath('center')
                            return
                        }
                        next_line(path)
                    }} />
                    <Button text={choices[2]} handleClick={() => {
                        if (path === '') {
                            setPath('right')
                            next_line('right')
                            return
                        }
                        next_line(path)
                    }} />
                </div>
            </div>
        </div>
    )
}

export default Canvas