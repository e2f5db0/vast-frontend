import React, { useState, useEffect } from 'react'
import ReactAudioPlayer from 'react-audio-player'
import { createStage, checkCollision, checkBoundaries } from '../gameHelpers'
import { StyledGridWrapper, StyledGrid } from './styles/StyledGrid'
import { useInterval } from '../hooks/useInterval'
import { useBlock, usePlayer } from '../hooks/useBlock'
import { useStage } from '../hooks/useStage'
import Stage from './Stage'
import Button from './Button'

import god_speaking from '../resources/god-speaking.gif'
import god_beaten from '../resources/god-beaten.png'
import banner from '../background.png'
import music from '../resources/chapel-revisited.wav'
import evil_laugh from '../resources/evil-laugh.wav'

const Minigame = ({ setChapelRevisited, setMainScreen, setStartEnabled }) => {

  const [laugh, setLaugh] = useState(true)
  const [beaten, setBeaten] = useState(false)
  const [gameOver, setGameOver] = useState(false)
  const [stop, setStop] = useState(false)

  useEffect(() => {
    startGame()
  }, [])

  const [dropTime, setDropTime] = useState(null)
  const [message, setMessage] = useState('Move with the arrow keys')

  const [block, updateBlockPos, resetBlock] = useBlock()
  const [player, updatePlayerPos] = usePlayer()
  const [stage, setStage] = useStage(block, resetBlock, player)

  const moveHorizontally = dir => {
    if (!checkBoundaries(player, stage, { x: dir, y: 0 })) {
      updatePlayerPos({ x: dir, y: 0 })
    }
  }

  const moveVertically = dir => {
    if (!checkBoundaries(player, stage, { x: 0, y: dir })) {
      updatePlayerPos({ x: 0, y: dir })
    }
  }

  const startGame = () => {
    setMessage('')
    setStage(createStage())
    setDropTime(200)
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
        setStop(true)
        setDropTime(null)
      } else if (beaten) {
        setStop(true)
        setMessage('You did it! We are finally free!')
      } else {
        updateBlockPos({ x: 0, y: 0, collided: true })
      }
    }
  }

  useInterval(() => {
    drop()
    if (dropTime > 50) {
      setDropTime(dropTime - 0.4)
    }
  }, dropTime)

  const move = ({ keyCode }) => {
    if (keyCode === 37) {
      // arrow right
      moveHorizontally(-1)
    } else if (keyCode === 39) {
      // arrow left
      moveHorizontally(1)
    } else if (keyCode === 40) {
      // arrow down
      moveVertically(1)
    } else if (keyCode === 38) {
      // arrow up
      moveVertically(-1)
    }
  }

  return (
    <div className='App' role="button" tabIndex="0" onKeyDown={e => move(e)}>
      <div className='Body'>
        <img src={banner} alt='banner' />
        {
          gameOver === false &&
          <ReactAudioPlayer src={music} autoPlay onEnded={() => {
            setLaugh(false)
            setBeaten(true)
          }} />
        }
        {
          laugh === true &&
          <ReactAudioPlayer src={evil_laugh} autoPlay loop />
        }
        <div>
          {
            beaten === false &&
            <img src={god_speaking} className='God' alt='God speaking' />
          }
          {
            beaten === true &&
            <img src={god_beaten} className='God' alt='God beaten' />
          }
        </div>
        <div>
          <div>
            <StyledGridWrapper>
              <StyledGrid>
                <Stage stage={stage} />
              </StyledGrid>
            </StyledGridWrapper>
            <div>
              <p>{message}</p>
            </div>
            {
              gameOver === true &&
              <Button type='Main-button' text='Again' handleClick={() => startGame()} />
            }
          </div>
        </div>
        {
          beaten === true &&
          <Button type='Main-button' text='To Vast' handleClick={() => {
            setChapelRevisited(false)
            setStartEnabled(true)
            setMainScreen(true)
          }} />
        }
      </div>
    </div>
  )
}

export default Minigame
