import React, { useState, useEffect } from 'react'
import '../App.css'
import axios from 'axios'
import Header from './Header'
import Line from './Line'
import Button from './Button'
import ReactAudioPlayer from 'react-audio-player'
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

    useEffect(() => {
        lineService.get_count_left()
            .then((count) => setLCount(count))

        lineService.get_count_center()
            .then((count) => setCCount(count))

        lineService.get_count_right()
            .then((count) => setRCount(count))
    }, [])

    // handle the first Line
    if (path === '') {
        setTimeout(() => {
            setShowChoices(true)
        }, initial_delay * 1000)
    }

    // handle the endings
    const render_achievement = (ending, delay) => {
        setTimeout(() => {
            setEnd(ending)
            setCanvas(false)
        }, delay * 1000)
    }
    if (path === 'left' && index === lCount + 1) {
        render_achievement('rotten_religion', 22)
    }
    if (path === 'center' && index === cCount + 1) {
        render_achievement('meet_your_death', 4)
    }
    if (path === 'right' && index === rCount + 1) {
        render_achievement('tale_of_creation', 18)
    }

    // fetches the next line from the database when a choice is made
    const next_line = async (path) => {
        const l = await axios.get(baseurl + path + '-path/' + String(index))
        setShowChoices(false)
        const choices = [
            l.data.choice1,
            l.data.choice2,
            l.data.choice3
        ]
        const text = l.data.text
        setLine(text)
        setChoices(choices)
        setIndex(index + 1)
    }

    const handleFirstChoice = (path) => {
        setPath(path)
        next_line(path)
    }

    return (
        <div className='App'>
            <div className='Canvas'>
                <Header className='Header' moving={false} />
                {
                    path !== '' &&
                    <ReactAudioPlayer src={baseurl + 'lines/' + path + '_path' + String(index-1) + '.wav'} autoPlay onEnded={() => {
                        setShowChoices(true)
                    }} />
                }
                <div>
                    <div>
                        <Line text={line} />
                    </div>
                    {showChoices === true && <div>
                        <Button type='Choice-button' text={choices[0]} handleClick={() => {
                            if (path === '') {
                                handleFirstChoice('left')
                                return
                            }
                            next_line(path)
                        }} />
                        <Button type='Choice-button' text={choices[1]} handleClick={() => {
                            if (path === '' && achievements.length > 0) {
                                handleFirstChoice('center')
                                return
                            } else if (path === '' && achievements.length === 0) { // choosing the center path first is disallowed
                                handleFirstChoice('right')
                            }
                            next_line(path)
                        }} />
                        <Button type='Choice-button' text={choices[2]} handleClick={() => {
                            if (choices[2] === 'Remain silent') {
                                setSCount(sCount + 1)
                            }
                            if (path === '') {
                                handleFirstChoice('right')
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
