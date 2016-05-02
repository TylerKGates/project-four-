import React from 'react';
import {Link} from 'react-router';

const SignInComp = React.createClass({
  render: function() {
    return (
      <div>
        <Link to="HomePage">
          <h1> Login Comp </h1>
        </Link>
      </div>
    );
  }
});

export default SignInComp;
