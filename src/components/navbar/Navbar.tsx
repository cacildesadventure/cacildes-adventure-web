import "./Navbar.css";
import Github from "../../assets/github.svg";
import Youtube from "../../assets/youtube.svg";
import Twitter from "../../assets/twitter.svg";
import Steam from "../../assets/steam.svg";
import Discord from "../../assets/discord.svg";
import { useTranslation } from "react-i18next";

export default function Navbar() {
  const { t, i18n } = useTranslation();

  const isEnglish = i18n.language === "en";
  const isPortuguese = i18n.language === "pt";

  return (
    <div className="nav-container">
      <nav className="nav">
        <div className="nav-content">
          <button
            onClick={() => i18n.changeLanguage("en")}
            className={`language-btn ${isEnglish ? "language-active" : ""}`}
          >
            <span>{t("ENGLISH")}</span>
          </button>

          <button
            onClick={() => i18n.changeLanguage("pt")}
            className={`language-btn ${isPortuguese ? "language-active" : ""}`}
          >
            <span>{t("PORTUGUESE")}</span>
          </button>
        </div>
        <div className="nav-content">
          <a
            href="https://store.steampowered.com/app/2617740/Cacildes_Adventure/"
            target="_blank"
            title="Get the game on Steam"
          >
            <button>
              <img src={Steam} width="24" height="24" />
              <span>
                <strong>{t("GET_THE_GAME")}</strong>
              </span>
            </button>
          </a>
          <span className="social-icons">
            <a
              href="https://x.com/CacildesGame"
              target="_blank"
              title="Twitter"
            >
              <img src={Twitter} width="36" height="36" />
            </a>
            <a
              href="https://www.youtube.com/@CacildesAdventure"
              target="_blank"
              title="Youtube"
            >
              <img src={Youtube} width="40" height="40" />
            </a>
            <a
              href="https://github.com/andrefcasimiro/cacildes-adventure"
              target="_blank"
              title="Github"
            >
              <img src={Github} width="40" height="40" />
            </a>
            <a
              href="https://discord.com/invite/JwnZMc27D2"
              target="_blank"
              title="Discord"
            >
              <img src={Discord} width="40" height="40" />
            </a>
          </span>
        </div>
      </nav>
    </div>
  );
}
