import React, { Component } from "react";

import UserService from "../services/user_service";

export default class AdminProfile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      content: ""
    };
  }

  // get invoked right after first render() lifecyle of React component
  // This is commented out for now... until api can operate with it

  // componentDidMount() {
  //   // checks to see if user is admin and logged in
  //   UserService.getUserType().then(
  //     response => {
  //       this.setState({
  //         content: response.data
  //       });
  //     },
  //     error => {
  //       this.setState({
  //         content:
  //           (error.response &&
  //             error.response.data &&
  //             error.response.data.message) ||
  //           error.message ||
  //           error.toString()
  //       });
  //     }
  //   );
  // }

  render() {
    return (
      <div>
        <header>
          <h1>Admin Profile</h1>
        </header>
      </div>
    );
  }
}
