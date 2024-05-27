import { useState } from 'react'

import { FaSearch } from 'react-icons/fa'
import './SearchBar.css'

export const SearchBar = ({ setResults }) => {
  const [input, setInput] = useState("")

  const fetchData = (value) => {
    // test code to compare fetching data from the two endpoints
    // fetch("https://jsonplaceholder.typicode.com/users").then((response) => console.log(response.json()))
    // fetch("http://localhost:8080/profile/userList", {
    //   credentials: 'include',
    //   method: 'GET',
    //   headers: {'Content-Type': 'application/json', },
    // }).then((response) => response.json().then(json => console.log(json)))

    fetch("http://localhost:8080/profile/userList", {
      credentials: 'include',
      method: 'GET',
      headers: {'Content-Type': 'application/json', },
    }).then((response) => response.json())
      .then((json) => {
        const results = json.filter((user) => {
          return (
            value &&
            user &&
            user.username &&
            user.username.toLowerCase().includes(value.toLowerCase())
          )
        })
        setResults(results)
      })
  }

  const handleChange = (value) => {
    setInput(value)
    fetchData(value)
  }

  return (
    <div className='input-wrapper'>
      <FaSearch id='search-icon' />
      <input
        type="text"
        placeholder='Search'
        name='username'
        autoComplete="off"
        value={input}
        onChange={(e) => handleChange(e.target.value)}
      />
    </div>
  )
}