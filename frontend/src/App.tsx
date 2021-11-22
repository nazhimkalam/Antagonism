import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import LandingPage from './pages/landing/LandingPage'

const App = () => {
  return (
    <BrowserRouter>
      {/* <Navbar /> */}
      <div className="container">
        <Switch>
          <Route path="/" component={LandingPage} exact />
        </Switch>
      </div>
    </BrowserRouter>
  )
}

export default App
