import React, { Component } from 'react';

class User extends Component {
	
	render() {
	    return (
	      <div className='Projects'>
	        <p>Username: {this.props.username}</p>
	      </div>

	      );
	}
}



export default User;
