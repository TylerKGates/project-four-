import React from 'react';
import {Link} from 'react-router';
import ajaxHelpers from '../utils/ajaxHelpers';
import LeagueThreadComp from '../components/LeagueThreadComp'

const LeagueOfLegendsPage = React.createClass({

  getInitialState: function() {
    return {
        posts: []
      }
    },

  componentDidMount: function() {
    ajaxHelpers.getPosts()
    .then(function(response) {
      this.setState({
        posts: response.data
      });
    }.bind(this))
  },

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
      <LeagueThreadComp posts={this.state.posts} />
      </div>
    );
  }
});

export default LeagueOfLegendsPage;
