import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import {Route, Router, IndexRoute, hashHistory, Link} from 'react-router'
import {Provider} from 'react-redux'
import ReduxPromise from 'redux-promise'
import {createStore, applyMiddleware, compose} from 'redux'

import  '././styles/app.scss' 
import reducers from './reducers'

const createStoreMiddleware =applyMiddleware(ReduxPromise)(createStore)
const devExtension = compose(window.devToolsExtension ? window.devToolsExtension() : f => f )

'use strict'
ReactDOM.render(
  <Provider>
    <h3 store={createStoreMiddleware(reducers, devExtension)} >
      Using Redux
    </h3>
  </Provider>
  ,document.getElementById('root'))