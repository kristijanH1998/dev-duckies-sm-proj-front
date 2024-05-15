import { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from "axios";
import '@fortawesome/fontawesome-free/css/all.min.css';


export default function Register() {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [birthMonth, setBirthMonth] = useState('');
  const [birthDay, setBirthDay] = useState('');
  const [birthYear, setBirthYear] = useState('');


 // Checks if the username is less than 12 characters
  const usernameTest = username.length <= 12;

  // Checks if the passwords match
  const passwordTest = password === confirmPassword;

  // Handles input changes and saves it to state
  const handleChange = (setState) => (event) => {
    setState(event.target.value);
  };

  // Handles form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8080/auth/register", {
        username,
        email,
        password,
        first_name: firstName,
        last_name: lastName,
        date_of_birth: new Date(`${birthMonth}/${birthDay}/${birthYear}`),
      })
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  //   if (passwordTest && emailTest && usernameTest) {
  //     console.log('Registered!');
  //   } else {
  //     console.log('Passwords do not match, email is invalid, or username is too long');
  //   }
  // };


  return (
    <div className="hero is-fullheight">
      <div className="hero-body">
        <div className="container">
          <div className="columns is-centered">
            <div className="column is-half">
              <div className="box">
                <h1 className="title is-4 has-text-centered">Register</h1>
                <form onSubmit={handleSubmit}>
                  <div className="field">
                    <label className="label">Email</label>
                    <div className="control has-icons-left">
                      <input
                        className="input"
                        type="text"
                        placeholder="Email Address"
                        value={email}
                        onChange={handleChange(setEmail)}
                      />
                    </div>
                  </div>
                  <div className="field">
                    <label className="label">Username</label>
                    <div className="control has-icons-left">
                      <input
                        className={`input ${usernameTest ? '' : 'is-danger'}`}
                        type="text"
                        placeholder="Username"
                        value={username}
                        onChange={handleChange(setUsername)}
                        maxLength={12}
                      />
                    </div>
                  </div>

                  <div className="field">
  <label className="label">First Name</label>
  <div className="control has-icons-left">
    <input
      className="input"
      type="text"
      placeholder="First Name"
      value={firstName}
      onChange={handleChange(setFirstName)}
    />
  </div>
</div>
<div className="field">
  <label className="label">Last Name</label>
  <div className="control has-icons-left">
    <input
      className="input"
      type="text"
      placeholder="Last Name"
      value={lastName}
      onChange={handleChange(setLastName)}
    />
  </div>
</div>


<div className="field">
  <label className="label">Date of Birth</label>
  <div className="control has-icons-left">
    <div className="field has-addons">
      <div className="control">
        <input
          className="input"
          type="number"
          placeholder="MM"
          value={birthMonth}
          onChange={handleChange(setBirthMonth)}
          min="1"
          max="12"
        />
      </div>
      <div className="control">
        <input
          className="input"
          type="number"
          placeholder="DD"
          value={birthDay}
          onChange={handleChange(setBirthDay)}
          min="1"
          max="31"
        />
      </div>
      <div className="control">
        <input
          className="input"
          type="number"
          placeholder="YYYY"
          value={birthYear}
          onChange={handleChange(setBirthYear)}
          min="1900"
          max="2023"
        />
      </div>
    </div>
  </div>
</div>

                  <div className="field">
                    <label className="label">Password</label>
                    <div className="control has-icons-left">
                      <input
                        className="input"
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={handleChange(setPassword)}
                      />
                    </div>
                  </div>
                  <div className="field">
                    <label className="label">Confirm Password</label>
                    <div className="control has-icons-left">
                      <input
                        className={`input ${passwordTest ? '' : 'is-danger'}`}
                        type="password"
                        placeholder="Confirm Password"
                        value={confirmPassword}
                        onChange={handleChange(setConfirmPassword)}
                      />
                    </div>
                  </div>
                  <div className="field">
                    <div className="control">
                      <Link to='/' className="button is-primary is-fullwidth">Create Account</Link>
                      <Link to="/LogIn" className="button is-primary is-fullwidth is-outlined">
              Return to Login
              </Link>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}