import './About.css';
import theme_pattern from '../../assets/theme_pattern.svg';
/*import profile_img from '../../assets/about_profile.png'; (agregar o no imagen)*/

const About = () => {
  return (
    <div id='about' className='about'>
      <div className='about-title'>
        <h1>Sobre mi</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="about-sections">
        <div className="about-left">
          <img src='' alt="" />
        </div>
        <div className='about-right'>
          <div className="about-para">
            <p>
              Profesional en desarrollo de software con certificación
              Front End | Back End | Full Stack, de la Universidad Tecnológica
              de Buenos Aires, apasionado por el aprendizaje constante y la
              búsqueda activa de retos en el campo tecnológico.
            </p>
            <p>
              Mi pasión por el desarrollo Full Stack se refleja en mi 
              ilusión y dedicación que aporto a cada proyecto.
            </p>
          </div>
          <div className="about-skills">
            <div className="about-skill"><p>HTML & CSS</p><hr style={{ width: "80%" }} /></div>
            <div className="about-skill"><p>JavaScript</p><hr style={{ width: "60%" }} /></div>
            <div className="about-skill"><p>TypeScript</p><hr style={{ width: "60%" }} /></div>
            <div className="about-skill"><p>Sass</p><hr style={{ width: "60%" }} /></div>
            <div className="about-skill"><p>Tailwind</p><hr style={{ width: "70%" }} /></div>
            <div className="about-skill"><p>Bootstrap</p><hr style={{ width: "70%" }} /></div>
            <div className="about-skill"><p>PHP & Laravel</p><hr style={{ width: "60%" }} /></div>
            <div className="about-skill"><p>Python & Django</p><hr style={{ width: "70%" }} /></div>
            <div className="about-skill"><p>React JS</p><hr style={{ width: "70%" }} /></div>
            <div className="about-skill"><p>Next JS</p><hr style={{ width: "60%" }} /></div>
            <div className="about-skill"><p>Express JS</p><hr style={{ width: "70%" }} /></div>
            <div className="about-skill"><p>Nest JS</p><hr style={{ width: "60%" }} /></div>
            <div className="about-skill"><p>Angular</p><hr style={{ width: "70%" }} /></div>
            <div className="about-skill"><p>Vite</p><hr style={{ width: "70%" }} /></div>
            <div className="about-skill"><p>Prisma</p><hr style={{ width: "70%" }} /></div>
            <div className="about-skill"><p>MongoDB</p><hr style={{ width: "60%" }} /></div>
            <div className="about-skill"><p>MySQL</p><hr style={{ width: "70%" }} /></div>
            <div className="about-skill"><p>Firebase</p><hr style={{ width: "60%" }} /></div>
            <div className="about-skill"><p>PostgreSQL</p><hr style={{ width: "60%" }} /></div>
            <div className="about-skill"><p>Git & GitHub</p><hr style={{ width: "80%" }} /></div>
          </div>
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievement">
          <h1>0 - 1</h1>
          <p>AÑOS DE EXPERIENCIA</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>8+</h1>
          <p>PROYECTOS COMPLETADOS</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>A1</h1>
          <p>INGLES</p>
        </div>
      </div>
    </div>
  );
};

export default About;

