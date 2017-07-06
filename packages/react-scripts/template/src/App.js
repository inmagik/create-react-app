import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './state'

import Hello from './pages/Hello'

const App = () => (
  <Provider store={store}>
    <Router>
      <Switch>
        <Route path='/' exact component={Hello} />
      </Switch>
    </Router>
  </Provider>
)

export default App
