import Title from "../../title/Title";
import "./AboutCard.css";

interface Props {
  title: string;
  image: string;
  children: React.ReactNode;
  direction: "left-to-right" | "right-to-left";
}

export default function AboutCard({
  title,
  image,
  children,
  direction = "left-to-right",
}: Props) {
  return (
    <div className="about-container">
      <div
        className="image-and-text"
        style={{
          flexFlow: direction === "left-to-right" ? "row" : "row-reverse",
          borderRight:
            direction === "left-to-right" ? "1px solid slateblue" : "none",
          borderLeft:
            direction === "right-to-left" ? "1px solid slateblue" : "none",
        }}
      >
        <img loading="lazy" className="about-image" src={image} />
        <div className="description">
          <Title>{title}</Title>

          {children}
        </div>
      </div>
    </div>
  );
}
