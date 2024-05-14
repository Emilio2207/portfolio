import './MyWork.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import mywork_data from '../../assets/mywork_data';
import arrow_icon from '../../assets/arrow_icon.svg';

const MyWork = () => {
  return (
    <div id='work' className='mywork'>
      <div className='mywork-title'>
        <h1>Proyectos</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className='mywork-container'>
        {mywork_data.map((work, index) => {
          return (
            <a href={work.w_link} key={index} target="_blank" rel="noopener noreferrer">
              <img key={index} src={work.w_img} alt='' />
            </a>
          );
        })}
      </div>
      <div className='mywork-showmore'>
        <a href="https://github.com/Emilio2207?tab=repositories" target="_blank" rel="noopener noreferrer">
          <p>Codigos fuentes</p>
        </a>
        <img src={arrow_icon} alt="" />
      </div>
    </div>
  );
};

export default MyWork;
