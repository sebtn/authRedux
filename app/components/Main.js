import React, {Component} from 'react'
import PropTypes from 'prop-types'

import Header from './Header'  


export default class Main extends Component {
  render() {
    return (
      <div>
        <Header />
        {this.props.children}
        Everyone can see this
      </div>
    )
  }
}

