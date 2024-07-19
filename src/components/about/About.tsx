import { useTranslation } from "react-i18next";
import AboutCard from "./about-card/AboutCard";
import "./About.css";

export default function About() {
  const { t } = useTranslation();
  return (
    <div className="about">
      <img src="gif1.gif" loading="lazy" />
      <h2>
        <em>"{t("AN_ACTION_RPG_ABOUT")}"</em>
      </h2>

      <AboutCard
        title={`${t("THE_STARTING_POINT")} 🥚`}
        image="about1.jpg"
        direction="left-to-right"
      >
        <p>{t("YOU_ARE_CACILDES")}</p>

        <p>{t("MEANWHILE_YOUR_MOTHER")}</p>

        <p>
          <em style={{ fontSize: ".8rem" }}>
            {t("CHARACTER_CUSTOMIZATION_NOTE")}
          </em>
        </p>
      </AboutCard>

      <AboutCard
        title={`${t("BATTLE_AWAITS")} ⚔️`}
        image="gif2.gif"
        direction="right-to-left"
      >
        <p>{t("WIELD_AN_ARSENAL")}</p>
      </AboutCard>

      <AboutCard
        title={`${t("A_DYNAMIC_WORLD")} 🏰`}
        image="gif3.gif"
        direction="left-to-right"
      >
        <p>{t("EXPLORE_THE_MANY_BRANCHING")}</p>
      </AboutCard>
    </div>
  );
}
