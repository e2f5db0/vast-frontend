import React, { useState } from 'react'
import './App.css'
import Canvas from './components/Canvas'
import Credits from './components/Credits'
import MainScreen from './components/MainScreen'
import RottenReligion from './components/RottenReligion'

const App = () => {

  const [canvas, setCanvas] = useState(false)
  const [mainscreen, setMainscreen] = useState(true)
  const [credits, setCredits] = useState(false)

  const [achievements, setAchievements] = useState([])
  const [end, setEnd] = useState('')

  const [startEnabled, setStartEnabled] = useState(false)

  const baseurl = 'https://vast-backend.herokuapp.com/'

  if (canvas === true) {
    return (
      <Canvas baseurl={baseurl} initial_delay={6} i={1} p='' setCanvas={setCanvas} setEnd={setEnd} />
    )
  }

  if (mainscreen === true) {
    return (
      <MainScreen baseurl={baseurl} startEnabled={startEnabled}
        setMainscreen={setMainscreen} setCanvas={setCanvas} setCredits={setCredits} />
    )
  }

  if (credits === true) {
    return (
      <Credits setStartEnabled={setStartEnabled} setCanvas={setCanvas}
        setMainscreen={setMainscreen} setCredits={setCredits} />
    )
  }

  if (end === 'rotten_religion') {
    return (
      <RottenReligion setStartEnabled={setStartEnabled} setEnd={setEnd}
        setMainscreen={setMainscreen} achievements={achievements} setAchievements={setAchievements} />
    )
  }
}

export default App
