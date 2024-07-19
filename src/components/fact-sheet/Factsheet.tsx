import { useTranslation } from "react-i18next";
import Title from "../title/Title";
import "./Factsheet.css";

export default function Factsheet() {
  const { t } = useTranslation();

  return (
    <div className="factsheet-container">
      <Title>{t("FACTSHEET")}</Title>

      <table cellSpacing={10} className="table">
        <tr>
          <th>{t("NAME")}</th>
          <th>{t("GENRE")}</th>
          <th>{t("SUB_GENRE")}</th>
          <th>{t("AVAILABLE_LANGUAGES")}</th>
        </tr>
        <tr>
          <td>{t("CACILDES_ADVENTURE")}</td>
          <td>{t("ACTION_RPG_SOULSLIKE")}</td>
          <td>{t("ADVENTURE_HIGH_FANTASY")}</td>
          <td>{t("ENGLISH_PORTUGUESE")}</td>
        </tr>
      </table>

      <table cellSpacing={10} className="table">
        <tr>
          {" "}
          <th>{t("PLATFORMS")}</th>
          <th>{t("DEVELOPER")}</th>
          <th>{t("LOCATION")}</th>
          <th>{t("RELEASE_DATE")}</th>
          <th>{t("PRESS_CONTACT")}</th>
        </tr>
        <tr>
          <td>{t("WINDOWS_STEAM")}</td>
          <td>André Fernandes</td>
          <td>Portugal</td>
          <td>27 Apr, 2024</td>
          <td>
            <a
              href="mailto:cacildesadventure@gmail.com"
              style={{ color: "slateblue" }}
            >
              cacildesadventure@gmail.com
            </a>
          </td>
        </tr>
      </table>
    </div>
  );
}
