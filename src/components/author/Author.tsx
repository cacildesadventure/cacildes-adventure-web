import "./Author.css";
import Twitter from "../../assets/twitter.svg";
import Linkedin from "../../assets/linkedin.svg";
import About from "../about/about-card/AboutCard";
import Bandcamp from "../../assets/bandcamp.svg";

export default function Author() {
  return (
    <div className="author-container">
      <About
        title="A Game By André Fernandes"
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

          <p>Hey there! I'm André, a software developer from Portugal!</p>
          <p>
            I studied Videogames and Multimedia at ULHT in Lisbon from 2014 to
            2017, and in 2018 I started my professional journey as a frontend
            developer.
          </p>
          <p>
            In 2020, during the COVID lockdowns, I finally got gud and played
            past the graveyard in Dark Souls. I went on to beat all the Souls
            games on a binge. This motivated me to open Unity and start working
            on the RPG of my dreams.
          </p>
          <p>
            Development of Cacildes Adventure began in January 2022, and its
            full version was published in July 2023 on itch.io.
          </p>
          <p>
            I planned to bring the game to Steam, so I spent another year
            rewriting much of the code and improving the game. I finally
            launched it in April 2024.
          </p>
          <p>
            Development has continued in the form of bugfixes and additional
            content, with a major expansion already released and another on the
            horizon!
          </p>

          <p>So... stay tuned! :)</p>
        </div>
      </About>
    </div>
  );
}
