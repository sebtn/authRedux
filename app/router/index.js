import React from 'react'
import { hashHistory, Route, Router} from 'react-router'

import Main from './../components/Main'
import Resources from './../components/Resources'
import Auth from './../components/RequireAuth'
import UserList from './../components/UserList'

export default (
  <Router history={hashHistory} > 
    <Route path='/' component={Main}>
       <Route path="/resources" component={Auth(Resources)} />
       <Route path="/users" component={Auth(UserList)} />
    </Route>
  </Router>
)