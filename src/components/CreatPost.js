import React, { useState } from 'react';
import './CreatPost.css';

function CreatePost() {
  const [caption, setCaption] = useState('');
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    if (e.target.files[0]) {
      setFile(URL.createObjectURL(e.target.files[0]));
    }
  };

  const handlePost = () => {
    alert('Post shared!');
  };

  return (
    <div className="createPost">
      <div className="post-header main-div">
        <h3 style={{ marginLeft: '10px' }}>Create New Post</h3>
        <button id="post-btn" onClick={handlePost}>Share</button>
      </div>

      <div style={{ textAlign: 'center', padding: '10px' }}>
        {file && <img src={file} alt="Preview" id="output" />}
        <div>
          <input type="file" onChange={handleFileChange} />
        </div>
      </div>

      <div className="details">
        <div className="profile-info">
          <img src="https://randomuser.me/api/portraits/men/75.jpg" alt="User" className="profile-pic" />
          <b>Ramesh</b>
        </div>
      </div>

      <div style={{ padding: '0 10px 10px 10px' }}>
        <textarea
          rows="3"
          placeholder="Write a caption....."
          value={caption}
          onChange={(e) => setCaption(e.target.value)}
        ></textarea>
      </div>
    </div>
  );
}

export default CreatePost;
