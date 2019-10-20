import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'
import '../App.css'
import axios from 'axios'
import Header from './Header'
import Line from './Line'
import Button from './Button'
import LeftEnd from './LeftEnd'

// renders a line, plays is out loud & renders the corresponding choices as buttons
const Canvas = ({ baseurl, initial_delay }) => {

    const [line, setLine] = useState('That was rather unpleasant to watch. Do you believe that poor little creature will fall in the end?')
    const [choices, setChoices] = useState(['I hope so.', 'No.', 'Remain silent'])
    const [index, setIndex] = useState(1)
    const [path, setPath] = useState('')
    const [showChoices, setShowChoices] = useState(false)

    useEffect(() => {
        if (path === '') {
            setTimeout(() => {
                setShowChoices(true)
            }, initial_delay * 1000)
        }
    }, [])

    // show the choices after the audio has stopped playing
    const handleChoices = (time) => {
        setTimeout(() => {
            setShowChoices(true)
        }, time * 1000)
    }

    // fetches the next line from the database when a choice is clicked
    const next_line = async (path) => {
        const l = await axios.get(baseurl + path + '-path/' + String(index))
        setShowChoices(false)
        handleChoices(l.data.duration)
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
                {showChoices && <div className='Choices'>
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
                </div>}
            </div>
        </div>
    )
}

export default Canvas