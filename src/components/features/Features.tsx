import Title from "../title/Title";
import "./Features.css";

export default function Features() {
  return (
    <div className="features-container">
      <Title>FEATURES</Title>

      <ul className="list">
        <li>
          <strong>Combat heavily inspired by the soulslike genre</strong>,
          featuring dodges, parries, jump-attacks, guard-counters,
          posture-breaks, backstabs, one/two-handing weapons, bows, magic—you
          get the idea!
        </li>
        <li>
          <strong>30+ weapons</strong>, ranging from ultra greatswords to
          daggers, bows, magic staves, double scythes, or a bleeding
          mace—there's enough arsenal for any situation!
        </li>
        <li>
          <strong>20+ spells</strong>, from fireballs to raising skeletons from
          the dead, magic has you covered!
        </li>
        <li>
          <strong>Become stronger</strong> and choose wisely from 5 stats:
          Vitality, Endurance, Strength, Dexterity, and Intelligence.
        </li>
        <li>
          <strong>Fight alone or alongside trusty companions</strong> who'll tag
          along and make your journey easier.
        </li>
        <li>
          <strong>Appearances matter!</strong> People will comment if you're
          naked, and you can use certain armors like the thief set to avoid
          fighting certain thieves.
        </li>
        <li>
          <strong>Day and night cycle</strong>, with different people and
          enemies appearing at different times of day.
        </li>
        <li>
          <strong>Your actions have impact</strong>. If you have lower
          reputation, people will lock their doors. Faith/Dark spells also scale
          depending on your character!
        </li>
        <li>
          <strong>Be who you want to be!</strong> You can rename Cacildes,
          change his appearance, gender, and avatar portrait!
        </li>
        <li>
          <strong>Embark on New Game Plus</strong> and bring your hard-earned
          weapons with you!
        </li>
        <li>
          <strong>Craft potions</strong> with recipes and ingredients scattered
          around the world!
        </li>
        <li>
          <strong>Upgrade your weapons</strong> by finding iron ores.
        </li>
        <li>
          <strong>And more is coming!</strong> With new adventures on the
          horizon, you can count on frequent updates with bug fixes and
          additional content every so often!
        </li>
      </ul>
    </div>
  );
}
