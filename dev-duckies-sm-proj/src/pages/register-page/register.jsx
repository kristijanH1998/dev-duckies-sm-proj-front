import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
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
  const navigate = useNavigate();
  
  
  // Checks if the username is less than 12 characters
  const usernameTest = username.length <= 12 && username.length > 0;
  
  // Checks if the passwords match
  const passwordTest = password === confirmPassword;

  const emailTest = /^([a-zA-Z0-9\._]+)@([a-zA-Z0-9])+.([a-z]+)(.[a-z+])?$/.test(email); 

  const birthMonthTest = birthMonth >= 1 && birthMonth <= 12;
  const birthDayTest = birthDay >= 1 && birthDay <= 31;
  const birthYearTest = birthYear >= 1900 && birthYear <= 2023;
  const firstNameTest = firstName.trim() !== "";
  const lastNameTest = lastName.trim() !== "";
  
  // Handles input changes and saves it to state
  const handleChange = (setState) => (event) => {
    setState(event.target.value);
  };
  
  // Handles form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !(
        passwordTest &&
        emailTest &&
        usernameTest &&
        birthMonthTest &&
        birthDayTest &&
        birthYearTest &&
        firstNameTest &&
        lastNameTest
      )
    ) {
      console.log(
        passwordTest,
        emailTest,
        usernameTest,
        birthMonthTest,
        birthDayTest,
        birthYearTest,
        firstNameTest,
        lastNameTest
      );
      return console.log("Unable to Register!");
    }
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
        navigate("/");
      })
      .catch((error) => {
        console.log(error.response.data.error);
      });
  };
      

  const myStyles = {
    overflowY: 'scroll'
  }
        
        
  return (
    <div
      className="hero is-fullheight"
      style={{ backgroundColor: "#14161A", height: "100vh", overflowY: "auto" }}
    >
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
                        className={`input ${emailTest ? "" : "is-danger"}`}
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
                        className={`input ${usernameTest ? "" : "is-danger"}`}
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
                        className={`input ${firstNameTest ? "" : "is-danger"}`}
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
                        className={`input ${lastNameTest ? "" : "is-danger"}`}
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
                            className={`input ${
                              birthMonthTest ? "" : "is-danger"
                            }`}
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
                            className={`input ${
                              birthDayTest ? "" : "is-danger"
                            }`}
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
                            className={`input ${
                              birthYearTest ? "" : "is-danger"
                            }`}
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
                        className={`input ${passwordTest ? "" : "is-danger"}`}
                        type="password"
                        placeholder="Confirm Password"
                        value={confirmPassword}
                        onChange={handleChange(setConfirmPassword)}
                      />
                    </div>
                  </div>
                  <div className="field">
                    <div className="control">
                      <button className="button is-primary is-fullwidth m-0">
                        Create Account
                      </button>
                      <Link
                        to="/LogIn"
                        className="button is-primary is-fullwidth is-outlined mt-5"
                      >
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