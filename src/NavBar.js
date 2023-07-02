import { HashLink } from 'react-router-hash-link';

export default function NavBar(){
  return(
    <nav>
      <div className='nav-sides'></div>
      <div className='nav-items'>
        <HashLink to='#top-of-page'
        className='nav-one'
        >Start</HashLink>
        <HashLink to='#about-me'
        className='nav-two'
        >About Me</HashLink>
        <HashLink to='#skills'
        className='nav-three'
        >Skills</HashLink>
        <HashLink to='#projects'
        className='nav-four'
        >Projects</HashLink>
        <HashLink to='#interests'
        className='nav-five'
        >Interests</HashLink>
        <HashLink to='#contact-info'
        className='nav-six'
        >Contact Info</HashLink>
      </div>
      <div className='nav-sides'></div>
    </nav>
  )
}