import React, { Component } from "react";

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      content: ""
    };
  }

  render() {
    return (
      <div>
        <header>
          <h1>Home</h1>
        </header>
      </div>
    );
  }
}