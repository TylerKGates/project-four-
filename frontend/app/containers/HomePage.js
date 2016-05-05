import React from 'react';
import {Link} from 'react-router';
import ajaxHelpers from '../utils/ajaxHelpers';
import SignInComp from '../components/SignInComp';
import SignUpComp from '../components/SignUpComp';

const HomePage = React.createClass({
  contextTypes: {
  router: React.PropTypes.object.isRequired
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
        <SignInComp />
        <SignUpComp />
      </div>
    );
  }
});

export default HomePage;
