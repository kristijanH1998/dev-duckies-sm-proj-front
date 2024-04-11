import React from 'react'

export default function CreatePost() {
  return (
    <section className="section">
      <div className="container">

        <h1 className="title">Hello Post</h1>
        <p className="subtitle">My post page with <strong>Bulma</strong></p>

        <div class="field">
          <label class="label">Post Message</label>
          <div class="control">
            <textarea class="textarea has-fixed-size" placeholder="What's happening?"></textarea>
          </div>
        </div>

        <div class="field is-grouped">
          <div class="control">
            <button class="button is-link">Post</button>
          </div>
          <div class="control">
            <button class="button is-link is-light">Cancel</button>
          </div>
        </div>

      </div>
    </section>
  )
}
