import React, { Component } from 'react';

class User extends Component {
	
	render() {
	    return (
	      <div className='Projects'>
	        <p>Username: {this.props.username}</p>
	        <h4>Hi there</h4>
	      </div>

	      );
	}
}



export default User;
