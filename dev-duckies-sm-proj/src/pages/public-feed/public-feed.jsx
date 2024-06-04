import Header from "../../app-wide-components/Navbar/MobileNav.jsx";
import Post from "../../app-wide-components/post.jsx";
import "../../index.css";
import "./public-feed.css";
import axios from 'axios'
import { useState, useEffect } from "react";

axios.defaults.withCredentials = true;

function PublicFeed() {
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);

  const increasePage = () => {
    if (posts.length === 5) {
      setPage(page + 1);
    }
    console.log(userInfo);
  };

  const decreasePage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  useEffect(() => {
    if (page > 0) {
      axios
        .get(`http://localhost:8080/feed/${page}`)
        .then((res) => setPosts(res.data))
        .catch((err) => {
          return err.code;
        });
    }
  }, [page]);

  return (
    <div className="App">
      <Header />
      <div className="columns">
        <div className="column is-12">
          <div className="box scroll-container">
            {posts.map((post) => (
              <Post
                key={post.id}
                username={post.username}
                postContent={post.content}
                date={post.timestamp.substr(0, 10)}
                time={post.timestamp.substr(11, 8)}
                profilePic={post.profilePic}
                likeCount={post.likeCount}
                commentCount={post.commentCount}
                id={post.id}
              />
            ))}
          </div>
          <div className="pagination-controls">
            <button
              className="button is-ghost mt-1"
              onClick={decreasePage}
              disabled={page === 1}
            >
              Previous
            </button>
            <button
              className="button is-ghost mt-1"
              onClick={increasePage}
              disabled={posts.length < 5}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PublicFeed;