import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'

axios.defaults.withCredentials = true;

export default function CreatePost(){
  const [post_content, setPost_content] = useState()
  const [username, setUsername] = useState()
  const [pic, setPic] = useState()

  function handleChange(event) {
    setPost_content(event.target.value)
  }

  function sharePost(event) {
    event.preventDefault()
    axios.post('http://localhost:8080/posts', {post_content})
    .then(res => {
      console.log(res)
      window.alert("Post has been shared")
      setPost_content("");
    })
    .catch(error => {console.log(error.response.data.error)})
  }

  useEffect(() => {
    axios.get('http://localhost:8080/profile')
    .then(res => { setUsername(res.data.username) })
    .catch(error => console.log(error.response.data.error));
    if(username){
      axios.get(`http://localhost:8080/profile/user/${username}`)
      .then(res => { setPic(res.data.profile_picture); })
      .catch(error => console.log(error.response.data.error));
    }
  }, [username, pic])
  
  return (
      <>
        <div className = "card m-6">
          {/*Bellow is navbar that will also contain user pic and name*/}
            <div className="card">
                <header className="card-header is-flex-direction-row is-align-items-center p-4">
                  <figure className= "image is-48x48 is-square mr-5 ml-3">
                      <img className= "is-rounded" src={`data:image/png;base64,${pic}`} alt="ProfilePicture"/>
                  </figure>
                      <p>{username}</p>
                </header>
             </div>
               {/*Bellow is text form in order to write and submit post*/}
              <form className="text-form" onSubmit={sharePost}>
                <textarea className="textarea is-primary  is medium" type="text" placeholder="Share your thoughts..." onChange={handleChange}  value={post_content}></textarea>
                <button className="button is-primary">Share</button>
              </form>
              {/*May be rethink the footer. Need an exit out button*/}
              {/*This is the footer at the bottom of my card
                <div className="card">
          <footer className="card-footer">
            <a href="#" className="card-footer-item">Save</a>
            <a href="#" className="card-footer-item">Edit</a>
            <a href="#" className="card-footer-item">Delete</a>
          </footer>
        </div>*/}
            </div>
      </>
    )
}
