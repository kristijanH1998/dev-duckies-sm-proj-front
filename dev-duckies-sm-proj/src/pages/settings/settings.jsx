import ToggleTheme from "../../app-wide-components/Themes/ToggleTheme";

export default function Settings() {
  return (
    <section className="section">
      <h1 className="title">Settings</h1>
      <h2 className="subtitle">
        A settings page for users to change themes and logout.
      </h2>
      <ToggleTheme />
    </section>
  )
}