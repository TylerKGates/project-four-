import axios from 'axios';

const helpers = {
  getPosts: function() {
    return axios.get('http://localhost:3000/posts.json')
  },
  addPost: function(post) {
    return axios.post('http://localhost:3000/posts.json', post)
  }
}

export default helpers;
