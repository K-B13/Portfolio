import Arrow from './start-arrow.png';

export default function LandingPage() {
  return(
    <div id='top-of-page'>
      <div className='landing-page'>
        <div>
          <p className="landing-message">Hi my name is</p>
          <h1>Cezary Karwoski-Budd</h1>
          <h2 className="L-P">Junior Software Engineer</h2>
          <div className='start-arrow'>
          <img src={Arrow} width='45rem' 
          className='arrow'/>
          </div>
          <div className='start-arrow-two'>
          <img src={Arrow} width='45rem' 
          className='arrow-two'/>
          </div>
          <div className='start-arrow-three'>
          <img src={Arrow} width='45rem' 
          className='arrow-three'
          />
          </div>
        </div>
      </div>
    </div>
  )
}