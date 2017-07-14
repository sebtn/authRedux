import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router'
import {connect} from 'react-redux'

import * as actions from '../actions' 

class Header extends Component {

/*----------------------------------------------------------*/
  authButton = () => {
    if (this.props.authenticated) {
        return (
          <button 
          onClick={ () => this.props.auth(false) }>
          Sign out
          </button>
        )
    }
    return  (
      <button 
      onClick = { () => this.props.auth(true) }>
      Sign In
      </button>
    )
  }
  
/*----------------------------------------------------------*/
  render() {
    return (
    <div className="nav-container">
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
            {this.authButton()}
        </li>
      </nav>
    </div>
    )
  }
}

/*----------------------------------------------------------*/
let mapStateToProps = (state) => {
  return {authenticated: state.authenticated}
}

export default connect(mapStateToProps, actions)(Header)
