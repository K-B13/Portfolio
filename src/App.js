import AboutMe from './AboutMe';
import './App.css';
import Skills from './Skills';
import ContactInfo from './ContactInfo';
import Interests from './Interests';
import LandingPage from './LandingPage';
import NavBar from './NavBar';
import Projects from './Projects';
import Github from './github-logo.png';
import Linkedin from './linkedin-logo.png';


function App() {
  return (
    <div className="App">
      <aside>
        <NavBar />
      </aside>
      <main>
        <LandingPage />
        <hr />
        <AboutMe />
        <hr />
        <Skills />
        <hr />
        <Projects />
        <hr />
        <Interests />
        <hr />
        <ContactInfo />
        <hr />
      </main>
      <aside>
        <nav>
          <div className='nav-sides'></div>
          <div className='icons'>
            <a href='https://github.com/K-B13?tab=repositories' target='_blank'
            className='nav-one'
            ><img src={Github} width='45rem' /></a>
            <a href='https://www.linkedin.com/in/cezary-karwoski-budd/' target='_blank'
            className='nav-four'
            ><img src={Linkedin} width='45rem' /></a>
          </div>
          <div className='nav-sides'></div>
        </nav>
      </aside>
    </div>
  );
}

export default App;
