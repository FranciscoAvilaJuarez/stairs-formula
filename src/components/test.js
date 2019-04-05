import React, { Fragment } from 'react';
import "../App.css"
class Rise extends React.Component {
  render() {
    return (
      <Fragment>
        <h1 className="Rise">Rise : {this.props.height}</h1>
      </Fragment>
    );
  }
}

export default Rise