//Login.js displays a facebook button
import React, {Component} from 'react';
import FacebookButton from './Login.js';

class LandingPage extends Component {
   constructor(props) {
    super(props);
    this.state = {};
  }

   render(){
      
      return (
      	<div>
      		<div className='spacer'></div>
        	<div className='welcome'>Welcome to Food Runner.</div>
        	<div className='tag-line'>Help your team. &nbsp; Help yourself. &nbsp; Eat real food.</div> 
        	<FacebookButton position={'bottom'} text={'Sign up now'}/>
        </div>	
      )
   }
   
};

export default LandingPage;