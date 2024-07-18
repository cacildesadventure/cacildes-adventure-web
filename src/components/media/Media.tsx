import Separator from "../separator/Separator";
import Title from "../title/Title";
import "./Media.css";

export default function Media() {
  return (
    <div className="media-container">
      <Title>MEDIA</Title>

      <div className="media-content">
        <h3>~ VIDEOS ~</h3>
        <div className="youtube-video">
          <p>
            Official Trailer
            <br />
            <em style={{ fontSize: "0.6rem", textTransform: "none" }}>
              showcasing the game in July 2023, it has since improved and some
              maps shown here have changed significantly
            </em>
          </p>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/-5OSzo38Cgw?si=SSstOpnPcGQXFGpz"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
        <div className="youtube-video">
          <p>Teaser by me</p>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/0a5ICpiMVs8?si=5dRS6N2wBOnxkM_C"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>

        <div className="youtube-video">
          <p>
            Teaser by my girlfriend,
            <br />
            <em style={{ fontSize: "0.6rem", textTransform: "none" }}>
              you can tell the difference because she actually knows what she's
              doing
            </em>
          </p>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/85H4v9A6r7A?si=8RigxxD6fa--u0Ax"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>

        <div className="youtube-video">
          <p>
            Berserk-Tribute Boss Fight
            <br />
          </p>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/aUaS23l6CYQ?si=1B8SIJmWX9IVNomk"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>

          <Separator />

          <h3>~ IMAGES ~</h3>

          <div className="media-grid">
            {[
              "media1.jpg",
              "media2.jpg",
              "media3.jpg",
              "media4.jpg",
              "media5.jpg",
              "media6.jpg",
              "media7.jpg",
              "media8.jpg",
              "media9.jpg",
              "media10.jpg",
              "media11.jpg",
              "media12.jpg",
              "media13.jpg",
              "media14.jpg",
              "media15.jpg",
              "media16.jpg",
              "media17.jpg",
              "media18.jpg",
              "media19.jpg",
              "media20.jpg",
              "media21.jpg",
              "media22.jpg",
              "media23.jpg",
              "media24.jpg",
              "media25.jpg",
              "media26.jpg",
              "media27.jpg",
              "media28.jpg",
              "media29.jpg",
              "media30.jpg",
              "media31.jpg",
              "media32.jpg",
              "media33.jpg",
              "media34.jpg",
              "media35.jpg",
            ].map((image, index) => (
              <a href={image} target="_blank">
                <img key={index} src={image} width="250" loading="lazy" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
