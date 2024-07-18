import Title from "../title/Title";
import "./Factsheet.css";

export default function Factsheet() {
  return (
    <div className="factsheet-container">
      <Title>FACTSHEET</Title>

      <table cellSpacing={10} className="table">
        <tr>
          <th>Name</th>
          <th>Genre</th>
          <th>Sub-Genre</th>
          <th>Available Languages</th>
        </tr>
        <tr>
          <td>Cacildes Adventure</td>
          <td>Action RPG, Soulslike</td>
          <td>Adventure, High-Fantasy, Comedy</td>
          <td>English, Portuguese</td>
        </tr>
      </table>

      <table cellSpacing={10} className="table">
        <tr>
          {" "}
          <th>Platforms</th>
          <th>Developer</th>
          <th>Location</th>
          <th>Release Date</th>
          <th>Press Contact</th>
        </tr>
        <tr>
          <td>Windows (Steam)</td>
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
