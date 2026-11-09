import styles from "./Switch.module.css"

type SwitchProps = {
  isLight: boolean
  onToggle: () => void
}

export default function ThemeSwitch({ isLight, onToggle }: SwitchProps) {
  return (
    <button
      className={`${styles.switch} ${isLight ? styles.light : ""}`}
      type="button"
      role="switch"
      aria-checked={isLight}
      aria-label="Alternar tema claro"
      onClick={onToggle}
    >
      <span className={styles.track} />
      <span className={styles.thumb} />
    </button>
  )
}
