import "./Hero.css";
import profile_img from "../../assets/profile_img.png";
/*import AnchorLink from 'react-anchor-link-smooth-scroll';*/

const Hero = () => {
  return (
    <div id="home" className="hero">
      <img src={profile_img} alt="" />
      <h1>
        <span>Soy Emilio Ramirez,</span> desarrollador full stack junior
        Argentino.
      </h1>
      <p>
        Desarrollador full stack junior de Buenos Aires, ARG en busca de
        oportunidades. Experiencia freelance en proyectos reales. Comprometido
        con el aprendizaje continuo.
      </p>
      <div className="hero-action">
        <div className="hero-connect">
          <a
            className="anchor-link"
            href="https://github.com/Emilio2207"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </div>
        <div className="hero-resume">
          <a
            href="/emilioRamirez_ESP.pdf"
            className="resume-link"
            target="_blank"
            rel="noopener noreferrer"
            download
          >
            Descargar CV
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
