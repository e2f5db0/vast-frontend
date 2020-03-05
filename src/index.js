import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import axios from 'axios'

// start the Heroku backend
axios.get('https://vast-backend.herokuapp.com/')

ReactDOM.render(<App />, document.getElementById('root'))
