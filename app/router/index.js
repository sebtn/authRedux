import React from 'react'
import { hashHistory, Route, Router} from 'react-router'

import Main from './../components/Main'
import Resources from './../components/Resources'

export default (
  <Router history={hashHistory} > 
    <Route path='/' component={Main}>
       <Route path="/resources" component={Resources} />
    </Route>
  </Router>
)