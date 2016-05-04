import React from 'react';
import {Link} from 'react-router';
import ajaxHelpers from '../utils/ajaxHelpers'

const HomePage = React.createClass({

  render: function() {
    return (
      <div>
        <h1> hi i am homepage </h1>
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
    );
  }
});

export default HomePage;
