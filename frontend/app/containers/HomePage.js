import React from 'react';
import {Link} from 'react-router';
import ajaxHelpers from '../utils/ajaxHelpers';
import SignInComp from '../components/SignInComp';
import SignUpComp from '../components/SignUpComp';
import auth from '../utils/auth'

const HomePage = React.createClass({
  contextTypes: {
  router: React.PropTypes.object.isRequired
  },
  getInitialState: function() {
    return {
      email: '',
      password: '',
      passwordConfirmation: '',
      error: false,
      successMsg: ''
    }
  },
  handleNewEmail: function(e) {
    this.setState ({
      email: e.target.value
    })
    console.log("email is:", e.target.value);
  },
  handleNewPassword: function(e) {
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

    return (
      <div>
        <div className="threadLinks">
          <Link to='LeagueOfLegendsPage'>
            <h2>League Threads</h2>
          </Link>
          <Link to='CsGoPage'>
            <h2>CS:GO Threads</h2>
          </Link>
          <Link to='ArkhamKnightPage'>
            <h2>Arkham Knight Threads</h2>
          </Link>
        </div>
        <SignInComp
          onChangeEmail={this.handleEmail}
          onChangePass={this.handlePass}
          onSubmit={this.handleLogin}
          />
        <SignUpComp
          onChangeEmail={this.handleNewEmail}
          onChangePass={this.handleNewPassword}
          onChangePassCon={this.handlePasswordConfirmation}
          onSubmit={this.handleSignup}
          />
      </div>
    );
  }
});

export default HomePage;
