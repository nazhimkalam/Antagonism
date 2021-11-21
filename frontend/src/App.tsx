import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

const App = () => {
  return (
    <BrowserRouter>
      {/* <Navbar /> */}
      <div className="container">
        <Switch>
          {/* <Route path="/" component={Home} exact />
          <Route path="/about" component={About} /> */}
        </Switch>
      </div>
    </BrowserRouter>
  )
}

export default App
