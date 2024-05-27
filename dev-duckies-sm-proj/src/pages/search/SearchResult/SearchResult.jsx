import './SearchResult.css'

export const SearchResult = ({ result }) => {
  return <div 
    className='search-result' 
    onClick={(e) => alert(`You clicked on ${result.username}`)}
  >
    <figure className= "image is-48x48 is-square mr-5 ml-3">
      <img className= "is-rounded" src={`data:image/png;base64,${result.profilePic}`} alt="ProfilePicture"/>
    </figure>
    <p>{result.username}</p>
    
  </div>
}