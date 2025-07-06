import React from "react";
import "./Home.css";

export default function Home() {
  return (
    <div className="home">
      <div className="card">
        {/* Card header */}
        <div className="card-header">
          <div className="card-pic">
            <img
              src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D"
              alt="profile"
            />
          </div>
          <h5>Ramesh</h5>
        </div>

        {/* Uploaded image */}
        <div className="card-image">
          <img src="https://images.unsplash.com/photo-1593642632823-8f785ba67e45" alt="uploaded" />

        </div>

        {/* Card content */}
        <div className="card-content">
          <span className="material-symbols-outlined">favorite</span>
          <p>1 Like</p>
          <p>This is amazing</p>
        </div>

        {/* Add comment */}
        <div className="add-comment">
          <span className="material-symbols-outlined">mood</span>
          <input type="text" placeholder="Add a comment" />
          <button className="comment">Post</button>
        </div>
      </div>
    </div>
  );
}
