import AboutCard from "./about-card/AboutCard";
import "./About.css";

export default function About() {
  return (
    <div className="about">
      <img src="gif1.gif" loading="lazy" />
      <h2>
        <em>"An Action RPG about a kid and his quest to join the army"</em>
      </h2>

      <AboutCard
        title="The Starting Point 🥚"
        image="about1.jpg"
        direction="left-to-right"
      >
        <p>
          You are Cacildes*, a young boy eagerly awaiting a letter from the
          King, which will determine your future in the King’s Army.
        </p>

        <p>
          Meanwhile, your mother is worried: many chickens have gone missing.
          Driven by the threat of losing breakfast pancakes and other egg
          delicacies, you set out to find out what is going on.
        </p>

        <p>
          <em style={{ fontSize: ".8rem" }}>
            * Character customization (name, appearance and gender) is available
            since version 1.1
          </em>
        </p>
      </AboutCard>

      <AboutCard
        title="Battle Awaits ⚔️"
        image="gif2.gif"
        direction="right-to-left"
      >
        <p>
          Wield an arsenal of options to conquer your foes, from swords to
          shields, bows and magic; parry, counter-attack, attack from air and
          infuse your weapons with resins, throw bombs and lure enemies into
          ambushes - it's your choice!
        </p>
      </AboutCard>

      <AboutCard
        title="A Dynamic World 🏰"
        image="gif3.gif"
        direction="left-to-right"
      >
        <p>
          Explore the many branching paths of the Slepbone region, a place on
          the brink of war between humans, orcs, and elves. Gather a party of
          companions or venture alone; discover secret bosses and carve out your
          reputation as a cruel or a noble knight of the king.
        </p>
      </AboutCard>
    </div>
  );
}
