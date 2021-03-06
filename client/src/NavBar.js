
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import FacebookButton from './FacebookButton.js'



class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: false,
    };
  }

  //Note: Navbar does not rerender when the app renders. How can we change this??

  //Note: All this does is toggle loggedIn back and forth so I don't have to manually change App.js's state.
  //Once we get OAUTH up, this button functionality will need to change.

  //login and logOut invoke the functions passed from App.
  login() {
  	this.setState({loggedIn: true});
    console.log('Logout triggered from Navbar');
    this.props.postLogin();
	 }
  //logout updates local state and runs postLogout, inherited from App.
  logOut() {
    this.setState({loggedIn: false})
    this.props.postLogout();
  }
  render() {
  		return (
    	<div className='nav-bar'>
    		<FacebookButton
          logOut={this.logOut.bind(this)}
          loggedIn={this.state.loggedIn}/>
    		<div className='karma'>Karma: {this.props.karma}</div>
        <img className='nav-pic' src={this.props.picture} onClick={()=>{this.props.renderUserProfile()}}/>
        <div className='username'>{this.props.username} </div>

    	</div>
  		);
  	}
};


export default NavBar;
