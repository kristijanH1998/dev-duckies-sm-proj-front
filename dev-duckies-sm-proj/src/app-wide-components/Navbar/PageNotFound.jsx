import { Link } from 'react-router-dom'

export default function PageNotFound() {
  return (
    <section className="section">
      <h1 className="title">Page was not found.</h1>
      <h2 className="subtitle">
        Go back to <Link to="/">homepage</Link>
      </h2>
    </section>
  )
}