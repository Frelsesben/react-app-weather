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
      <a
        href="https://github.com/Frelsesben/react-app-weather"
        target="_blank"
        rel="noreferrer"
      >
        Open-source code
      </a>{" "}
      by{" "}
      <a
        href="https://www.linkedin.com/in/frida-freiesleben/"
        target="_blank"
        rel="noreferrer"
      >
        Frida Freiesleben
      </a>
    </div>
  );
}
