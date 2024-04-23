import './Search.css'
import SearchUserCard from './SearchUserCard'

export default function Search() {
  return (
    <section className="section">

      <h1 className="title">Search</h1>
      <h2 className="subtitle">
        Search for users by @username
      </h2>

      <div className="field is-grouped">
        <p className="control is-expanded">
          <input className="input" type="text" id='username' name='username' placeholder="@username" required autoComplete="off" />
        </p>
        <p className="control" id='search-btn'>
          <button className="button is-info" type='submit'>
            Search
          </button>
        </p>
      </div>

      <div className="user-list">
        <SearchUserCard />
        <SearchUserCard />
        <SearchUserCard />
      </div>

    </section>
  )
}