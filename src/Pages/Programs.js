import React, { Component } from "react";
import { connect } from "react-redux";



class Programs extends Component {

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
          <h1>Programs</h1>
        </header>
      </div>
    )
  }
}

export default Programs;
