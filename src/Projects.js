import Mac from './mac-pic.png';
import { projectInfo } from './Data';
import { useState } from 'react';
import leftArrow from './left-arrow.png';
import rightArrow from './right-arrow.png';
import SkillUsed from './SkillsUsed';
import Github from './github-logo.png';
import ExternalLink from './external-link.png';

export default function Projects() {
  const [ projectIndex, setProjectIndex ] = useState(0);

  const nextProject = () => {
    setProjectIndex(projectIndex + 1);
  }
  const previousProject = () => {
    if (projectIndex === 0) setProjectIndex(3);
    else setProjectIndex(projectIndex - 1);
  }

  return(
    <div id='projects'>
      <div className="bs-title-container">
        <h3>Projects</h3>
        <div className="bs-title-side"></div>
      </div>
      <div className="projects-title">
        <h4>{projectInfo[projectIndex % 4].title}</h4>
      </div>
      <div 
      className='carousel-container'>
        <div className='arrow-container'>
          <button
          onClick={previousProject}
          className='arrow-button'
          >
            <img
            src={leftArrow} width='30rem'/>
          </button>
        </div>
        <div className='carousel'>
        <img src={Mac} width='500rem'/>
        <div className='portfolio-display'>
          <img src={projectInfo[projectIndex % 4].img} width='485rem' />
        </div>
        </div>
        <div
        className='arrow-container'>
          <button
          onClick={nextProject}
          className='arrow-button'
          >
            <img 
            src={rightArrow} width='30rem'/>
          </button>
        </div>
      </div>
      <div className='ext-links'>
        <a href={projectInfo[projectIndex % 4].links.github}
        target='_blank'
        >
          <img src={Github} width="50rem" />
        </a>
        <a href={projectInfo[projectIndex % 4].links.site}
        target='_blank'
        >
          <img src={ExternalLink} width="50rem" />
        </a>
      </div>
      <div>
        <SkillUsed data={projectInfo}
        index= {projectIndex}
        />
      </div>
      <div className="project-desc">
        <p>{projectInfo[projectIndex % 4].description}</p>
      </div>
    </div>
  )
}