import "./Author.css";
import Twitter from "../../assets/twitter.svg";
import Linkedin from "../../assets/linkedin.svg";
import About from "../about/about-card/AboutCard";
import Bandcamp from "../../assets/bandcamp.svg";
import { useTranslation } from "react-i18next";

export default function Author() {
  const { t } = useTranslation();

  return (
    <div className="author-container">
      <About
        title={t("A_GAME_BY_ANDRE_FERNANDES")}
        image="author.jpg"
        direction={"left-to-right"}
      >
        <div>
          <a
            href="https://x.com/andrefcasimiro"
            target="_blank"
            title="Twitter"
          >
            <img src={Twitter} width="30" height="40" />
          </a>
          <a
            href="https://www.linkedin.com/in/andrefcasimiro/"
            target="_blank"
            title="Linkedin"
          >
            <img src={Linkedin} width="30" height="40" />
          </a>
          <a
            href="https://polygoncity.bandcamp.com/"
            target="_blank"
            title="Bandcamp"
          >
            <img src={Bandcamp} width="30" height="40" />
          </a>

          <p>{t("AUTHOR_1")}</p>
          <p>{t("AUTHOR_2")}</p>
          <p>{t("AUTHOR_3")}</p>
          <p>{t("AUTHOR_4")}</p>
          <p>{t("AUTHOR_5")}</p>
          <p>{t("AUTHOR_6")}</p>
          <p>{t("AUTHOR_7")} 😁</p>
        </div>
      </About>
    </div>
  );
}
