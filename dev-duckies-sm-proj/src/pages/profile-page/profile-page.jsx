import  { useState, useEffect } from 'react';
import Post from "../../app-wide-components/post.jsx"
import ProfileNav from "./ProfileNav.jsx"
import "./styling.scss"
export default function ProfilePage() {
  //bellow is the state for my editable bio 
  const [isEditing, setIsEditing] = useState(false); // State to track if editing mode is active
  const [bio, setBio] = useState("");


//On page load get check local storage for key 'bio'. If bio is not any empty string get bio. (this is working)
  useEffect(() => {
    const storedBio = localStorage.getItem('bio');
    if (storedBio) {
      setBio(storedBio);
    } }, []);

//Controls the state for editing Bio
  const handleBioClick = () => {
    setIsEditing(true); // Activate editing mode when the bio is clicked
  };
//Changes the value of username
  const handleBioChange = (event) => {
    setBio(event.target.value);
  };
//Upon submitting Bio it is saved to local storage and IsEditingUser is set to false.
  const handleBioSubmit = (event) => {
    event.preventDefault();
    localStorage.setItem('bio',bio)
    setIsEditing(false);
    alert('Bio saved!') // Deactivate editing mode when the form is submitted
    // Add logic here to save the updated bio to the backend
    //Save the bio in local storage
  };

//when the page loads I want the picture URL saved in local storage to be retrieved so that last saved image
    //is display in the profile image on page load
    useEffect(()=>{
      const handleProfilePicChange = () => {
    
        const storedProfilePic = localStorage.getItem("profilePic");
        const profilePic = document.getElementById("profile-pic");
        if (storedProfilePic) {
          // Set the profile picture source
          profilePic.src = JSON.parse(storedProfilePic);
        } else{profilePic.src= "./default-profile.png"}
      }
    },[])
  // const handleProfilePicChange = () => {
    
  //   const storedProfilePic = localStorage.getItem("profilePic");
  //   if (storedProfilePic) {
  //     // Set the profile picture source
  //     const profilePic = document.getElementById("profile-pic");
  //     profilePic.src = JSON.parse(storedProfilePic);
  //   }
  // }

//for the bellow to work I need to know how to get and set objects in local storage
useEffect(() => {
  //get profile image from local storage if not empy string 
  //handleProfilePicChange();

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
              src="./default-profile.png"
               alt="Prof" />
               
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
         
          <div className= "is-size-3" style={{marginTop: "50px"}}>
            UserName
          </div>
          </div>
            


            
          {console.log(bio)}
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
                  style={{ textAlign: 'center'}} // Center-align text
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
                  Tell us about yourself...
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
            <Post
            user="Tommy"
            postContent="Testing 123"
            date="10/3/24"
            time="13:14"
          />
          <Post
            user="Jessie"
            postContent="Testing 123"
            date="10/3/24"
            time="13:14"
          />
          <Post
            user="Albert"
            postContent="Testing 123"
            date="10/3/24"
            time="13:14"
          />
            </div>
          </div>
        </div>
      </>
  );
}
/* 
A container to hold the profile picture

Make an editable bio (I need to research this) state

past posts show on the page
*/

//on page load I want to get bio from local storage