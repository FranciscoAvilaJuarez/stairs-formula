import React, { Fragment } from 'react';
import "../App.css"

class Run extends React.Component {
  render() {
    return (
      <Fragment>
        <h1 className="Run">Run : {this.props.run}</h1>
        <input
         className="Runbox"
         type="run"
         placeholder="Input Run"
         onRunChange={this.onRunChange}
         />
      </Fragment>
    );
  }
}

export default Run
