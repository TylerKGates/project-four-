import React from 'react';
import {Link} from 'react-router';

const LeagueOfLegendsPage = React.createClass({
  render: function() {
    let leagueLogo = 'https://signup.na.leagueoflegends.com/theme/signup_new_theme/img/logo-lol-smaller.png';

    let leagueStyle = {
      backgroundImage: 'url(' + leagueLogo + ')',
      backgroundSize: 'cover',
      width: '600px',
      height: '300px'
    }

    return (
      <div>
        <h1 style={leagueStyle}></h1>
        <div className='leagueNav'>
          <Link to='ArkhamKnightPage'>
            <h3>Batman Threads</h3>
          </Link>
          <Link to='CsGoPage'>
            <h3>CS:GO Threads</h3>
          </Link>
        </div>
      </div>
    );
  }
});

export default LeagueOfLegendsPage;
