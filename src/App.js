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
import End from './components/End'
import Minigame from './components/Minigame'
import ChapelRevisited from './components/ChapelRevisited'

const App = () => {

  const achievements = Cookies

  // views
  const [permissionDialogue, setPermissionDialogue] = useState(true)
  const [warning, setWarnign] = useState(false)
  const [canvas, setCanvas] = useState(false)
  const [mainscreen, setMainscreen] = useState(false)
  const [credits, setCredits] = useState(false)
  const [chapel, setChapel] = useState(false)
  const [achievementList, setAchievementList] = useState(false)
  const [miniGame, setMiniGame] = useState(false)
  const [chapelRevisited, setChapelRevisited] = useState(false)
  const [end, setEnd] = useState('')

  // parameters
  const [cookiePermission, setCookiePermission] = useState(false)
  const [startEnabled, setStartEnabled] = useState(false)
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
      <Canvas baseurl={baseurl} i={34} setMainScreen={setMainscreen} setCanvas={setCanvas} sCount={sCount}
        setSCount={setSCount} setEnd={setEnd} achievements={achievements} setMainScreen={setMainscreen} />
    )
  }

  if (mainscreen === true) {
    return (
      <MainScreen startEnabled={startEnabled} setAchievementList={setAchievementList}
        achievements={achievements} setMainscreen={setMainscreen} setCanvas={setCanvas}
        setChapel={setChapel} setChapelRevisited={setChapelRevisited} />
    )
  }

  if (chapel === true) {
    return (
      <Chapel baseurl={baseurl} setChapel={setChapel} setStartEnabled={setStartEnabled}
        setMainscreen={setMainscreen} />
    )
  }

  if (chapelRevisited === true) {
    return (
      <ChapelRevisited setChapelRevisited={setChapelRevisited} setMainScreen={setMainscreen}
        setStartEnabled={setStartEnabled} />
    )
  }

  if (credits === true) {
    return (
      <Credits setCredits={setCredits} setEnd={setEnd} />
    )
  }

  if (achievementList === true) {
    return (
      <AchievementList setAchievementList={setAchievementList} achievements={achievements}
        setMainscreen={setMainscreen} setStartEnabled={setStartEnabled} />
    )
  }

  if (miniGame === true) {
    return (
      <Minigame setMiniGame={setMiniGame} setMainScreen={setMainscreen}
        setStartEnabled={setStartEnabled} />
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
      <Everything achievements={achievements} setCredits={setCredits} setEnd={setEnd}
        cookiePermission={cookiePermission} />
    )
  }

  if (end === 'end') {
    return (
      <End setEnd={setEnd} setMinigame={setMiniGame} />
    )
  }
}

export default App
