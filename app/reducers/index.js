import {combineReducers} from 'redux'
import authReducer from './authReducer'
import usersReducer from './usersReducer'

  const rootReducer = combineReducers({
    // state: (state = {}) => state
    users: usersReducer,
    authenticated: authReducer,
})

export default rootReducer