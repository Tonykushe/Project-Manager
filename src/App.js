import React, { Component } from 'react';
import Main from './components/Main';
import User from './components/User'

class App extends Component {
    constructor() {
      super();
      this.state = {
        username: 'Tony'
      };
    }

    changeName(newName) {
      this.setState({
        username: newName
      });
    }

    render(){
      return(
        <div>
          <Main changeName={this.changeName.bind(this)}/>
          <User username={this.state.username}/>
        </div>
      );
    }
  }


 export default App

