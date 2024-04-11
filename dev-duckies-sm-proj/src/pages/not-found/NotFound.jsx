import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div>
      <p>Page was not found.</p>
      <Link to="/">Go back to homepage</Link>
    </div>
  )
}