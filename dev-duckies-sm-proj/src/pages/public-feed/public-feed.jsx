import Header from "../../app-wide-components/Navbar/MobileNav.jsx";
import Post from "../../app-wide-components/post.jsx";
import "../../index.css";
import axios from 'axios'
import { useState, useEffect } from "react";

axios.defaults.withCredentials = true;

function PublicFeed() {
  
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8080/feed/1')
    .then(res => setPosts(res.data))
    .catch(err => console.log(err));
  }, [])

  return (
    <div className="App">
      <Header />
      <div className="columns">
        <div className="column is-12">
          {posts.map(post => (
            <Post
              key={post.id}
              username= {post.username}
              postContent={post.content}
              date={post.timestamp.substr(0, 10)}
              time={post.timestamp.substr(11, 8)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default PublicFeed;
