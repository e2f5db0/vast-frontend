import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import vast_logo from './vast-logo.jpg'
import vast from './vast.gif'
import intro from './intro.wav'
import './App.css'
import Button from './components/Button'
import Canvas from './components/Canvas'
import Footer from './components/Footer'

const App = ({ start }) => {

  const intro_song = new Audio(intro)
  const baseurl = 'https://vast-backend.herokuapp.com/'
  const [volume, setVolume] = useState('on')
  const [message, setMessage] = useState('')
  const [volumeClicks, setVolumeClicks] = useState(0)
  const [startButton, setStartButton] = useState(start)

  const render_canvas = () => {
    ReactDOM.render(<Canvas baseurl={baseurl} initial_delay={6} />, document.getElementById('root'))
  }

  return (
    <div className='App'>
      <header className='App-header'>
        <img className='Logo' src={vast_logo} alt='logo' />
        <img className='Logo' src={vast} alt='vast' />
        <p></p>
        <div className='mt-4'>
          {message}
        </div>
        {startButton && <Button text='Start' handleClick={() => {
          new Audio(baseurl + 'lines/start.wav').play()
          render_canvas()
        }} />}
        <div className='mt-7 Volume'>
          <h3 className='inline'>Sound:</h3>
          <Button className='inline' text={volume} handleClick={() => {
            setTimeout(() => {
              setStartButton(true)
            }, 10000)
            setVolumeClicks(volumeClicks + 1)
            if (volume === 'on') {
              setVolume('off')
              intro_song.play()
              setMessage('Now you can never turn it off.')
            }
            if (volumeClicks >= 2 && volumeClicks < 15) {
              setMessage('No matter how many times you try.')
            }
            if (volumeClicks >= 15) {
              setMessage('What is wrong with you?')
            }
          }} />
        </div>
      </header>
      <Footer className='Footer' />
    </div>
  )
}

export default App
