import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

import {Provider} from 'react-redux'
import ReduxPromise from 'redux-promise'
import {createStore, applyMiddleware, compose} from 'redux'

import  '././styles/app.scss' 
import reducers from './reducers'
import Main from './components/Main'

const createMiddleware = applyMiddleware(ReduxPromise)(createStore)
const devExtension = compose(window.devToolsExtension ? window.devToolsExtension() : f => f )

'use strict'
ReactDOM.render(
  <Provider store={createMiddleware(reducers, devExtension)} >
    <Main />
  </Provider>
  ,document.getElementById('root'))