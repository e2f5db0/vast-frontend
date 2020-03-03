import React, { useState, useEffect } from 'react'
import '../App.css'
import axios from 'axios'
import Header from './Header'
import Line from './Line'
import Button from './Button'
import lineService from '../services/lineService'

const Canvas = ({ baseurl, initial_delay, i, setCanvas, sCount, setSCount, setEnd, achievements }) => {

    const [line, setLine] = useState('That was rather unpleasant to watch. Do you believe that poor little creature will fall in the end?')
    const [choices, setChoices] = useState(['I hope so.', 'No.', 'Remain silent'])
    const [index, setIndex] = useState(i)
    const [path, setPath] = useState('')
    const [showChoices, setShowChoices] = useState(false)

    const [lCount, setLCount] = useState('')
    const [cCount, setCCount] = useState('')
    const [rCount, setRCount] = useState('')

    const render_achievement = (ending, delay) => {
        setTimeout(() => {
            setEnd(ending)
            setCanvas(false)
        }, delay * 1000)
    }

    useEffect(() => {
        lineService.get_count_left()
            .then((count) => setLCount(count))

        lineService.get_count_center()
            .then((count) => setCCount(count))

        lineService.get_count_right()
            .then((count) => setRCount(count))
    }, [])

    if (path === '') {
        setTimeout(() => {
            setShowChoices(true)
        }, initial_delay * 1000)
    }
    if (path === 'left' && index === lCount+1) {
        render_achievement('rotten_religion', 22)
    }
    if (path === 'center' && index === cCount+1) {
        render_achievement('meet_your_death', 4)
    }
    if (path === 'right' && index === rCount+1) {
        render_achievement('tale_of_creation', 18)
    }

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
        update_states(choices, text)
        new Audio(baseurl + 'lines/' + path + '_path' + String(index) + '.wav').play()
    }

    const update_states = (choices, text) => {
        setLine(text)
        setChoices(choices)
        setIndex(index + 1)
    }

    return (
        <div className='App'>
            <div className='Canvas'>
                <Header className='Header' moving={false} />
                <div>
                    <div>
                        <Line text={line} />
                    </div>
                    {showChoices === true && <div>
                        <Button type='Choice-button' text={choices[0]} handleClick={() => {
                            if (path === '') {
                                setPath('left')
                                next_line('left')
                                return
                            }
                            next_line(path)
                        }} />
                        <Button type='Choice-button' text={choices[1]} handleClick={() => {
                            if (path === '' && achievements.length > 0) {
                                setPath('center')
                                next_line('center')
                                return
                            } else if (path === '' && achievements.length === 0) {
                                setPath('right')
                                next_line('right')
                            }
                            next_line(path)
                        }} />
                        <Button type='Choice-button' text={choices[2]} handleClick={() => {
                            if (choices[2] === 'Remain silent') {
                                setSCount(sCount + 1)
                            }
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
        </div>
    )
}

export default Canvas
