import React, { useState } from 'react'
import './App.css'
import Cookies from 'js-cookie'
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

  const achievements = Cookies

  const [permissionDialogue, setPermissionDialogue] = useState(true)
  const [warning, setWarnign] = useState(false)
  const [canvas, setCanvas] = useState(false)
  const [mainscreen, setMainscreen] = useState(false)
  const [credits, setCredits] = useState(false)
  const [chapel, setChapel] = useState(false)
  const [achievementList, setAchievementList] = useState(false)

  const [cookiePermission, setCookiePermission] = useState(false)
  const [startEnabled, setStartEnabled] = useState(false)
  const [end, setEnd] = useState('')

  const [sCount, setSCount] = useState(0)

  const baseurl = 'https://vast-backend.herokuapp.com/'

  if (permissionDialogue === true) {
    return (
      <PermissionDialogue setPermissionDialogue={setPermissionDialogue} setWarning={setWarnign}
        setCookiePermission={setCookiePermission} />
    )
  }

  if (warning === true) {
    return (
      <Warning setWarning={setWarnign} setChapel={setChapel} setMainScreen={setMainscreen} />
    )
  }

  if (canvas === true) {
    return (
      <Canvas baseurl={baseurl} i={1} setCanvas={setCanvas} sCount={sCount} setSCount={setSCount}
        setEnd={setEnd} achievements={achievements} />
    )
  }

  if (mainscreen === true) {
    return (
      <MainScreen baseurl={baseurl} startEnabled={startEnabled} setAchievementList={setAchievementList}
        achievements={achievements} setMainscreen={setMainscreen} setCanvas={setCanvas}
        setCredits={setCredits} setChapel={setChapel} />
    )
  }

  if (chapel === true) {
    return (
      <Chapel baseurl={baseurl} setChapel={setChapel} setStartEnabled={setStartEnabled}
        setMainscreen={setMainscreen} />
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
      <AchievementList setAchievementList={setAchievementList} achievements={achievements}
        setMainscreen={setMainscreen} setStartEnabled={setStartEnabled} />
    )
  }

  // Render endings

  if (end === 'meet_your_death') {
    return (
      <MeetYourDeath setStartEnabled={setStartEnabled} setEnd={setEnd} sCount={sCount}
        setMainscreen={setMainscreen} achievements={achievements} cookiePermission={cookiePermission} />
    )
  }

  if (end === 'onlooker') {
    return (
      <Onlooker setStartEnabled={setStartEnabled} setEnd={setEnd} setMainscreen={setMainscreen}
        achievements={achievements} cookiePermission={cookiePermission} />
    )
  }

  if (end === 'rotten_religion') {
    return (
      <RottenReligion setStartEnabled={setStartEnabled} setEnd={setEnd} sCount={sCount}
        setMainscreen={setMainscreen} achievements={achievements} cookiePermission={cookiePermission} />
    )
  }

  if (end === 'tale_of_creation') {
    return (
      <TaleOfCreation setStartEnabled={setStartEnabled} setEnd={setEnd} sCount={sCount}
        setMainscreen={setMainscreen} achievements={achievements} cookiePermission={cookiePermission} />
    )
  }

  if (end === 'everything') {
    return (
      <Everything achievements={achievements} cookiePermission={cookiePermission} />
    )
  }
}

export default App
