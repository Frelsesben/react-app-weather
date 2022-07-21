import "./styles.css";

export default function Footer() {
  return (
    <div className="Footer">
      <lottie-player
        src="https://assets6.lottiefiles.com/packages/lf20_iombyzfq.json"
        id="animation"
        background="transparent"
        speed="0.5"
        loop
        autoplay
      ></lottie-player>
      Coded by{" "}
      <a
        href="https://www.linkedin.com/in/frida-freiesleben/"
        target="_blank"
        rel="noreferrer"
      >
        Frida Freiesleben
      </a>
      <br />
      Open-sourced on{" "}
      <a
        href="https://github.com/Frelsesben/react-app-weather"
        target="_blank"
        rel="noreferrer"
      >
        Github
      </a>
      <br />
      Hosted on{" "}
      <a
        href="https://frelsesben-react-weather.netlify.app/"
        target="_blank"
        rel="noreferrer"
      >
        Netlify
      </a>
    </div>
  );
}
