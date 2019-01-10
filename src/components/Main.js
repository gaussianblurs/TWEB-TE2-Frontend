import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './pages/Home'
import ComingSoon from './pages/ComingSoon'

const Main = () => (
  <div>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/coming-soon" component={ComingSoon} />
    </Switch>
  </div>
)

export default Main
