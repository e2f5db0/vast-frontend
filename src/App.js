import React, { useState } from 'react'
import Cookies from 'js-cookie'
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
import Chapel from './components/Chapel'
import Warning from './components/Warning'
import PermissionDialogue from './components/PermissionDialogue'

const App = () => {

  const [permissionDialogue, setPermissionDialogue] = useState(true)
  const [warning, setWarnign] = useState(false)
  const [canvas, setCanvas] = useState(false)
  const [mainscreen, setMainscreen] = useState(false)
  const [credits, setCredits] = useState(false)
  const [chapel, setChapel] = useState(false)
  const [achievementList, setAchievementList] = useState(false)

  const [startEnabled, setStartEnabled] = useState(false)
  const [end, setEnd] = useState('')

  const [sCount, setSCount] = useState(0)
  const [achievementCount, setAchievementCount] = useState(0)
  const achievements = Cookies

  const baseurl = 'https://vast-backend.herokuapp.com/'

  const completeAchievement = (achievement) => {
    setAchievementCount(achievementCount + 1)
    achievements.set(String(achievementCount), achievement)
  }

  if (permissionDialogue === true) {
    return (
      <PermissionDialogue setPermissionDialogue={setPermissionDialogue} setWarning={setWarnign} />
    )
  }

  if (warning === true) {
    return (
      <Warning setWarning={setWarnign} setChapel={setChapel} setMainScreen={setMainscreen} />
    )
  }

  if (canvas === true) {
    return (
      <Canvas baseurl={baseurl} initial_delay={6} i={32} setCanvas={setCanvas}
        sCount={sCount} setSCount={setSCount} setEnd={setEnd} achievements={achievements} />
    )
  }

  if (mainscreen === true) {
    return (
      <MainScreen baseurl={baseurl} startEnabled={startEnabled} setAchievementList={setAchievementList}
        setMainscreen={setMainscreen} setCanvas={setCanvas} setCredits={setCredits} achievements={achievements}
        setChapel={setChapel} />
    )
  }

  if (chapel === true) {
    return (
      <Chapel baseurl={baseurl} setChapel={setChapel} setStartEnabled={setStartEnabled} setMainscreen={setMainscreen} />
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
        setMainscreen={setMainscreen} achievements={achievements} completeAchievement={completeAchievement} />
    )
  }

  if (end === 'onlooker') {
    return (
      <Onlooker setStartEnabled={setStartEnabled} setEnd={setEnd}
        setMainscreen={setMainscreen} achievements={achievements} completeAchievement={completeAchievement} />
    )
  }

  if (end === 'rotten_religion') {
    return (
      <RottenReligion setStartEnabled={setStartEnabled} setEnd={setEnd} sCount={sCount}
        setMainscreen={setMainscreen} achievements={achievements} completeAchievement={completeAchievement} />
    )
  }

  if (end === 'tale_of_creation') {
    return (
      <TaleOfCreation setStartEnabled={setStartEnabled} setEnd={setEnd} sCount={sCount}
        setMainscreen={setMainscreen} achievements={achievements} completeAchievement={completeAchievement} />
    )
  }

  if (end === 'everything') {
    return (
      <Everything achievements={achievements} completeAchievement={completeAchievement} />
    )
  }
}

export default App
