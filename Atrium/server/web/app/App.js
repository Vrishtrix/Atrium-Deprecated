import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route } from 'react-router-dom'
import './App.css'

import Login from './pages/Login/index'

const App = () => {
      return (
            <BrowserRouter>
                  <Route exact path='/' component={Login} />
            </BrowserRouter>
      )
}

ReactDOM.render(<App />, document.getElementById('app'))