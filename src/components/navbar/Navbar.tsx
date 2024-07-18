import "./Navbar.css";
import Github from "../../assets/github.svg";
import Youtube from "../../assets/youtube.svg";
import Twitter from "../../assets/twitter.svg";
import Steam from "../../assets/steam.svg";
import Discord from "../../assets/discord.svg";

export default function Navbar() {
  return (
    <div className="nav-container">
      <nav className="nav">
        <a
          href="https://store.steampowered.com/app/2617740/Cacildes_Adventure/"
          target="_blank"
          title="Get the game on Steam"
        >
          <button>
            <img src={Steam} width="24" height="24" />
            <strong>Get the game</strong>
          </button>
        </a>
        <a href="https://x.com/CacildesGame" target="_blank" title="Twitter">
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
      </nav>
    </div>
  );
}
