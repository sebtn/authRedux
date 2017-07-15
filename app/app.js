import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import {Provider} from 'react-redux'
// import ReduxPromise from 'redux-promise'
import {createStore, applyMiddleware, compose} from 'redux'

import  '././styles/app.scss' 
import reducers from './reducers'
import router from './router/index'
import Async from './middleware/async'

// const createMiddleware = applyMiddleware(ReduxPromise)(async)(createStore)
const createMiddleware = applyMiddleware(Async)(createStore)
const devExtension = compose(window.devToolsExtension ? window.devToolsExtension() : f => f )

'use strict'
ReactDOM.render(
  <Provider store={createMiddleware(reducers, devExtension)} >
   {router}
  </Provider>
  ,document.getElementById('root'))