import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import vast from './vast.gif'
import intro from './intro.wav'
import './App.css'
import Button from './components/Button'
import Canvas from './components/Canvas'

const App = ({ start }) => {

  const intro_song = new Audio(intro)
  const baseurl = 'https://vast-backend.herokuapp.com/'
  const [volume, setVolume] = useState('off')
  const [message, setMessage] = useState('')
  const [volumeClicks, setVolumeClicks] = useState(0)
  const [startButton, setStartButton] = useState(start)

  const render_canvas = () => {
    ReactDOM.render(<Canvas baseurl={baseurl} />, document.getElementById('root'))
  }

  return (
    <div className='App'>
      <header className='App-header'>
        <h1>Vast</h1>
        <img src={vast} className='App-logo' alt='logo' />
        <p></p>
        {startButton && <Button text='Start' handleClick={() => {
          new Audio(baseurl + 'lines/start.wav').play()
          render_canvas()
        }} />}
        <div className='mt-7'>
          <h3 className='inline'>Sound:</h3>
          <Button className='inline' text={volume} handleClick={() => {
            setTimeout(() => {
              setStartButton(true)
            }, 18000)
            setVolumeClicks(volumeClicks + 1)
            if (volume === 'off') {
              setVolume('on')
              intro_song.play()
              setMessage('Actually, it was always on and you can never turn it off.')
            }
            if (volumeClicks >= 2 && volumeClicks < 15) {
              setMessage('No matter how many times you try.')
            }
            if (volumeClicks >= 15) {
              setMessage('What is wrong with you?')
            }
          }} />
        </div>
        <div className='mt-4'>
          {message}
        </div>
      </header>
    </div>
  )
}

export default App
