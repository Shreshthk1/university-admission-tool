import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "../helpers/withRouter";

import UserService from "../services/user_service";
import { deleteUser, logout } from "../actions/auth";
import message from "../reducers/message";

class UserProfile extends Component {
  constructor(props) {
    super(props);
    this.deleteUser = this.deleteUser.bind(this);
    this.setFirstName = this.setFirstName.bind(this);
    this.setEmail = this.setEmail.bind(this);

    this.state = {
      f_name: "",
      l_name: "",
      address: "",
      email: "",
      dob: "",
      country: "",
      interests: "",
    };
  }

  // gets invoked right after first render() lifecyle of React component
  componentDidMount() {
    this.getUserInformation();
  }

  setFirstName(firstname) {
    this.setState({
      f_name: firstname,
    });
  }

  setEmail(userEmail) {
    this.setState({
      email: userEmail,
    });
  }

  getUserInformation = (e) => {
    // make API call to get information of user with current access token
    // once whole user is got, can update the state with the database fields
    UserService.getUserInformation().then((response) => {
      this.setFirstName(response.f_name);
      this.setEmail(response.email)
    });
    // This should fill in all the blanks on the profile UI
  };

  deleteUser(e) {
    //future will ask for confirmation to delete account, whihc will change state of an if
    this.props.dispatch(deleteUser(this.state.email)).then(() => {
      this.props.dispatch(logout());
      this.sendToLogin();
      window.location.reload();
    });
  }

  sendToLogin() {
    this.props.navigate("/login");
  }

  render() {
    const { message } = this.props;

    return (
      <>
        <div>
          <header>
            <h1>User Profile</h1>
          </header>
        </div>
        <div>
          <h3>Name</h3>
          <p>{this.state.f_name + this.state.l_name}</p>
        </div>
        <div>
          <h3>Address</h3>
          <p>{this.state.address}</p>
        </div>
        <div>
          <h3>Email</h3>
          <p>{this.email}</p>
          <p>{this.state.email}</p>
        </div>
        <div>
          <h3>Date of Birth</h3>
          <p>{this.state.dob}</p>
        </div>
        <div>
          <h3>Country</h3>
          <p>{this.state.country}</p>
        </div>
        <div>
          <h3>Interests</h3>
          <p>{this.state.interests}</p>
        </div>
        <div>
          <h3>Files</h3>
          <p>{this.state.interests}</p>
        </div>

        <div>
          <button onClick={this.deleteUser}>Delete Account</button>
        </div>
        {/* message on sign up confirmation or error */}
        {message && (
          <div>
            <div>{message}</div>
          </div>
        )}
      </>
    );
  }
}

// This connects the react components to a Redux store
function mapStateToProps(state) {
  const { message } = state.message;
  return {
    message,
  };
}

export default withRouter(connect(mapStateToProps)(UserProfile));
