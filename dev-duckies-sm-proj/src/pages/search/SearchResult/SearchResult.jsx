import './SearchResult.css'
import '@fortawesome/fontawesome-free/css/all.css';
import { useState, useEffect } from 'react';
import axios from 'axios'

axios.defaults.withCredentials = true;

export const SearchResult = ({ result }) => {
  const [profileIsOpen, setProfileIsOpen] = useState(false);
  const [page, setPage] = useState(1);
  const [posts, setPosts] = useState([]);
  const [userInfo, setUserInfo] = useState({});
  
  function showProfile(username) {
    axios.get(`http://localhost:8080/posts/user/${username}/1`)
    .then(res => {setPosts(res.data)})
    .catch(err => console.log(err))
    axios.get(`http://localhost:8080/profile/user/${username}`)
    .then(res => {setUserInfo(res.data)})
    .catch(err => console.log(err))
  }

  const increasePage = () => {
    if (posts.length === 5) {
      setPage(page + 1);
    }
    console.log(userInfo)
  };

  const decreasePage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  useEffect(() => {
    if(page > 0) {
      // console.log(page)
      axios.get(`http://localhost:8080/posts/user/${result.username}/${page}`)
      .then(res => {setPosts(res.data)})
      .catch(err => console.log(err));
    }
  }, [page])
  
  return (
  <div>
    <div className='search-result' onClick={() => {setProfileIsOpen(true); showProfile(result.username)}}>
      <figure className= "image is-48x48 is-square mr-5 ml-3">
        <img className= "is-rounded" src={`data:image/png;base64,${result.profilePic}`} alt="ProfilePicture"/>
      </figure>
      <p>{result.username}</p>
    </div>
    <div className={`modal ${profileIsOpen ? "is-active" : ""}`}>
        <div
          className="modal-background"
          onClick={() => setProfileIsOpen(false)}
        ></div>
        <div className="modal-card">
          <header className="modal-card-head">
            <p className="modal-card-title">Username</p>
            <button
              className="delete"
              aria-label="close"
              onClick={() => setProfileIsOpen(false)}
            ></button>
          </header>
          <div className='card-body-contents'>
            <section className="modal-card-body user-posts">
              {posts.map((post) => {
                return (
                  <div className="box" key={post._id}>
                    {/* <div className="media m-auto">
                      <div className="media-left">
                        <figure className="image is-48x48 is-square mr-5 ml-3">
                          <img
                            className="is-rounded"
                            src={`data:image/png;base64,${props.profilePic}`}
                            alt="Placeholder image"
                          />
                        </figure>
                      </div>
                      <div className="media-content">
                        <p className="title is-4">{props.username}</p>
                      </div>
                    </div> */}
                    <div className="content">
                      <p>{post.post_content}</p>
                      <time>
                      {post.post_timestamp.substr(0, 10)} 
                      </time> <br></br>
                      <i className="fas fa-comment"><p>{post.post_comment_count}</p></i>
                      <i className="fas fa-heart"><p>{post.post_like_count}</p></i>
                    </div>
                  </div>        
                )
              })}
            </section>
            <section className="modal-card-body user-info">
              <div className="name box">
                <h1>{userInfo.first_name}</h1>
                <h1>{userInfo.last_name}</h1>
              </div>
              <div className="bio box">
                <p>{userInfo.biography ? userInfo.biography : "N/A"}</p>
              </div>
              <div className="extra-info box">
                <h2>Birthday: {userInfo.date_of_birth ? userInfo.date_of_birth.substr(0, 10) : "N/A"}</h2>
                <h2>Country: {userInfo.country ? userInfo.country : "N/A"}</h2>
              </div>
            </section>
          </div>
          <footer className="modal-card-foot">
            <div className="buttons">
              <button
                className="button is-ghost mt-1"
                onClick={() => {decreasePage()}}>
                Previous
              </button>
              <button
                className="button is-ghost mt-1"
                onClick={() => {increasePage()}}>
                Next
              </button>
            </div>
          </footer>
        </div>
      </div>
  </div>  
)
}