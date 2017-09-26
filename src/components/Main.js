import React, { Component } from 'react';

class Main extends Component {
	render() {
	    return (
	      <div className='Project'>
	        <p>Main</p>
	        <button 
		        className='btn btn-primary'
		        onClick={() => this.props.changeName('Anna')}>Change the Name
	        </button>
	      </div>

	      );
	}
}



export default Main;
