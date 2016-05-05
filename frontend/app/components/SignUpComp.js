import React from 'react';
import auth from '../utils/auth';


const SignUpComp = React.createClass ({
  getInitialState: function() {
    return {
      email: '',
      password: '',
      passwordConfirmation: '',
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
  handlePassword: function(e) {
    this.setState ({
      password: e.target.value
    })
  },
  handlePasswordConfirmation: function(e) {
    this.setState ({
      passwordConfirmation: e.target.value
    })
  },
  handleSignup() {
    let callbackAfterSignup = function(success) {
      if (!success) {
        console.log("there was an error dude");
        return this.setState({ error: true });
      } else {
        this.props.history.push('/');
      }
    }.bind(this);
    auth.signup(this.state.email, this.state.password, this.state.passwordConfirmation, callbackAfterSignup);
  },

  render: function() {
    const isLoggedIn = auth.loggedIn();

    if (isLoggedIn) {
      return (
        <div>
          <p>u r logged in :p</p>
        </div>
      )
    }

    return (
      <div>
        <h3>New? Sign up!</h3>
        <input
          placeholder="Email"
          type="text"
          onChange={this.handleEmail}
         />
        <br />
        <input
          placeholder="Password"
          type="password"
          onChange={this.handlePassword}
          />
        <br />
        <input
          placeholder="Confirm Password"
          type="password"
          onChange={this.handlePasswordConfirmation}
          />
        <br />
        <button onClick={this.handleSignup}>Sign Up!</button>
      </div>
    )
  }
})

export default SignUpComp;
