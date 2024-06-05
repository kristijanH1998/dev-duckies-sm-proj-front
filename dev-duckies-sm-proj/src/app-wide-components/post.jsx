import '@fortawesome/fontawesome-free/css/all.css';
import "./post.css"
import { useState, useEffect } from 'react';
import axios from 'axios'
import { FaTrashCan } from "react-icons/fa6";
import { FiEdit } from "react-icons/fi";

axios.defaults.withCredentials = true;

const Post = (props) => {
  const [commentIsOpen, setCommentIsOpen] = useState(false);
  const [commentContent, setCommentContent] = useState("");
  const [likeIsOpen, setLikeIsOpen] = useState(false);
  const [likeUsers, setLikeUsers] = useState([]);
  const [comments, setComments] = useState([]);
  const [commentPage, setCommentPage] = useState(1);
  const [likePage, setLikePage] = useState(1);
  const [commentCount, setCommentCount] = useState(props.commentCount);
  const [likeCount, setLikeCount] = useState(props.likeCount);
  const [isEditing, setIsEditing] = useState(false);
  const [newPostContent, setNewPostContent] = useState();
  const [postContent, setPostContent] = useState(props.postContent);

  useEffect(() => {
    if (commentIsOpen) {
      fetchComments(commentPage);
    }
  }, [commentIsOpen, commentPage]);

  useEffect(() => {
    if (likeIsOpen) {
      showLikes(props.id, likePage);
    }
  }, [likeIsOpen, likePage]);

  const fetchComments = (page) => {
    axios
      .get(`http://localhost:8080/posts/${props.id}/${page}/allComments`)
      .then((res) => {
        setComments(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const increaseCommentPage = () => {
    if (comments.length === 5) {
      setCommentPage(commentPage + 1);
    }
  };

  const decreaseCommentPage = () => {
    if (commentPage > 1) {
      setCommentPage(commentPage - 1);
    }
  };

  const createLike = (postId) => {
    axios
      .post(`http://localhost:8080/posts/${postId}/like`)
      .then((res1) => {
        if (res1.status === 200) {
          axios
            .delete(`http://localhost:8080/posts/${postId}/delLike`)
            .then((res2) => {
              setLikeCount(likeCount - 1);
              showLikes(postId, 1);
            })
            .catch((error) => {
              console.log(error.response.data.error);
            });
        } else {
          setLikeCount(likeCount + 1);
          showLikes(postId, 1);
        }
      })
      .catch((error) => {
        console.log(error.response.data.error);
      });
  };

  function showLikes(postId, page) {
    axios
      .get(`http://localhost:8080/posts/${postId}/${page}/likes`)
      .then((res) => {
        setLikeUsers(res.data);
      })
      .catch((err) => console.log(err));
  }

  const increaseLikePage = () => {
    if (likeUsers.length === 5) {
      setLikePage(likePage + 1);
    }
  };

  const decreaseLikePage = () => {
    if (likePage > 1) {
      setLikePage(likePage - 1);
    }
  };

  const postComment = () => {
    if (commentContent.trim() === "") {
      alert("Comment cannot be empty");
      return;
    }

    axios
      .post(`http://localhost:8080/posts/${props.id}/comment`, {
        comment_content: commentContent,
      })
      .then((res) => {
        if (res.status === 201) {
          setCommentContent("");
          setCommentIsOpen(false);
          setCommentCount(commentCount + 1);

          // Optionally, refresh comments or update comment count
        }
      })
      .catch((err) => {
        console.log(err);
        alert("Error posting comment");
      });
  };

  function deletePost() {
    axios.delete(`http://localhost:8080/posts/${props.id}/delete`)
    .then(res => {
      console.log(res);
      props.onDelete(props.id);
    })
    .catch(error => {console.log(error.response.data.error)})
  }

  function deleteComment(event) {
    let commentId = event.currentTarget.parentElement.parentElement.parentElement.getAttribute('data-tag');     
    console.log(commentId)
    axios.delete(`http://localhost:8080/posts/${props.id}/comment/${commentId}`)
    .then(res => {
      setCommentCount(commentCount - 1);
      fetchComments(commentPage);
      console.log(res)})
    .catch(error => {console.log(error.response.data.error)})
  }

  function updatePostClick() {
    setIsEditing(true);
  }

  const handlePostContentChange = (event) => {
      setNewPostContent(newPostContent => ({...newPostContent, [event.target.id]: event.target.value}));
  };

  const updatePostContentSubmit = (event) => {
    event.preventDefault();
    setIsEditing(false);
    axios.put(`http://localhost:8080/posts/${props.id}`, newPostContent)
    .then(res => 
      {axios.get(`http://localhost:8080/posts/${props.id}`)
      .then(res => {
        setPostContent(res.data.post_content); 
      })
      .catch(error => console.log(error.response.data.error))
      })
    .catch(error => console.log(error.response.data.error));      
    };

  return (
    <div className="box">
      <div className="media m-auto post-header">
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
        <div className='post-editing'>
          <button onClick={updatePostClick}><FiEdit /></button>
          <button onClick={deletePost}><FaTrashCan /></button>
        </div>
      </div>
      <div className="content">
        {isEditing ? (
              <div id="text-area">
              <form onSubmit={updatePostContentSubmit}>
                <input
                  id="post_content"
                  className= "edit-post"
                  onChange={handlePostContentChange}
                />
                <div id="text-area-save">
                  <button className="button mt-0"type="submit">Save</button> 
                </div>
              </form>
              </div>)
            : (
              <>
                <p>{postContent}</p>
                <time>
                  {props.date} {props.time}
                </time>
              </>
            )}
      </div>
      <nav className="level is-mobile">
        <div className="level-left">
          <a className="level-item" aria-label="comment">
            <span className="icon is-small">
              <button
                className="button is-borderless m-0 p-0"
                id="comment"
                onClick={() => setCommentIsOpen(true)}
              >
                <i className="fas fa-comment"></i>
              </button>
            </span>
          </a>
          <p>{commentCount}</p>
          <a className="level-item" aria-label="like">
            <span className="icon is-small">
              <button
                className="button is-borderless m-0 p-0"
                id="like"
                onClick={() => {
                  setLikeIsOpen(true);
                  createLike(props.id);
                }}
              >
                <i className="fas fa-heart"></i>
              </button>
            </span>
          </a>
          <p>{likeCount}</p>
        </div>
      </nav>
      <div className={`modal ${commentIsOpen ? "is-active" : ""}`}>
        <div
          className="modal-background"
          onClick={() => setCommentIsOpen(false)}
        ></div>
        <div className="modal-card">
          <header className="modal-card-head">
            <p className="modal-card-title">Write a comment!</p>
            <button
              className="delete"
              aria-label="close"
              onClick={() => setCommentIsOpen(false)}
            ></button>
          </header>
          <section className="modal-card-body">
            <textarea
              className="textarea"
              id="comments"
              value={commentContent}
              onChange={(e) => setCommentContent(e.target.value)}
            ></textarea>
            <button
              className="button is-success mt-5 mb-5"
              onClick={postComment}
            >
              Post
            </button>
            <button
              className="button is-ghost mt-5 mb-5"
              onClick={() => setCommentIsOpen(false)}
            >
              Cancel
            </button>
            <div className="comments">
              {comments.map((comment) => (
                <div data-tag={comment._id} key={comment._id} className="comment-container">
                  <div className="comment">
                    <div className="media-left">
                      <figure className="image is-48x48 is-square">
                        <img
                          className="is-rounded"
                          src={`data:image/png;base64,${comment.profile_pic}`}
                          alt="Profile"
                        />
                      </figure>
                    </div>
                    <div className="media-content">
                      <p className="username">{comment.username}</p>
                      <p>{comment.content}</p>
                    </div>
                    <div className='post-editing'>
                      <button className="fa-xl" onClick={deleteComment}><FaTrashCan /></button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
          <footer className="modal-card-foot">
            <div className="buttons">
              <button
                className="button is-ghost mt-1"
                onClick={() => decreaseCommentPage()}
              >
                Previous
              </button>
              <button
                className="button is-ghost mt-1"
                onClick={() => increaseCommentPage()}
              >
                Next
              </button>
            </div>
          </footer>
        </div>
      </div>
      <div className={`modal ${likeIsOpen ? "is-active" : ""}`}>
        <div
          className="modal-background"
          onClick={() => setLikeIsOpen(false)}
        ></div>
        <div className="modal-card">
          <header className="modal-card-head">
            <p className="modal-card-title">See who likes this post!</p>
            <button
              className="delete"
              aria-label="close"
              onClick={() => setLikeIsOpen(false)}
            ></button>
          </header>
          <section className="modal-card-body">
            <ul>
              {likeUsers.map((likeUser) => (
                <li key={likeUser.username}>
                  <div className="media m-auto">
                    <div className="media-left">
                      <figure className="image is-48x48 is-square">
                        <img
                          className="is-rounded"
                          src={`data:image/png;base64,${likeUser.profile_pic}`}
                          alt="Placeholder image"
                        />
                      </figure>
                    </div>
                    <div className="media-content">
                      <span>{likeUser.username}</span>
                    </div>
                  </div>
                  <br></br>
                </li>
              ))}
            </ul>
          </section>
          <footer className="modal-card-foot">
            <button
              className="button is-success mx-1 mt-0"
              onClick={() => setLikeIsOpen(false)}
            >
              Close
            </button>
            <button
              className="button is-ghost mt-1"
              onClick={() => decreaseLikePage()}
            >
              Previous
            </button>
            <button
              className="button is-ghost mt-1"
              onClick={() => increaseLikePage()}
            >
              Next
            </button>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default Post;