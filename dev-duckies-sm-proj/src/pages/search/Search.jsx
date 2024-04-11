import React from 'react'

export default function Search() {
  return (
    <section className="section">
      <div className="container">

        <div class="field is-grouped">
          <p class="control is-expanded has-icons-left">
            <input class="input" type="text" placeholder="Name" />
            <span class="icon is-small is-left">
              <i class="fas fa-search"></i>
            </span>
          </p>
          <p class="control">
            <button class="button is-info">
              Search
            </button>
          </p>
        </div>

        <h1 className="title">Hello Search</h1>
        <p className="subtitle">My search page with <strong>Bulma</strong></p>
      </div>
    </section>
  )
}