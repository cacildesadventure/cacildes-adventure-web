import { useTranslation } from "react-i18next";
import Title from "../title/Title";
import "./Features.css";

export default function Features() {
  const { t } = useTranslation();

  return (
    <div className="features-container">
      <Title>{t("FEATURES")}</Title>

      <ul className="list">
        <li>
          <strong>{t("COMBAT_HEAVILY")}</strong>, {t("FEATURING_DODGES")}
        </li>
        <li>
          <strong>{t("THIRTY_PLUS_WEAPONS")}</strong>, {t("RANGING_FROM_ULTRA")}
        </li>
        <li>
          <strong>{t("TWENTY_PLUS_SPELLS")}</strong>, {t("FROM_FIREBALLS_TO")}
        </li>
        <li>
          <strong>{t("BECOME_STRONGER")}</strong>, {t("AND_CHOOSE_WISELY")}
        </li>
        <li>
          <strong>{t("FIGHT_ALONE_OR_ALONGSIDE")}</strong>,{" "}
          {t("WHO_WILL_TAG_ALONG")}
        </li>
        <li>
          <strong>{t("APPEARANCES_MATTER")}</strong>, {t("PEOPLE_WILL_COMMENT")}
        </li>
        <li>
          <strong>{t("DAY_AND_NIGHT_CYCLE")}</strong>,{" "}
          {t("WITH_DIFFERENT_PEOPLE_AND_ENEMIES")}
        </li>
        <li>
          <strong>{t("YOUR_ACTIONS_HAVE_IMPACT")}</strong>,{" "}
          {t("IF_YOU_HAVE_LOWER_REPUTATION")}
        </li>
        <li>
          <strong>{t("BE_WHO_YOU_WANT_TO_BE")}</strong>,{" "}
          {t("YOU_CAN_RENAME_CACILDES")}
        </li>
        <li>
          <strong>{t("EMBARK_ON_NEW_GAME_PLUS")}</strong>,{" "}
          {t("AND_BRING_YOUR_HARD")}
        </li>
        <li>
          <strong>{t("CRAFT_POTIONS")}</strong>,{" "}
          {t("WITH_RECIPES_AND_INGREDIENTS")}
        </li>
        <li>
          <strong>{t("UPGRADE_YOUR_WEAPONS")}</strong>,{" "}
          {t("BY_FINDING_IRON_ORES")}
        </li>
        <li>
          <strong>{t("AND_MORE_IS_COMING")}</strong> {t("WITH_NEW_ADVENTURES")}
        </li>
      </ul>
    </div>
  );
}
