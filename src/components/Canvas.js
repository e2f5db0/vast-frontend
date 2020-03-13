import React, { useState, useEffect } from 'react'
import '../App.css'
import Header from './Header'
import Line from './Line'
import Button from './Button'
import ReactAudioPlayer from 'react-audio-player'
import lineService from '../services/lineService'
import achievementService from '../services/achievementService'

const Canvas = ({ baseurl, i, setMainScreen, setCanvas, sCount, setSCount, setEnd, achievements }) => {

    const [line, setLine] = useState('That was rather unpleasant to watch. Do you believe that poor little creature will fall in the end?')
    const [choices, setChoices] = useState(['I hope so.', 'No.', 'Remain silent'])
    const [index, setIndex] = useState(i)
    const [path, setPath] = useState('')
    const [showChoices, setShowChoices] = useState(false)

    const [lCount, setLCount] = useState('')
    const [cCount, setCCount] = useState('')
    const [rCount, setRCount] = useState('')

    const [toVast, setToVast] = useState(false)

    useEffect(() => {
        lineService.get_count_left()
            .then((count) => setLCount(count))

        lineService.get_count_center()
            .then((count) => setCCount(count))

        lineService.get_count_right()
            .then((count) => setRCount(count))
    }, [])

    const handleFirstChoice = (path) => {
        setPath(path)
        nextLine(path)
    }

    const nextLine = (path) => {
        lineService.nextLine(path, index, setShowChoices, setLine, setChoices, setIndex)
    }

    const renderAchievement = (ending, delay, tag) => {
        setTimeout(() => {
            if (!achievementService.hasAchievement(achievements, tag)) {
                setEnd(ending)
                setCanvas(false)
            } else {
                setToVast(true)
            }
        }, delay * 1000)
    }
    if (lineService.end(path, index, lCount, cCount, rCount) === true) {
        if (path === 'left') {
            renderAchievement('rotten_religion', 21, 'R')
        }
        if (path === 'center') {
            renderAchievement('meet_your_death', 4, 'M')
        }
        if (path === 'right') {
            renderAchievement('tale_of_creation', 18, 'T')
        }
    }

    return (
        <div className='App'>
            <div className='Canvas'>
                <Header className='Header' moving={false} />
                {
                    path === '' &&
                    <ReactAudioPlayer src={baseurl + 'lines/start.wav'} autoPlay onEnded={() => {
                        setShowChoices(true)
                    }} />
                }
                {
                    path !== '' &&
                    <ReactAudioPlayer src={baseurl + 'lines/' + path + '_path' + String(index - 1) + '.wav'} autoPlay onEnded={() => {
                        if (lineService.end(path, index, lCount, cCount, rCount) === false) {
                            setShowChoices(true)
                        }
                    }} />
                }
                <div>
                    <div>
                        <Line text={line} />
                    </div>
                    {
                        showChoices === true &&
                        <div>
                            <Button type='Choice-button' text={choices[0]} handleClick={() => {
                                if (path === '') {
                                    handleFirstChoice('left')
                                    return
                                }
                                nextLine(path)
                            }} />
                            <Button type='Choice-button' text={choices[1]} handleClick={() => {
                                if (path === '' && achievementService.hasAchievements(achievements) === true) {
                                    handleFirstChoice('center')
                                    return
                                    // choosing the center path first is disallowed
                                } else if (path === '' && achievementService.hasAchievements(achievements) === false) {
                                    handleFirstChoice('right')
                                }
                                nextLine(path)
                            }} />
                            <Button type='Choice-button' text={choices[2]} handleClick={() => {
                                if (choices[2] === 'Remain silent') {
                                    setSCount(sCount + 1)
                                }
                                if (path === '' && achievementService.hasAchievement(achievements, 'T')) {
                                    handleFirstChoice('center')
                                    return
                                } else if (path === '') {
                                    handleFirstChoice('right')
                                    return
                                }
                                nextLine(path)
                            }} />
                        </div>
                    }
                    {
                        toVast && 
                        <Button type='Main-button' text='To Vast' handleClick={() => {
                            setMainScreen(true)
                            setCanvas(false)
                        }} />
                    }
                </div>
            </div>
        </div>
    )
}

export default Canvas
