import React from 'react';
import {Link} from 'react-router';
import auth from '../utils/auth';
import SignUpComp from './SignUpComp';

const SignInComp = React.createClass({
  getInitialState: function() {
    return {
      email: '',
      password: '',
      error: false,
      successMsg: ''
    }
  },
  handleEmail: function(e) {
    this.setState ({
      email: e.target.value
    })
    console.log("email is:", e.target.value);
  },
  handlePass: function(e) {
    this.setState ({
      password: e.target.value
    })
  },
  handleLogin: function() {
    var callbackAfterLogin = function(success) {
      if (!success) {
        console.log("error in callbackAfterLogin");
        return this.setState({ error: true })
      } else {
        this.setState({ successMsg: "it worked dood, ur signed in!!" });
      }
    }.bind(this);
    auth.login(this.state.email, this.state.password, callbackAfterLogin);
  },
  render: function() {
    const isLoggedIn = auth.loggedIn();

    if (isLoggedIn) {
      return (
        <div>
          <p>logged in :p</p>
        </div>
      )
    }
    return (
      <div>
          <h1> Signin Comp </h1>
          <h3>Existing Account</h3>
          <input
            placeholder="Email"
            type="text"
            onChange={this.handleEmail}
            />
          <br /> <br />
          <input
            placeholder="Password"
            type="password"
            onChange={this.handlePass}
            />
          <br /> <br />
          <button onClick={this.handleLogin}>Sign In</button>
      </div>
    );
  }
});

export default SignInComp;
