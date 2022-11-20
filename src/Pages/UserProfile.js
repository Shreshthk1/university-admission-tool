import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "../helpers/withRouter";

import UserService from "../services/user_service";
import { deleteUser, logout } from "../actions/auth";
import message from "../reducers/message";
import { setMessage } from "../actions/message";

class UserProfile extends Component {
  constructor(props) {
    super(props);
    this.getUserInformation = this.getUserInformation.bind(this);
    this.updateInformation = this.updateInformation.bind(this);
    this.deleteUser = this.deleteUser.bind(this);
    this.setEditing = this.setEditing.bind(this);
    this.setFirstName = this.setFirstName.bind(this);
    this.setLastName = this.setLastName.bind(this);
    this.setAddress = this.setAddress.bind(this);
    this.setEmail = this.setEmail.bind(this);
    this.setDateOfBirth = this.setDateOfBirth.bind(this);
    this.setCountry = this.setCountry.bind(this);
    this.setInterests = this.setInterests.bind(this);
    this.setRole = this.setRole.bind(this);
    this.onFileChange = this.onFileChange.bind(this);
    this.onFileUpload = this.onFileUpload.bind(this);

    this.state = {
      f_name: "",
      l_name: "",
      address: "",
      email: "",
      dob: "",
      country: "",
      interests: "",
      role: "",
      fileName: "",
      selectedFile: null,
      editing: null,
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

  setLastName(lastname) {
    this.setState({
      l_name: lastname,
    });
  }

  setAddress(address) {
    this.setState({
      address: address,
    });
  }

  setEmail(userEmail) {
    this.setState({
      email: userEmail,
    });
  }

  setDateOfBirth(dateOfBirth) {
    this.setState({
      dob: dateOfBirth,
    });
  }

  setCountry(country) {
    this.setState({
      country: country,
    });
  }

  setInterests(interests) {
    this.setState({
      interests: interests,
    });
  }

  setRole(role) {
    this.setState({
      role: role,
    });
  }

  setEditing(editing) {
    this.setState({
      editing: editing,
    });
  }

  getUserInformation() {
    // make API call to get information of user with current access token
    // once whole user is got, can update the state with the database fields
    UserService.getUserInformation().then((response) => {
      this.setFirstName(response.f_name);
      this.setLastName(response.l_name);
      this.setAddress(response.address);
      this.setEmail(response.email);
      this.setDateOfBirth(response.dob);
      this.setCountry(response.country);
      this.setInterests(response.interests);
      this.setRole(response.role_id);
    });
    // This should fill in all the blanks on the profile UI
  }

  updateInformation() {
    // UserService.updateUserInformation(this.state.f_name, this.state.l_name, this.state.address, 
    //   this.state.dob, this.state.country, this.state.interests, this.state.role).then(() => {
    //   this.getUserInformation();
    // });
  }

  deleteUser() {
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

  // On file select (from the pop up)
  onFileChange = (event) => {
    // Update the state
    this.setState({ selectedFile: event.target.files[0] });
  };

  // On file upload (click the upload button)
  onFileUpload = () => {
    try {
      const reader = new FileReader();

      const fileData = reader.readAsText(this.state.selectedFile);

      this.setState({ selectedFile: fileData });
      console.log(this.state.selectedFile);

      // Request made to the backend api
      // Send formData object
      //UserService.sendUserDocument(this.state.selectedFile);
    } catch (e) {
      this.props.dispatch(setMessage("No Document Selected!"));
    }
  };

  // File content to be displayed after
  // file upload is complete
  fileData = () => {
    if (this.state.selectedFile) {
      return (
        <div>
          <h2>File Details:</h2>
          <p>File Name: {this.state.selectedFile.name}</p>

          <p>File Type: {this.state.selectedFile.type}</p>

          <p>
            Last Modified:{" "}
            {this.state.selectedFile.lastModifiedDate.toDateString()}
          </p>
        </div>
      );
    } else {
      return (
        <div>
          <br />
          <h4>Choose before Pressing the Upload button</h4>
        </div>
      );
    }
  };

  // File content to be displayed after
  // file upload is complete
  editProfileFormat = () => {
    if (!this.state.editing) {
      return (
        <div>
          <div>
            <h3>Name</h3>
            <h4>First Name: {this.state.f_name}</h4>
            <input
              type="text"
              placeholder="Enter First Name"
              name="firstName"
            />
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
            <h3>Role ID</h3>
            <p>{this.state.role}</p>
          </div>
          <div>
            <button onClick={this.updateInformation()}>Confirm Changes</button>
          </div>
        </div>
      );
    } else {
      return (
        <div>
          <div>
            <div>
              <button>Edit Profile</button>
            </div>
            <h3>Name</h3>
            <p>
              {this.state.f_name} {this.state.l_name}
            </p>
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
            <h3>Role ID</h3>
            <p>{this.state.role}</p>
          </div>
          <div>
            <h3>Files</h3>
            <input type="file" onChange={this.onFileChange} />
            {this.fileData()}
            <button onClick={this.onFileUpload}>Upload File</button>
          </div>
        </div>
      );
    }
  };

  render() {
    const { message } = this.props;
    const { editing } = this.state;

    return (
      <>
        <div>
          <header>
            <h1>User Profile</h1>
          </header>
        </div>
        {this.editProfileFormat()}

        <div>
          <button style={{ margin: 50 }} onClick={this.deleteUser}>
            Delete Account
          </button>
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
