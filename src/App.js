import React, { Component } from 'react';
import './App.css';
import Test from './components/test.js'

class App extends Component {
  constructor(props) {
    super(props);
    this.state={
      
    
    }
   }
  render() {
    return (
      <div className="App">
      <Test height={this.state.height}/>

      </div>
    );
  }
}

export default App;
