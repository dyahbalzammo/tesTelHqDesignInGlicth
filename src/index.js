import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './style.css'
import Checkout from './views/checkout'
import Auth from './views/auth'
import Home from './views/home'
import Carts from './views/carts'

const App = () => {
  return (
    <Router>
      <div>
        <Route component={Checkout} exact path="/checkout" />
        <Route component={Auth} exact path="/auth" />
        <Route component={Home} exact path="/" />
        <Route component={Carts} exact path="/carts" />
      </div>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
