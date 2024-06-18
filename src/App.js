import {Route, Switch, useLocation} from 'react-router-dom'
import Header from './components/Header'
import Register from './components/Register'
import Home from './components/Home'
import NotFound from './components/NotFound'
import MeetupProvider from './context/MeetupProvider'
import './App.css'

const App = () => {
  const location = useLocation()
  const isNotFound = location.pathname === '/not-found'

  return (
    <MeetupProvider>
      <>
        {!isNotFound && <Header />}
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/register" component={Register} />
          <Route path="*" component={NotFound} />
        </Switch>
      </>
    </MeetupProvider>
  )
}

export default App
