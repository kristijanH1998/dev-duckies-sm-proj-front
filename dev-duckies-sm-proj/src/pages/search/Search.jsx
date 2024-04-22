import './Search.css'
import SearchUserCard from './SearchUserCard'

export default function Search() {
  return (
    <section className="section">

      <h1 className="title">Search</h1>
      <h2 className="subtitle">
        Search for users by @username
      </h2>
      
      <div className="field">
        <p className="control has-icons-left">
          <input className="input" type="text" placeholder="@Username" />
          <span className="icon is-small is-left">
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