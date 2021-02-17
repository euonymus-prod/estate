import React from 'react'

import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'

import ApartmentBuildings from './pages/ApartmentBuildings'
/* 参考 */
import UserList from './pages/UserList'
import Dashboard from './pages/Dashboard'

export default function Routes() {
  return (
    <Router>
      <Switch>
        <Route
          exact
          path="/apartment-buildings"
          component={ApartmentBuildings}
        />
        {/* 参考 */}
        <Route exact path="/" component={Dashboard} />
        <Route exact path="/businesses" component={UserList} />
        <Route exact path="/users" component={UserList} />
      </Switch>
    </Router>
  )
}
