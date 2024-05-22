import Header from "../../app-wide-components/Navbar/MobileNav.jsx";
import Post from "../../app-wide-components/post.jsx";
import "../../index.css";
import axios from 'axios'

axios.defaults.withCredentials = true;
axios.post('http://localhost:8080/posts', {
  "post_content": "This is a test post."
}).then(res => {
    axios.get('http://localhost:8080/feed/1').then(res => {
    console.log(res.data)
  }).catch(error => {console.log(error.response.data.error)})
}).catch(error => {console.log(error.response.data.error)})
 

function PublicFeed() {
  return (
    <div className="App">
      <Header />
      <div className="columns">
        <div className="column is-12">
          <Post
            username="Tommy"
            postContent="Testing 123"
            date="10/3/24"
            time="13:14"
          />
          <Post
            username="Jessie"
            postContent="Testing 123"
            date="10/3/24"
            time="13:14"
          />
          <Post
            username="Albert"
            postContent="Testing 123"
            date="10/3/24"
            time="13:14"
          />
        </div>
      </div>
    </div>
  );
}

export default PublicFeed;
