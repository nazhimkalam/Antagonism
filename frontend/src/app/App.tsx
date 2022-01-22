import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { GetRoutes } from './routes'

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        {GetRoutes.map((route, index) => ( <Route key={index} {...route} /> ))}
      </Switch>
    </BrowserRouter>
  )
}

export default App
