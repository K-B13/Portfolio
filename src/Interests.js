import Climbing from './climbing-pic.png'
import Hiking from './hiking-pic.png'
import Snowboarding from './snowboarding-pic.png'
import Travelling from './Travelling-pic.png'

export default function Interests() {
  return (
    <div id='interests'>
      <div className="bs-title-container">
        <h3>Interests</h3>
        <div className="bs-title-side"></div>
      </div>
      <div className="interest-container">
        <div className="interests">
          <div className='int-title'>
            <h4>Bouldering.</h4>
            <img src={Climbing} width='28rem' height='30rem' />
          </div>
          <p className="int-text">
            Bouldering is a big part of my life. I am regularly down at my local bouldering gym with my friends. I have gone on trips to Fontainbleu, Castablanca and South Wales to climb on real rock.
          </p>
        </div>
        <div className="interests">
          <div className='int-title'>
            <h4>Hiking.</h4>
            <img src={Hiking} width='28rem' height='30rem' />
          </div>
          <p className='int-text'>
          Spending so much time indoors and on the computer, I find it very refreshing to get outdoors and take in the beauty of the countryside. I have undertaken and completed the national 3 peaks challenge.
          </p>
        </div>
        <div className="interests">
          <div className='int-title'>
            <h4>Snowboarding.</h4>
            <img src={Snowboarding} width='28rem' height='30rem' />
          </div>
          <p className='int-text'>
            I love the oportunity to get on slopes. I started skiing when I was 6. When I was a bit older made the switch to snowboarding and haven't looked back since.
          </p>
        </div>
        <div className="interests">
          <div className='int-title'>
            <h4>Travelling.</h4>
            <img src={Travelling} width='28rem' height='30rem' />
          </div>
          <p className='int-text'>
            I love visiting new place and seeing new horizons.
          </p>
        </div>
      </div>
    </div>
  )
}