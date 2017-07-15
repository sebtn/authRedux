import axios from 'axios'
import {FETCH_USERS} from './types'

export let auth = (isLoggedIn) => {
  return {
    type: "CHANGE_AUTH",
    payload: isLoggedIn
  }
}

export let fetchUsers = () => {
  const request = axios.get('https://jsonplaceholder.typicode.com/users')

  return {
    type: FETCH_USERS,
    payload: request
  }


}