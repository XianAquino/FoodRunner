import React from 'react';
import axios from 'axios';
import UserVolunteers from './UserVolunteers'

class UserProfile extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      username : this.props.username,
      volunteers:undefined,
      requests: undefined
    }
  }

  componentWillMount(){
    this.getVolunteers();
    this.getRequests();
  }

  getVolunteers(){
    axios.get(`api/user/volunteers/${this.state.username}`)
    .then(response => {
      this.setState({volunteers:response.data});
    })

  }

  getRequests(){
    axios.get(`api/user/requests/${this.state.username}`)
    .then(response => {
      this.setState({requests:response.data});
    })
  }

  render(){
    return (
      <div className = 'user-profile'>
        <p onClick={()=>this.props.hideUserProfile()}>x</p>
        <img src = {this.props.picture} />
        <p>{this.props.username}</p>
        <div className = 'user-history'>
          <h2>Volunteers</h2>
          <UserVolunteers volunteers = {this.state.volunteers}/>
        </div>
      </div>
    )
  }

}
export default UserProfile
