import { useTranslation } from "react-i18next";
import "./GetTheGame.css";

export default function GetTheGame() {
  const { t } = useTranslation();

  return (
    <div className="get-the-game">
      <h2> {t("OUT_NOW")}🧐</h2>
      <a
        href="https://store.steampowered.com/app/2617740/Cacildes_Adventure/"
        target="_blank"
        title="Get the game on Steam"
      >
        <button>⚔️ {t("GET_CACILDES_ADVENTURE_ON_STEAM")} ⚔️</button>
      </a>
    </div>
  );
}
