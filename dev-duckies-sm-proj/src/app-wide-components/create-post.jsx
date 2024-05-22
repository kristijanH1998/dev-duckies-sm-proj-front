import React from 'react'
import { useState } from 'react'
import axios from 'axios'

axios.defaults.withCredentials = true;

export default function CreatePost(){
  const [post_content, setPost_content] =useState()

  function handleChange(event) {
    setPost_content(event.target.value)
  }

  function sharePost(event) {
    event.preventDefault()
    axios.post('http://localhost:8080/posts', {post_content})
    .then(res => {console.log(res)})
    .catch(error => {console.log(error.response.data.error)})
  }
  
  return (
      <>
        <div className = "card m-6">
          {/*Bellow is navbar that will also contain user pic and name*/}
            <div className="card">
             
                
                <header className="card-header is-flex-direction-row is-align-items-center p-4">
                 
                  <figure className= "image is-48x48 is-square mr-5 ml-3">
                      <img className= "is-rounded" src = "https://mediaproxy.salon.com/width/1200/https://media2.salon.com/2011/05/ryan_gosling.jpg"></img>
                    </figure>
                      <p>Ryan-gooseling-445</p>
                 
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
