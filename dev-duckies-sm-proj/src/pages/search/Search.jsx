import { useState } from 'react'

//pages
import { SearchBar } from './SearchBar/SearchBar'
import { SearchResultsList } from './SearchResultsList/SearchResultsList'

import './Search.css'

export default function Search() {
  const [results, setResults] = useState([])

  return (
    <div className="search">
      <div className="search-bar-container">
        <SearchBar setResults={setResults} />
        <SearchResultsList results={results} />
      </div>
    </div>
  )
}