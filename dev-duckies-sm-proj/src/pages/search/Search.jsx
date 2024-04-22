import './Search.css'
import SearchUserCard from './SearchUserCard'

export default function Search() {
  return (
    <section className="section">

      <h1 className="title">Search</h1>
      <h2 className="subtitle">
        Search for users by @username
      </h2>
      
      <div class="field">
        <p class="control has-icons-left">
          <input class="input" type="text" placeholder="@Username" />
          <span class="icon is-small is-left">
            <i className='material-symbols-rounded'>search</i>
          </span>
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