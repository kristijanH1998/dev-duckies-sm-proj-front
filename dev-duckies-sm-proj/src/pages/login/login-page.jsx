import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios'

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8080/auth/login", { email, password })
      .then((res) => {
        navigate("home/feed");
      })
      .catch((error) => {
        if (
          error.response &&
          error.response.data &&
          error.response.data.error
        ) {
          setError(error.response.data.error);
        } else {
          setError("Failed to login. Please try again later.");
        }
      });
  };

  return (
    <div className="hero is-fullheight">
      <div className="hero-body">
        <div className="container">
          <div className="columns is-centered">
            <div className="column is-half">
              <div className="box">
                <h1 className="title is-4 has-text-centered">Login</h1>
                <form onSubmit={handleSubmit}>
                  {error && (
                    <div className="notification is-danger">{error}</div>
                  )}
                  <div className="field">
                    <label className="label">Email</label>
                    <div className="control has-icons-left">
                      <input
                        className="input"
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={handleEmailChange}
                      />
                      <span className="icon is-small is-left">
                        <i className="fas fa-envelope"></i>
                      </span>
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
                        onChange={handlePasswordChange}
                      />
                      <span className="icon is-small is-left">
                        <i className="fas fa-lock"></i>
                      </span>
                    </div>
                    <Link
                      to="/ForgotPw"
                      className="has-text-primary is-underlined hover:text-danger"
                    >
                      Forgot Password?
                    </Link>
                  </div>

                  <buttons>
                    <button
                      className="button is-primary is-fullwidth"
                      type="submit"
                    >
                      Login{" "}
                    </button>

                    <Link
                      to="/register"
                      className="button is-primary is-fullwidth is-outlined"
                    >
                      Create Account
                    </Link>
                  </buttons>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}