import ToggleTheme from "../../app-wide-components/Themes/ToggleTheme";
import './settings.css'

export default function Settings() {
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
          <button className="button is-danger is-rounded is-fullscreen is-dark">Sign Out</button>
        </div>
      </div>
    </section>
  )
}