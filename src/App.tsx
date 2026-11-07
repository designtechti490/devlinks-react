import { useEffect, useState } from "react"
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
import avatarLight from "./assets/avatar-light.png"
import avatar from "./assets/avatar.png"
import "./App.css"

export default function App() {
  const [isLight, setIsLight] = useState(false)

  const toggleMode = () => {
    setIsLight(!isLight)
  }

  const links = [
    {
      name: "Portfólio",
      text: "See my portfolio and get a quote",
      url: "https://designtechti-dev.vercel.app/",
      icon: <GlobeIcon className="link-icon" />,
    },
    {
      name: "Instagram",
      text: "Follow me on Instagram",
      url: "https://instagram.com/designtechti.dev",
      icon: <InstagramLogoIcon className="link-icon" />,
    },
    {
      name: "GitHub",
      text: "See my projects",
      url: "https://github.com/designtechti490",
      icon: <GitHubLogoIcon className="link-icon" />,
    },
    {
      name: "YouTube",
      text: "Subscribe into my YouTube channel",
      url: "https://youtube.com/@designtechti",
      icon: <VideoIcon className="link-icon" />,
    },
    {
      name: "LinkedIn",
      text: "Connect with me on LinkedIn",
      url: "https://www.linkedin.com/in/designtechtidev/",
      icon: <LinkedInLogoIcon className="link-icon" />,
    },
    {
      name: "Twitter",
      text: "Humor Updates in 140 characters",
      url: "https://twitter.com/designtechtidev",
      icon: <TwitterLogoIcon className="link-icon" />,
    },
    {
      name: "CodePen",
      text: "See a few of my projects on CodePen",
      url: "https://codepen.io/designtechti_dev",
      icon: <CodeIcon className="link-icon" />,
    },
  ]

  useEffect(() => {
    document.documentElement.classList.toggle("light", isLight)

    return () => {
      document.documentElement.classList.remove("light")
    }
  }, [isLight])

  return (
    <div id="app" className={isLight ? "light" : ""}>
      <div id="container">
        {/* Profile */}
        <div id="profile">
          <img src={isLight ? avatarLight : avatar} alt="Foto de perfil" />
          <h2>@designtechti.dev</h2>
          <h4>Software Analyst</h4>
        </div>

        {/* Switch Mode */}
        <div id="switch" onClick={toggleMode}>
          <button></button>
          <span></span>
        </div>

        {/* Social Links */}
        <div id="social-links">
          <a
            href="mailto:designtechti.dev@icloud.com"
            target="_blank"
            rel="noreferrer"
          >
            <EnvelopeClosedIcon />
          </a>
          <a
            href="https://instagram.com/designtechti.dev"
            target="_blank"
            rel="noreferrer"
          >
            <InstagramLogoIcon />
          </a>
          <a
            href="https://github.com/designtechti490"
            target="_blank"
            rel="noreferrer"
          >
            <GitHubLogoIcon />
          </a>
          <a
            href="https://youtube.com/@designtechti"
            target="_blank"
            rel="noreferrer"
          >
            <VideoIcon />
          </a>
          <a
            href="https://linkedin.com/in/designtechtidev"
            target="_blank"
            rel="noreferrer"
          >
            <LinkedInLogoIcon />
          </a>
        </div>

        {/* YouTube Iframe */}
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/8kQcFAxy_4M"
          title="Bem Vindos ao Canal"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>

        {/* Links */}
        <ul>
          {links.map((link, index) => (
            <li key={index}>
              <a href={link.url} target="_blank" rel="noreferrer">
                {link.icon}
                <span className="link-content">
                  <strong>{link.name}</strong>
                  <p>{link.text}</p>
                </span>
              </a>
            </li>
          ))}
        </ul>

        {/* Footer */}
        <footer>
          Feito com ♥ por{" "}
          <a href="https://designtechti-dev.vercel.app/">Design Tech TI</a>
        </footer>
      </div>
    </div>
  )
}
