import React, {Component} from 'react'
import {connect} from 'react-redux'
import {fetchUsers} from '../actions/index'  

class UserList extends Component {
  componentWillMount = () => {
    this.props.fetchUsers()
  }
/*-----------------------------------------------------------*/
  renderUser = (user, index) => {
    return (
      <div className="card card-container " key={index} >
        <h4 className="card-title "  >{user.name}</h4>
        <h6 className="card-title "  > {user.username}</h6>
        <p className="card-text"> {user.company.name}</p>
        <p className="card-text"> {user.email}</p>
        <p className="card-text"> {user.website}</p>
        <button className="btn btn-primary">Send Email</button>
      </div>
    )
  }

/*-----------------------------------------------------------*/
  render(){
    let {users} = this.props
    return (
      <div className="card-wrap">
        {users.map( this.renderUser )}
      </div>
    )
  }
}

/*-----------------------------------------------------------*/
let mapStateToProps = (state) => {
  return {
    users: state.users
  }
}

export default connect(mapStateToProps, {fetchUsers})(UserList)