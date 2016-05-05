import axios from 'axios';

const helpers = {
  baseUrl: 'http://localhost:3000',

  getPosts: function() {
    return axios.get('http://localhost:3000/posts.json')
  },
  addPost: function(post) {
    return axios.post('http://localhost:3000/posts.json', post)
  },
  addNewPost: function(post) {
    const uid = localStorage.uid;
    const accessToken = localStorage.accessToken;
    const client = localStorage.client;

    axios.post('http://localhost:3000/posts.json',  {
      headers: {
        'uid': uid,
        'access-token': accessToken,
        'client': client
      }
    }, post)
    .then(function(response) {
      console.log("success, response here:", response);
      if (afterAjaxFxn) {
        afterAjaxFxn(response.data)
      }
    });
  }
};

export default helpers;
