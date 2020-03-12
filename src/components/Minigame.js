import React, { useState } from 'react'
import ReactAudioPlayer from 'react-audio-player'
import { createStage, checkCollision, checkBoundaries } from '../gameHelpers'
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
import boing from '../resources/minigame-confused.wav'
import death1 from '../resources/minigame-death1.wav'
import death2 from '../resources/minigame-death2.wav'
import fatality from '../resources/minigame-fatality.wav'
import goodbye from '../resources/minigame-end.wav'

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
    setMessage('God wants to kill you.')
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
        setDropTime(null)
      } else if (status === 'beaten') {
        setMessage('He is finished! We are finally free!')
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

  const godsPhases = () => {

    setTimeout(() => {
      setMessage('He is amused by his own wrath.')
    }, 20000)

    setTimeout(() => {
      setMessage('His wrath intensifies.')
    }, 45000)

    setTimeout(() => {
      setMessage('His wrath is getting intense!')
    }, 60000)

    setTimeout(() => {
      setLaugh(false)
      setMessage('God is getting suspicious.')
      setStatus('suspicious')
    }, 66000)

    setTimeout(() => {
      new Audio(boing).play()
      setMessage('God is confused!')
      setLaugh(false)
      setStatus('confused')
      new Audio(death2).play()
    }, 74000)

    setTimeout(() => {
      setLaugh(true)
      setMessage('God snapped out of it!')
      setStatus('laughing')
    }, 83000)

    setTimeout(() => {
      new Audio(boing).play()
      setLaugh(false)
      setStatus('confused')
      setMessage('God hurt himself in his confusion!')
    }, 90000)

    setTimeout(() => {
      setLaugh(true)
      setMessage('But he recovered!')
      setStatus('laughing')
    }, 100000)

    setTimeout(() => {
      setMessage('The magic spell is starting to wear off.')
    }, 110000)

    setTimeout(() => {
      new Audio(boing).play()
      setLaugh(false)
      setStatus('confused')
      setMessage('He is getting weaker! Finish him!')
    }, 119000)
  }

  return (
    <div className='App' role="button" tabIndex="0" onKeyDown={e => move(e)}>
      <div className='Body'>
        <img src={banner} alt='banner' />
        <ReactAudioPlayer src={death1} autoPlay onEnded={() => {
          startGame()
          setLaugh(true)
          setStatus('laughing')
          godsPhases()
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
          <div>
            <StyledGridWrapper>
              <StyledGrid>
                <Stage stage={stage} />
              </StyledGrid>
            </StyledGridWrapper>
            <div>
              <p>{message}</p>
            </div>
          </div>
        </div>
        {
          end === true &&
          <Button type='Main-button' text='To Vast' handleClick={() => {
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
