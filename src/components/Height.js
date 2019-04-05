import React, { Fragment } from 'react';
import "../App.css"

class Height extends React.Component {
  render() {
    return (
      <Fragment>
        <h1 className="Rise">Rise : {this.props.height}</h1>
        <input
         className="Risebox"
         type="Rise"
         placeholder="Input Rise"
         // onChange={onSearchChange}
         />
      </Fragment>
    );
  }
}

export default Height
