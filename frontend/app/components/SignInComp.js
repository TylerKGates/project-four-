import React from 'react';
import {Link} from 'react-router';

const SignInComp = React.createClass({
  render: function() {
    return (
      <div>
          <h1> Signin Comp </h1>
          <h3>Existing Account</h3>
          <input
            placeholder="Email"
            type="text"
            />
          <br /> <br />
          <input
            placeholder="Password"
            type="password"
            />
          <br /> <br />
          <button>Sign In</button>
      </div>
    );
  }
});

export default SignInComp;
