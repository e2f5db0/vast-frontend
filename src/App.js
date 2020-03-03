import React, { useState } from 'react'
import './App.css'
import Canvas from './components/Canvas'
import Credits from './components/Credits'
import MainScreen from './components/MainScreen'
import RottenReligion from './components/RottenReligion'
import Onlooker from './components/Onlooker'
import TaleOfCreation from './components/TaleOfCreation'
import MeetYourDeath from './components/MeetYourDeath'
import Everything from './components/Everything'
import AchievementList from './components/AchievementList'

const App = () => {

  const [canvas, setCanvas] = useState(false)
  const [mainscreen, setMainscreen] = useState(true)
  const [credits, setCredits] = useState(false)
  const [achievementList, setAchievementList] = useState(false)

  const [sCount, setSCount] = useState(0)
  const [achievements, setAchievements] = useState([])
  const [end, setEnd] = useState('')

  const [startEnabled, setStartEnabled] = useState(false)

  const baseurl = 'https://vast-backend.herokuapp.com/'

  if (canvas === true) {
    return (
      <Canvas baseurl={baseurl} initial_delay={6} i={1} setCanvas={setCanvas}
        sCount={sCount} setSCount={setSCount} setEnd={setEnd} achievements={achievements} />
    )
  }

  if (mainscreen === true) {
    return (
      <MainScreen baseurl={baseurl} startEnabled={startEnabled} setAchievementList={setAchievementList}
        setMainscreen={setMainscreen} setCanvas={setCanvas} setCredits={setCredits} />
    )
  }

  if (credits === true) {
    return (
      <Credits setStartEnabled={setStartEnabled} setCanvas={setCanvas}
        setMainscreen={setMainscreen} setCredits={setCredits} />
    )
  }

  if (achievementList === true) {
    return (
      <AchievementList achievements={achievements} setAchievementList={setAchievementList}
        setMainscreen={setMainscreen} setStartEnabled={setStartEnabled} />
    )
  }

  // Render endings

  if (end === 'meet_your_death') {
    return (
      <MeetYourDeath setStartEnabled={setStartEnabled} setEnd={setEnd} sCount={sCount}
        setMainscreen={setMainscreen} achievements={achievements} setAchievements={setAchievements} />
    )
  }

  if (end === 'onlooker') {
    return (
      <Onlooker setStartEnabled={setStartEnabled} setEnd={setEnd}
        setMainscreen={setMainscreen} achievements={achievements} setAchievements={setAchievements} />
    )
  }

  if (end === 'rotten_religion') {
    return (
      <RottenReligion setStartEnabled={setStartEnabled} setEnd={setEnd} sCount={sCount}
        setMainscreen={setMainscreen} achievements={achievements} setAchievements={setAchievements} />
    )
  }

  if (end === 'tale_of_creation') {
    return (
      <TaleOfCreation setStartEnabled={setStartEnabled} setEnd={setEnd} sCount={sCount}
        setMainscreen={setMainscreen} achievements={achievements} setAchievements={setAchievements} />
    )
  }

  if (end === 'everything') {
    return (
      <Everything achievements={achievements} setAchievements={setAchievements} />
    )
  }
}

export default App
