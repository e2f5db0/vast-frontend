import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import './App.css'
import vast from './vast.gif'
import intro from './intro.wav'
import Button from './components/Button'
import Canvas from './components/Canvas'
import Credits from './components/Credits'
import Header from './components/Header'

const App = ({ start }) => {

  const intro_song = new Audio(intro)
  const baseurl = 'https://vast-backend.herokuapp.com/'
  const [volume, setVolume] = useState('on')
  const [message, setMessage] = useState('')
  const [volumeClicks, setVolumeClicks] = useState(0)
  const [startButton, setStartButton] = useState(start)

  const render_canvas = () => {
    ReactDOM.render(<Canvas baseurl={baseurl} initial_delay={6} i={1} p='' />, document.getElementById('root'))
  }

  return (
    <div className='App'>
      <Header moving={true} />
      <img className='Logo' src={vast} alt='vast' />
      <div className='Body'>
        <p>{message}</p>
        {startButton && <Button type='Main-button' text='Start' handleClick={() => {
          new Audio(baseurl + 'lines/start.wav').play()
          render_canvas()
        }} />}
        <div className='Main-sound'>
          Sound:
          <br></br>
          <Button type='Main-button' text={volume} handleClick={() => {
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
        <button className='Credits-button' onClick={() => {
          ReactDOM.render(<Credits />, document.getElementById('root'))
        }} >Credits</button>
      </div>
    </div>
  )
}

export default App
