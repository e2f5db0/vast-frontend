import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import '../App.css'
import axios from 'axios'
import Header from './Header'
import Line from './Line'
import Button from './Button'
import LeftEnd from './LeftEnd'

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
        const text = l.data.text

        if (path === 'left' && index === 36) {
            left_end(text)
        }

        update_states(choices, text)
        new Audio(baseurl + 'lines/' + path + '_path' + String(index) + '.wav').play()
    }

    const update_states = (choices, text) => {
        setLine(text)
        setChoices(choices)
        setIndex(index + 1)
    }

    const left_end = (text) => {
        ReactDOM.render(<LeftEnd baseurl={baseurl} text={text} />, document.getElementById('root'))
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
                        next_line(path)
                    }} />
                    <Button text={choices[1]} handleClick={() => {
                        if (path === '') {
                            setPath('center')
                            next_line('center')
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