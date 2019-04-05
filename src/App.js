import React, { Component } from 'react';
import './App.css';
import Height from './components/Height.js';
import Run from './components/Run.js';


class App extends Component {
  constructor(props) {
    super(props);
    this.state={
      run : 0,
      height: 0,
    }
   }
  onRunChange = (event) => {
  this.setState({run: event.target.value})
}
  render() {
    return (
      <div className="App">
      <Height height={this.state.height}/>
      <Run run={this.state.run} onRunChange={this.onRunChange} />
      </div>
    );
  }
}

export default App;
