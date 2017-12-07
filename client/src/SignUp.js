import React, { Component } from "react";
import PropTypes from "prop-types";
import { FormGroup, ControlLabel, FormControl, Button, Alert } from "react-bootstrap";

class SignUp extends Component {
  constructor() {
    super();

    this.state = {
      username: "",
      password: "",
      confirmPassword: "",
      userAvailable: "",
      userAvailableError: "",
      usersArray: []
    };
  }

  componentDidMount() {
    fetch("/api/getusers")
    .then( (response) => {
      return response.json();
      //console.log(response.json());
    }).then(users => {
      //console.log(users);
      let usersArray = [];
      for (let i=0;i<users.length;i++){
        usersArray.push(users[i].username);
      }
      //console.log(usersArray);
      this.setState({usersArray});
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.onSignUp({
      username: this.state.username,
      password: this.state.password,
      confirmPassword: this.state.confirmPassword
    });
  }

  render() {
    let userAvailableMessage = "";
    if (this.state.userAvailable !== ""){
      userAvailableMessage = <Alert bsStyle="warning">{this.state.userAvailable}</Alert>;
    }
    else{
      userAvailableMessage = "";
    }
    let userAvailableErrorMessage = "";
    if (this.state.userAvailableError !== ""){
      userAvailableErrorMessage = <Alert bsStyle="danger">{this.state.userAvailableError}</Alert>;
    }
    else{
      userAvailableErrorMessage = "";
    }
    return (
      <form onSubmit={this.handleSubmit.bind(this)}>
        <FormGroup>
          <ControlLabel>Username</ControlLabel>
          <FormControl
            type="email"
            name="username"
            onChange={e => {

              if (this.state.usersArray.indexOf(e.target.value) > -1){
                this.setState({userAvailableError: "User Exists. Please Choose A Different Username.", userAvailable: ""}); 
              }
              else{
                this.setState({userAvailable: "Username Available",userAvailableError: ""}); 
              }
              //console.log(this.state.usersArray);
              //this.setState({userAvailableError: e.target.value});
              this.setState({[e.target.name]: e.target.value});
            }
            }
            placeholder="Enter Username"
            value={this.state.username}
          />
        </FormGroup>
            {userAvailableMessage}
            {userAvailableErrorMessage}
        <FormGroup>
          <ControlLabel>Password</ControlLabel>
          <FormControl
            type="password"
            name="password"
            onChange={e => {
              this.setState({[e.target.name]: e.target.value});
            }}
            placeholder="Enter Password"
            value={this.state.password}
          />
        </FormGroup>

        <FormGroup>
          <ControlLabel>Confirm Password</ControlLabel>
          <FormControl
            type="password"
            name="confirmPassword"
            onChange={e => {
              this.setState({[e.target.name]: e.target.value});
            }}
            placeholder="Confirm Password"
            value={this.state.confirmPassword}
          />
        </FormGroup>

        <Button type="submit">
         Sign Up
       </Button>
      </form>
    );
  }
}

SignUp.propTypes = {
  onSignUp: PropTypes.func.isRequired
};

export default SignUp;
