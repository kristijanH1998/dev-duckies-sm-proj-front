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
      navigate("/login");
    })
    .catch((error) => {
      console.log(error);
    });
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
            className="button is-danger is-rounded is-fullscreen is-dark"
            onClick={handleLogout}>
            Sign Out
          </button>
        </div>
      </div>
    </section>
  );
}