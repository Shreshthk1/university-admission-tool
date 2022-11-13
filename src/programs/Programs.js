import React, { Component } from "react";
import { connect } from "react-redux";



export default class Programs extends Component {

  constructor(props) {
    super(props);

    // controls state of Programs.
    this.state = {

    };
  }


  render() {
    const { message } = this.props;

    return (
      <div>
        <header>
          <h3>Programs</h3>
        </header>
      </div>
    )
  }
}
