import React, { useState } from 'react'
import ReactAudioPlayer from 'react-audio-player'
import { createStage, checkCollision, godsPhases, move, moveHorizontally } from '../services/minigameService'
import { StyledGridWrapper, StyledGrid } from './styles/StyledGrid'
import { useInterval } from '../hooks/useInterval'
import { useBlock, usePlayer } from '../hooks/useBlock'
import { useStage } from '../hooks/useStage'
import Stage from './Stage'
import Button from './Button'

import god from '../resources/god.png'
import god_speaking from '../resources/god-speaking.gif'
import god_suspicious from '../resources/god-suspicious.png'
import god_confused from '../resources/god-confused.gif'
import god_beaten from '../resources/god-beaten.png'
import banner from '../background.png'
import music from '../resources/minigame.wav'
import evil_laugh from '../resources/evil-laugh.wav'
import death1 from '../resources/minigame-death1.wav'
import fatality from '../resources/minigame-fatality.wav'
import goodbye from '../resources/minigame-end.wav'
import arrow_right from '../resources/arrow-right.png'
import arrow_left from '../resources/arrow-left.png'

const Minigame = ({ setMiniGame, setMainScreen, setStartEnabled }) => {

  const [laugh, setLaugh] = useState(false)

  const [status, setStatus] = useState('normal')
  const [gameOver, setGameOver] = useState(true)

  const [dropTime, setDropTime] = useState(null)
  const [message, setMessage] = useState('Dodge with the arrow keys.')

  const [block, updateBlockPos, resetBlock] = useBlock()
  const [player, updatePlayerPos] = usePlayer()
  const [stage, setStage] = useStage(block, resetBlock, player)

  const [end, setEnd] = useState(false)

  const startGame = () => {
    setMessage('God wants to kill you.')
    setStage(createStage())
    setDropTime(300)
    resetBlock()
    setGameOver(false)
  }

  const drop = () => {

    if (!checkCollision(block, stage, { x: 0, y: 1 })) {
      updateBlockPos({ x: 0, y: 1, collided: false })
    } else {
      // this is impossible
      if ('god' === 'good') {
        setGameOver(true)
        setMessage('You are dead.')
        setDropTime(null)
      } else if (status === 'beaten') {
        setMessage('Fatality!')
      } else {
        updateBlockPos({ x: 0, y: 0, collided: true })
      }
    }
  }

  useInterval(() => {
    drop()
    if (dropTime > 100) {
      setDropTime(dropTime - 1)
    }
  }, dropTime)


  return (
    <div className='App' role="button" tabIndex="0" onKeyDown={e => move(e, player, stage, updatePlayerPos)}>
      <div className='Body'>
        <img src={banner} alt='banner' />
        <ReactAudioPlayer src={death1} autoPlay onEnded={() => {
          startGame()
          setLaugh(true)
          setStatus('laughing')
          godsPhases(setMessage, setLaugh, setStatus)
        }} />
        {
          gameOver === false &&
          <ReactAudioPlayer src={music} autoPlay onEnded={() => {
            setEnd(true)
            setLaugh(false)
            setStatus('beaten')
          }} />
        }
        {
          laugh === true &&
          <ReactAudioPlayer src={evil_laugh} autoPlay loop />
        }
        {
          end === true &&
          <ReactAudioPlayer src={fatality} autoPlay onEnded={() => {
            new Audio(goodbye).play()
          }} />
        }
        <div>
          {
            status === 'normal' &&
            <img src={god} className='God' alt='God speaking' />
          }
          {
            status === 'suspicious' &&
            <img src={god_suspicious} className='God' alt='God is suspicious' />
          }
          {
            status === 'laughing' &&
            <img src={god_speaking} className='God' alt='God is laughing' />
          }
          {
            status === 'confused' &&
            <img src={god_confused} className='God' alt='God is confused' />
          }
          {
            status === 'beaten' &&
            <img src={god_beaten} className='God' alt='God is beaten' />
          }
        </div>
        <div>
          <StyledGridWrapper>
            <StyledGrid>
              <Stage stage={stage} />
            </StyledGrid>
          </StyledGridWrapper>
        </div>
        <img className='Arrow' src={arrow_left} alt='Arrow left' onClick={() => moveHorizontally(-1, player, stage, updatePlayerPos)} />
        <img className='Arrow' src={arrow_right} alt='Arrow right' onClick={() => moveHorizontally(1, player, stage, updatePlayerPos)} />
        <p>{message}</p>
        {
          end === true &&
          <Button type='Minigame-button' text='To Vast' handleClick={() => {
            setMiniGame(false)
            setStartEnabled(true)
            setMainScreen(true)
          }} />
        }
      </div>
    </div>
  )
}

export default Minigame
