import React from 'react'
import ReactDOM from 'react-dom'
import vast from './vast.gif'
import './App.css'
import Button from './components/Button'
import Canvas from './components/Canvas'

const App = () => {

  const baseurl = 'https://vast-backend.herokuapp.com/'

  const render_canvas = () => {
    ReactDOM.render(<Canvas baseurl={baseurl} />, document.getElementById('root'))
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={vast} className="App-logo" alt="logo" />
        <h1>Vast</h1>
        <Button text='Start' handleClick={() => {
          new Audio(baseurl + 'lines/start.wav').play()
          render_canvas()
        }} />
        <p>(Turn on sound)</p>
      </header>
    </div>
  )
}

export default App
