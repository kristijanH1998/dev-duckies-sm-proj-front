import ToggleTheme from "../../app-wide-components/Themes/ToggleTheme";
import './settings.css'
import axios from "axios";
import { useNavigate } from 'react-router-dom';

axios.defaults.withCredentials = true;

export default function Settings() {
const navigate = useNavigate();
const handleLogout = () => {
  axios
    .get("http://localhost:8080/auth/logout")
    .then((res) => {
      navigate("/");
    })
    .catch((error) => {
      console.log(error);
    });
};

const handleDeleteAccount = () => {
   const confirmDelete = window.confirm("Are you sure you want to delete your account?");
    if (confirmDelete) {
  axios
    .delete("http://localhost:8080/profile/delete")
    .then((res) => {
      alert('Profile deleted successfully.');
      navigate("/");
    })
    .catch((error) => {
      console.log(error);
    });  
  }
};

  return (
    <section className="section">
      <h1 className="title">Settings</h1>
      <h2 className="subtitle">
        A settings page for users to change themes and logout.
      </h2>
      <div className="settings-list">
        <div className="settings-item">
          <ToggleTheme />
        </div>
        <div className="settings-item">
          <button
            className="button is-warning is-rounded is-fullscreen is-dark"
            onClick={handleLogout}>
            Sign Out
          </button>
        </div>
        <div className="settings-item">
        <button
            className="button is-danger is-rounded is-fullscreen is-dark"
            onClick={handleDeleteAccount}>
            Delete Account
          </button>
        </div>
      </div>
    </section>
  );
}