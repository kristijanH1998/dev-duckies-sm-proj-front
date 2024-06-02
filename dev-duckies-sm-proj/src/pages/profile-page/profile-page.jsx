import  { useState, useEffect } from 'react';
import ProfileNav from "./ProfileNav.jsx"
import "./styling.scss"
import axios from 'axios'

axios.defaults.withCredentials = true;

export default function ProfilePage() {
  const [isEditing, setIsEditing] = useState(false); // State to track if editing mode is active
  const [bio, setBio] = useState("");
  const [userInfo, setUserInfo] = useState({});
  const [accountInfo, setAccountInfo] = useState({});
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    //get active user's account information
    axios.get(`http://localhost:8080/profile`)
    .then(res => {
      setUserInfo(res.data.user_info); 
      setAccountInfo(res.data);
    })
    .catch(err => console.log(err))
  }, []);

  useEffect(() => {
    if(accountInfo.username) {
      axios.get(`http://localhost:8080/posts/user/${accountInfo.username}/${page}`)
      .then(res => {setPosts(res.data)})
      .catch(err => {console.log(err.data)});
    }
  }, [page, accountInfo])

  const increasePage = () => {
    if (posts.length === 5) {
      setPage(page + 1);
    }
  };

  const decreasePage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  //Controls the state for editing Bio
  const handleBioClick = () => {
    setIsEditing(true); // Activate editing mode when the bio is clicked
  };
  const handleBioChange = (event) => {
    setBio(event.target.value);
  };
//Upon submitting Bio it is saved to database and IsEditingUser is set to false.
  const handleBioSubmit = (event) => {
    event.preventDefault();
    localStorage.setItem('bio',bio)
    setIsEditing(false);
    alert('Bio saved!') // Deactivate editing mode when the form is submitted
    // Add logic here to save the updated bio to the backend
  };

useEffect(() => {
  // Set up onchange event for the input file element
  let inputFile = document.getElementById("input-file");
  if (inputFile) {
    inputFile.onchange = function() {
      const profilePic = document.getElementById("profile-pic");
      profilePic.src = URL.createObjectURL(inputFile.files[0]);
      // Save the profile picture URL to local storage
      localStorage.setItem("profilePic", JSON.stringify(profilePic.src));
      alert("Profile Picture Saved");
    };
  }
}, []); // Empty dependency array ensures the effect runs only once after mounting

  return (
    <>
      <div className="card ">
        {/* Navbar and user profile */}
        <ProfileNav/>
        <div className="upper-section card">
          <div id="header" className="container ">
            <div id="profile-pic-and-username" className="block">
            <figure className="image is-128x128 is-square mr-3 ml-3" style={{ objectFit: 'cover', width: '128px', height: '128px' }}>
              <img 
              id= "profile-pic" 
              className="is-rounded" 
              src={`data:image/png;base64,${userInfo.profile_picture ? userInfo.profile_picture : "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"}`}
              alt="Profile picture" />
            </figure>
          <button className= "button is-small mt-0 p-0">
            <label className="" htmlFor="input-file" style={{border:"none"}}>
            <input className="file-input" id= "input-file" type="file" accept="image/jpeg, image/png, image/jpg"/>
            <span className="file-cta" style={{border:"none"}}>
              <span className="file-icon">
              </span>
              <span className="file-label ">Change profile photo… </span>
            </span>
            </label>
          </button>
          <div className= "is-size-2" style={{marginTop: "30px"}}>
            <b>{accountInfo.username ? accountInfo.username : "N/A"}</b>
          </div>
          <p>Email: {accountInfo.email ? accountInfo.email : "N/A"}</p>
          <p>Member Since: {userInfo.datetime_created ? userInfo.datetime_created.substr(0, 10) : "N/A"}</p>
          </div>
          <p>First Name: {userInfo.first_name ? userInfo.first_name : "N/A"}</p>
          <p>Last Name: {userInfo.last_name ? userInfo.last_name : "N/A"}</p>
          <p>Country: {userInfo.country ? userInfo.country : "N/A"}</p>
          <p>Birthday: {userInfo.date_of_birth ? userInfo.date_of_birth.substr(0, 10) : "N/A"}</p>
          <div id="bio-logic">
            {isEditing ? (
              <div id="text-area">
              <form onSubmit={handleBioSubmit}>
                <textarea
                className= " bio-textarea"
                  value={bio}
                  onChange={handleBioChange}
                  rows={4}
                  cols={50}
                  style={{ textAlign: 'center'}}
                />
                <div id="text-area-save">
                <button className="button mt-0"type="submit">Save</button> 
                </div>
              </form>
              </div>)
             : bio && bio.trim() !== '' ? (
              <>
                <div className="bio-and-button">
                  <div className="content bio-text">
                  {bio}
                  </div>
                  <button onClick={handleBioClick}  className="edit-bio button" style={{ margin: 0 }}>Edit Bio</button>
                </div>
              </>
            ) : (
              <>
                <div className="bio-and-button card-content">
                  <div className="content" style={{ wordWrap: "break-word", whiteSpace: "normal" }}>
                    Biography: {userInfo.biography ? userInfo.biography : "N/A"}
                  </div>
                  <button onClick={handleBioClick} className="edit-bio button" style={{ margin: 0 }}>Edit Bio</button>
                </div>
              </>
            )}
          </div>
          </div> 
        </div>
        <div className= "container ">
            <div id="feed-background"className=" box is-scrollable m-0" style={{maxHeight:"450px", overflow:"scroll"}}>
              <div className= "is-size-2" style={{margin: "5px"}}>
                <b>Posts: </b>
              </div>
            {posts.map((post) => {
                return (
                  <div className="box" key={post._id}>
                    <div className="content">
                      <p>{post.post_content}</p>
                      <time>
                      {post.post_timestamp.substr(0, 10)} 
                      </time> <br></br>
                      <i className="fas fa-comment"><p>{post.post_comment_count}</p></i>
                      <i className="fas fa-heart"><p>{post.post_like_count}</p></i>
                    </div>
                  </div>        
                )
              })}
              <button
                className="button is-ghost mt-1"
                onClick={() => {decreasePage()}}>
                Previous
              </button>
              <button
                className="button is-ghost mt-1"
                onClick={() => {increasePage()}}>
                Next
              </button>
            </div>
          </div>
        </div>
      </>
  );
}