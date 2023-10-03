import React from "react";
import htmlImg from '../images/skills/html.png';
import cssImg from '../images/skills/css.png';
import javascriptImg from '../images/skills/javascript.png';
import bootstrapImg from '../images/skills/bootstrap.png';
import gitImg from '../images/skills/git.png';
import githubImg from '../images/skills/github.png';
import reactImg from '../images/skills/reactjs.svg';
import writingImg from '../components/images/interests/writing.svg';
import musicImg from '../components/images/interests/music.svg';
import readingImg from '../components/images/interests/reading.svg';
import selfDevImg from '../components/images/interests/self-development.svg';
import basketballImg from '../components/images/interests/basketball.svg';
import moviesImg from '../components/images/interests/movies.svg';
import programmingImg from '../components/images/interests/programming.svg';
import peaceImg from '../components/images/interests/calm-atmosphere.svg';

const AboutMe = () => {
  return(
    <>
        <h4>ABOUT</h4>
        <h2>LEARN MORE ABOUT ME</h2>
        <h3>Front-end Developer</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur aperiam id voluptatem ipsam unde, a sint ab labore voluptates odit, voluptatibus porro atque soluta ducimus ea est adipisci voluptate quo dignissimos nam rem. </p>
        <p>Qui est inventore incidunt, et illo, ea unde ut deleniti exercitationem necessitatibus sunt veniam amet esse beatae ad voluptatem tempore, earum doloribus repellendus placeat blanditiis quae. Voluptatum, perferendis, sequi fugit sunt voluptates sed fuga possimus accusantium odio excepturi iusto laboriosam cum recusandae dolore, officia reprehenderit aspernatur hic est exercitationem vitae provident. </p>
        <p>Quae soluta commodi facere neque at obcaecati. Architecto sint autem beatae placeat optio nam commodi consequuntur nemo, asperiores reiciendis laborum illo pariatur aliquid ipsam perferendis quis voluptatum? Expedita distinctio dolor eligendi, reiciendis sit blanditiis possimus debitis beatae delectus esse! Vel quam nobis necessitatibus tempore quidem voluptate temporibus dolorem consequuntur iure doloremque perferendis.</p>
    </>
  )
}

const Skills = () => {
  return (
    <>
      <h4 className="title">SKILLS</h4>
      <div className="skill-content">
        <div>
          <img src={htmlImg} alt="html logo"/>
          <p>HTML</p>
        </div>
        <div>
          <img src={cssImg} alt="css logo"/>
          <p>CSS</p>
        </div>
        <div>
          <img src={javascriptImg} alt="javascript logo"/>
          <p>JavaScript</p>
        </div>
        <div>
          <img src={bootstrapImg} alt="bootstrap logo"/>
          <p>Bootstrap</p>
        </div>
        <div>
          <img src={reactImg} alt="react logo"/>
          <p>React</p>
        </div>
        <div>
          <img src={gitImg} alt="git logo"/>
          <p>Git</p>
        </div>
        <div>
          <img src={githubImg} alt="github logo"/>
          <p>GitHub</p>
        </div>
      </div>
    </>
  )
}

const Interest = () => {
  return (
    <>
      <h4 class="title">INTERESTS</h4>
      <div className="interest-content">
        <div>
          <img src={writingImg} alt="writing img"/>
          <h3>Writing</h3>
        </div>
        <div>
          <img src={musicImg} alt="music img"/>
          <h3>Music</h3>
        </div>
        <div>
          <img src={readingImg} alt="reading img"/>
          <h3>Reading</h3>
        </div>
        <div>
          <img src={selfDevImg} alt="self development img"/>
          <h3>Self Development</h3>
        </div>
        <div>
          <img src={basketballImg} alt="basketball img"/>
          <h3>BasketBall</h3>
        </div>
        <div>
          <img src={moviesImg} alt="movies img"/>
          <h3>Movies</h3>
        </div>
        <div>
          <img src={programmingImg} alt="programming img"/>
          <h3>Programming</h3>
        </div>
        <div>
          <img src={peaceImg} alt="peace img"/>
          <h3>Calm Atmosphere</h3>
        </div>
      </div>
    </>
  )
}

const Services = () => {
  return (
    <>
      <h4 className="title">SERVICES</h4>
    </>
  )
}

const About = () => {
  return (
    <>
      <div className='about-container'>
        <AboutMe/>
        <Skills/>
        <Interest/>
        <Services/>
      </div>
    </>
    
  )
}

export default About;