import { useLocalStorage } from "@uidotdev/usehooks"

import '../../App.css'
import { Toggle } from './Toggle'

export default function ToggleTheme() {
  const preference = window.matchMedia("(prefers-color-scheme: dark)").matches
  const [theme, setTheme] = useLocalStorage("theme", preference)

  return (
    <div>
      <Toggle
        isChecked={theme}
        handleChange={() => setTheme(!theme)}
      />
    </div>
  )
}