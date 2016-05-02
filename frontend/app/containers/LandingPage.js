import React from 'react';
import SignInComp from '../components/SignInComp'
import { Link } from 'react-router';


const LandingPage = React.createClass({
  render: function() {
    return (
      <div>
        <SignInComp />
      </div>
    )
  }
})

export default LandingPage;
