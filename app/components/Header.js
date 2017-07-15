import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router'
import {connect} from 'react-redux'

import {auth} from '../actions' 
import UserList from './UserList'  

class Header extends Component {

/*----------------------------------------------------------*/
  authRender = () => {
    if (this.props.authenticated) {
      return (
        // <div className="nav-container">
          <nav className="nav flex-column flex-lg-row justify-content-center">
            <li className="nav-item">
              <Link className="flex-lg-fill text-lg-center nav-link-active" 
                to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="flex-md-fill text-md-center nav-link-active"
                to="/resources">
                Resourcers
              </Link>
            </li>
            <li className="nav-item">
              <Link className="flex-md-fill text-md-center nav-link-active"
                to="/users">
                Users
              </Link>
            </li> 
            <li className="nav-item">
              <button 
                onClick={ () => this.props.auth(false) }>
                Sign out
              </button>
            </li> 
          </nav>
        // </div>
      )
    }
    return  (
      // <div className="nav-container">
        <nav className="nav flex-column flex-lg-row justify-content-center">
          <li className="nav-item">
            <Link className="flex-lg-fill text-lg-center nav-link-active" 
              to="/">
              Visible only in sign in screen
            </Link>
          </li> 
          <li className="nav-item">
            <Link className="flex-lg-fill text-lg-center nav-link-active" 
              to="/">
              Home
            </Link>
          </li> 
          <li className="nav-item">
            <button 
            onClick = { () => this.props.auth(true) }>
            Sign In
            </button>
          </li>  
        </nav>
      // </div>   
    )
  }

/*----------------------------------------------------------*/
  render() {
    return (
    <div className="nav-container">
      {this.authRender()}
    </div>
    )
  }
}

/*----------------------------------------------------------*/
let mapStateToProps = (state) => {
  return {
    authenticated: state.authenticated
  }
}

export default connect(mapStateToProps, {auth})(Header)
