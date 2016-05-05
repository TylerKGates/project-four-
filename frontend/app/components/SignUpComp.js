import React from 'react';

const SignUpComp = React.createClass ({
  render: function() {
    return (
      <div>
        <h3>New? Sign up!</h3>
        <input
          placeholder="Email"
          type="text"
         />
        <br />
        <input
          placeholder="Password"
          type="password"
          />
        <br />
        <input
          placeholder="Confirm Password"
          type="password"
          />
        <br />
        <button>Sign Up!</button>
      </div>
    )
  }
})

export default SignUpComp;
