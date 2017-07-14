import {combineReducers} from 'redux'
import authReducer from './authReducer'

  const rootReducer = combineReducers({
    // state: (state = {}) => state
    authenticated: authReducer
})

export default rootReducer