import "./Teaser.css";

export default function Teaser() {
  return (
    <div className="teaser-container">
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/85H4v9A6r7A?si=TXEOigyvcTSNEX3b"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>
  );
}
