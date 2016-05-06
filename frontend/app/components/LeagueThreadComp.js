import React from 'react';
import {Link} from 'react-router';
import axios from 'axios';

const LeagueThread = React.createClass({
  getInitialState: function() {
    return {
      ArrOfId: []
    }
  },
  mapForID: function() {
    console.log("hi i am running");
    this.props.posts.map((posts, index) => {
      return posts.id
      console.log("posts.id:", posts.id);
    });
    this.setState ({
      id: posts.id
    })
    console.log("some ids for u:", id);
  },
  deletePost: function(id) {
    this.mapForID()
    console.log("deleting post! :p");
    return axios.delete('http://localhost:3000/posts' + id)
  },
  render: function() {
    console.log("this.props is :", this.props.posts);
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
                <button onClick={this.deletePost}>Delete Post</button>
                <hr />
              </li>
            })
          }
        </ul>
      </div>
    );
  }
});

export default LeagueThread;
