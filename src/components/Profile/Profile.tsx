import avatar from "../../assets/avatar.png"
import avatarLight from "../../assets/avatar-light.png"
import styles from "./Profile.module.css"

type ProfileProps = {
  isLight: boolean
}

export default function Profile({ isLight }: ProfileProps) {
  return (
    <header className={styles.profile}>
      <img
        className={`${styles.avatar} ${isLight ? styles.light : ""}`}
        src={isLight ? avatarLight : avatar}
        alt="Foto de perfil"
      />
      <h1>@designtechti.dev</h1>
      <p>Software Analyst</p>
    </header>
  )
}
