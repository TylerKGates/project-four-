import React from 'react';
import {Link} from 'react-router';

const LeagueThread = React.createClass({
  render: function() {
    return (
      <div>
      <Link to='NewPostForm'>
        <button>Add New Post</button>
      </Link>
        <ul>
          {
            this.props.posts.map((posts, index) => {
              return <li key={posts.id}>
                <h3>Title: {posts.title}</h3>
                <h3>Author: {posts.author}</h3>
                <h3>Body: {posts.body}</h3>
                <h3>Likes: {posts.like_count}</h3>
                <button>hi im gonna be a like button</button>
              </li>
            })
          }
        </ul>
      </div>
    );
  }
});

export default LeagueThread;
