import React from 'react';
import ajaxHelpers from '../utils/ajaxHelpers';

const NewLeaguePost = React.createClass ({
  render: function() {
    let textArea = {
      width: '400px',
      height: '120px',
      border:'3px solid #cccccc',
    }
    let titleArea = {
      width: '400px',
      height: '20px',
      border: '3px solid #cccccc'
    }
    return (
      <div>
        <h1>hi this is where u can add new post </h1>
        <input style={titleArea}
          className=""
          placeholder="Title"
          onChange={this.props.onChangeTitle}
          type="text"
          />
        <br /> <br />
        <input style={titleArea}
          className=""
          placeholder="Author"
          onChange={this.props.onChangeAuthor}
          type="text"
          />
        <br /> <br />
        <textarea style={textArea}
          className=""
          placeholder="Body"
          onChange={this.props.onChangeBody}
          type="text"
          />
        <br /> <br />
        <button onClick={this.props.addPost}>Submit</button>
      </div>
    )
  }
})

export default NewLeaguePost;
