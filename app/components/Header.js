import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router'

class Header extends Component {
  authButton = () => {
    return  (<button>Sign In</button>)
  }
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

export default Header
