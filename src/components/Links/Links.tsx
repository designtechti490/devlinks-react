import {
  CodeIcon,
  EnvelopeClosedIcon,
  GitHubLogoIcon,
  GlobeIcon,
  InstagramLogoIcon,
  LinkedInLogoIcon,
  TwitterLogoIcon,
  VideoIcon,
} from "@radix-ui/react-icons"
import styles from "./Links.module.css"

const links = [
  {
    name: "Portfólio",
    text: "See my portfolio and get a quote",
    url: "https://designtechti-dev.vercel.app/",
    icon: <GlobeIcon className={styles.linkIcon} />,
  },
  {
    name: "Instagram",
    text: "Follow me on Instagram",
    url: "https://instagram.com/designtechti.dev",
    icon: <InstagramLogoIcon className={styles.linkIcon} />,
  },
  {
    name: "GitHub",
    text: "See my projects",
    url: "https://github.com/designtechti490",
    icon: <GitHubLogoIcon className={styles.linkIcon} />,
  },
  {
    name: "YouTube",
    text: "Subscribe into my YouTube channel",
    url: "https://youtube.com/@designtechti",
    icon: <VideoIcon className={styles.linkIcon} />,
  },
  {
    name: "LinkedIn",
    text: "Connect with me on LinkedIn",
    url: "https://www.linkedin.com/in/designtechtidev/",
    icon: <LinkedInLogoIcon className={styles.linkIcon} />,
  },
  {
    name: "Twitter",
    text: "Humor Updates in 140 characters",
    url: "https://twitter.com/designtechtidev",
    icon: <TwitterLogoIcon className={styles.linkIcon} />,
  },
  {
    name: "CodePen",
    text: "See a few of my projects on CodePen",
    url: "https://codepen.io/designtechti_dev",
    icon: <CodeIcon className={styles.linkIcon} />,
  },
]

export default function Links() {
  return (
    <section className={styles.links} aria-label="Links e redes sociais">
      <nav className={styles.socialLinks} aria-label="Redes sociais">
        <a
          href="mailto:designtechti.dev@icloud.com"
          target="_blank"
          rel="noreferrer"
          aria-label="E-mail"
        >
          <EnvelopeClosedIcon />
        </a>
        <a
          href="https://instagram.com/designtechti.dev"
          target="_blank"
          rel="noreferrer"
          aria-label="Instagram"
        >
          <InstagramLogoIcon />
        </a>
        <a
          href="https://github.com/designtechti490"
          target="_blank"
          rel="noreferrer"
          aria-label="GitHub"
        >
          <GitHubLogoIcon />
        </a>
        <a
          href="https://youtube.com/@designtechti"
          target="_blank"
          rel="noreferrer"
          aria-label="YouTube"
        >
          <VideoIcon />
        </a>
        <a
          href="https://linkedin.com/in/designtechtidev"
          target="_blank"
          rel="noreferrer"
          aria-label="LinkedIn"
        >
          <LinkedInLogoIcon />
        </a>
      </nav>

      <iframe
        className={styles.video}
        src="https://www.youtube.com/embed/8kQcFAxy_4M"
        title="Bem Vindos ao Canal"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        loading="lazy"
      />

      <ul className={styles.linkList}>
        {links.map((link) => (
          <li key={link.name}>
            <a href={link.url} target="_blank" rel="noreferrer">
              {link.icon}
              <span className={styles.linkContent}>
                <strong>{link.name}</strong>
                <span>{link.text}</span>
              </span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  )
}
