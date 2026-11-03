import { useEffect, useState } from "react";
import {
  CodeIcon,
  EnvelopeClosedIcon,
  GitHubLogoIcon,
  GlobeIcon,
  InstagramLogoIcon,
  LinkedInLogoIcon,
  TwitterLogoIcon,
  VideoIcon,
} from "@radix-ui/react-icons";
import avatarLight from "./assets/avatar-light.png";
import avatar from "./assets/avatar.png";
import "./App.css";

export default function App() {
  const [isLight, setIsLight] = useState(false);

  const toggleMode = () => {
    setIsLight(!isLight);
  };

  useEffect(() => {
    document.documentElement.classList.toggle("light", isLight);

    return () => {
      document.documentElement.classList.remove("light");
    };
  }, [isLight]);

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
          <li>
            <a
              href="https://designtechti-dev.vercel.app/"
              target="_blank"
              rel="noreferrer"
            >
              <GlobeIcon className="link-icon" />
              <span className="link-content">
                <strong>Portfólio</strong>
                <p>See my portfolio and get a quote</p>
              </span>
            </a>
          </li>
          <li>
            <a
              href="https://instagram.com/designtechti.dev"
              target="_blank"
              rel="noreferrer"
            >
              <InstagramLogoIcon className="link-icon" />
              <span className="link-content">
                <strong>Instagram</strong>
                <p>Follow me on Instagram</p>
              </span>
            </a>
          </li>
          <li>
            <a
              href="https://github.com/designtechti490"
              target="_blank"
              rel="noreferrer"
            >
              <GitHubLogoIcon className="link-icon" />
              <span className="link-content">
                <strong>GitHub</strong>
                <p>See my projects</p>
              </span>
            </a>
          </li>
          <li>
            <a
              href="https://youtube.com/@designtechti"
              target="_blank"
              rel="noreferrer"
            >
              <VideoIcon className="link-icon" />
              <span className="link-content">
                <strong>YouTube</strong>
                <p>Subscribe to my YouTube channel</p>
              </span>
            </a>
          </li>

          <li>
            <a
              href="https://www.linkedin.com/in/designtechtidev/"
              target="_blank"
              rel="noreferrer"
            >
              <LinkedInLogoIcon className="link-icon" />
              <span className="link-content">
                <strong>LinkedIn</strong>
                <p>Connect with me on LinkedIn</p>
              </span>
            </a>
          </li>
          <li>
            <a
              href="https://twitter.com/designtechtidev"
              target="_blank"
              rel="noreferrer"
            >
              <TwitterLogoIcon className="link-icon" />
              <span className="link-content">
                <strong>Twitter</strong>
                <p>Humor updates in 140 characters</p>
              </span>
            </a>
          </li>
          <li>
            <a
              href="https://codepen.io/designtechti_dev"
              target="_blank"
              rel="noreferrer"
            >
              <CodeIcon className="link-icon" />
              <span className="link-content">
                <strong>CodePen</strong>
                <p>See a few of my projects on CodePen</p>
              </span>
            </a>
          </li>
        </ul>

        {/* Footer */}
        <footer>
          Feito com ♥ por{" "}
          <a href="https://designtechti-dev.vercel.app/">Design Tech TI</a>
        </footer>
      </div>
    </div>
  );
}
