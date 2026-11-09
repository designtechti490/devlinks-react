import { useState } from "react"
import styles from "./App.module.css"
import Footer from "./components/Footer/Footer"
import Links from "./components/Links/Links"
import Profile from "./components/Profile/Profile"
import ThemeSwitch from "./components/Switch/Switch"

export default function App() {
  const [isLight, setIsLight] = useState(false)

  return (
    <main className={`${styles.app} ${isLight ? styles.light : ""}`}>
      <div className={styles.container}>
        <Profile isLight={isLight} />
        <ThemeSwitch
          isLight={isLight}
          onToggle={() => setIsLight((current) => !current)}
        />
        <Links />
        <Footer />
      </div>
    </main>
  )
}
