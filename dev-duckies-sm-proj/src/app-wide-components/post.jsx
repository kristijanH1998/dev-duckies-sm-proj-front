import '@fortawesome/fontawesome-free/css/all.css';
import { useState } from 'react';
import axios from 'axios'

axios.defaults.withCredentials = true;

const Post = (props) => {

  const [commentIsOpen, setCommentIsOpen] = useState(false);
  const [likeIsOpen, setLikeIsOpen] = useState(false);
  const [likeUsers, setLikeUsers] = useState([]);

  function createLike(postId) {
    axios.post(`http://localhost:8080/posts/${postId}/like`)
      .then(res1 => {
        if(res1.status == 200) {
          axios.delete(`http://localhost:8080/posts/${postId}/delLike`)
            .then(res2 => {
              showLikes(postId, 1);
            })
            .catch(error => {console.log(error.response.data.error)})
        } else {
          showLikes(postId, 1);
        }
      }).catch(error => {console.log(error.response.data.error)})
  }

  function showLikes(postId, page) {
    axios.get(`http://localhost:8080/posts/${postId}/${page}/likes`)
    .then(res => {setLikeUsers(res.data)})
    .catch(err => console.log(err))
  }

  return (
    <div className="box">
      <div className="media m-auto">
        <div className="media-left">
          <figure className= "image is-48x48 is-square mr-5 ml-3">
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
      </div>
      <div className="content">
        <p>{props.postContent}</p>

        <time>
          {props.date} {props.time}
        </time>
      </div>
      <nav className="level is-mobile">
        <div className="level-left">
          <a className="level-item" aria-label="comment">
            <span className="icon is-small">
              <button className='button is-borderless m-0 p-0' id='comment' onClick={() => setCommentIsOpen(true)}>
                <i className="fas fa-comment"></i>
              </button>
            </span>
          </a>
          <p>{props.commentCount}</p>
          <a className="level-item" aria-label="like">
            <span className="icon is-small">
              <button className='button is-borderless m-0 p-0' id='like' onClick={() => {setLikeIsOpen(true); createLike(props.id)}}>
                <i className="fas fa-heart"></i>
              </button>
            </span>
          </a>
          <p>{props.likeCount}</p>
        </div>
      </nav>
      <div className={`modal ${commentIsOpen ? 'is-active' : ''}`}>
        <div className="modal-background" onClick={() => setCommentIsOpen(false)}></div>
        <div className="modal-card">
          <header className="modal-card-head">
            <p className="modal-card-title">Write a comment!</p>
            <button className="delete" aria-label="close" onClick={() => setCommentIsOpen(false)}></button>
          </header>
          <section className="modal-card-body">
            <textarea className='textarea' id='comments'></textarea>
          </section>
          <footer className="modal-card-foot">
            <div className="buttons">
              <button className="button is-success mt-1">Post</button>
              <button className='button is-ghost mt-1' onClick={() => setCommentIsOpen(false)}>Cancel</button>
            </div>
          </footer>
        </div>
      </div>
      <div className={`modal ${likeIsOpen ? 'is-active' : ''}`}>
        <div className="modal-background" onClick={() => setLikeIsOpen(false)}></div>
        <div className="modal-card">
          <header className="modal-card-head">
            <p className="modal-card-title">See who likes this post!</p>
            <button className="delete" aria-label="close" onClick={() => setLikeIsOpen(false)}></button>
          </header>
          <section className="modal-card-body">
            <ul>
              {likeUsers.map(likeUser => (
                <li key={likeUser.username}>
                  <div className="media m-auto">
                    <div className="media-left">
                      <figure className= "image is-48x48 is-square"><img className="is-rounded"
                          src={`data:image/png;base64,${JSON.parse(JSON.stringify(likeUser.profile_pic))}`}
                          alt="Placeholder image"/></figure>
                    </div>
                    <div className="media-content">
                      <span>{JSON.parse(JSON.stringify(likeUser.username))}</span>
                    </div>
                  </div>
                </li>))}
            </ul>
          </section>
          <footer className="modal-card-foot">
            <div className="buttons">
              <button className='button is-success mt-1' onClick={() => setLikeIsOpen(false)}>Close</button>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default Post;
