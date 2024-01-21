import react from 'react';
import './HeroSection4.scss';
import Fade from 'react-reveal/Fade';
import { FiArrowRight } from 'react-icons/fi';
import { Button } from './Button';
function HeroSection4({
  lightBg,
  topLine,
  lightText,
  lightTextDesc,
  headline,
  description,
  img1,
  img2,
  img3,
  img4,
  rect1name,
  rect2name,
  rect3name,
  rect4name,
  crickdisc,
  button1,
  button2,
  button3,
  button4,
  buttonlabel,

}) {
  return (
    <>
      <div
        className={lightBg ? 'home__hero-section4' : 'home__hero-section4 darkBg'}
      >
        <div className='container'>
          <div
            className='row home__hero-row'

          >
            <div className='col'>
              <div className='home__hero-text-wrapper'>
                <Fade bottom>
                  <div className='top-line1'>{topLine}</div>
                </Fade>

                <Fade bottom>
                  <h1 className={lightText ? 'heading1' : 'heading1 dark1'}>
                    {headline}
                  </h1>
                </Fade>

                <Fade bottom>
                  <p
                    className={
                      lightTextDesc
                        ? 'home__hero-subtitle2'
                        : 'home__hero-subtitle dark'
                    }
                  >
                    {description}
                  </p>
                </Fade>
                <Fade bottom>
                  <div className="image">
                    <img src={img1} />
                  </div>
                </Fade>
                <Fade bottom>
                  <div className="cric">
                    {rect1name}
                  </div>
                </Fade>
                <div className="discription-cric">
                  <Fade bottom>
                    {crickdisc}
                  </Fade>
                  <div className="divbuttons">
                    <Fade bottom>
                      <Button buttonSize='btn--medium' buttonColor='blue'>
                        {button1}
                      </Button>
                      <Button buttonSize='btn--medium' buttonColor='blue'>
                        {button2}
                      </Button>
                      <Button buttonSize='btn--medium' buttonColor='blue'>
                        {button3}
                      </Button>
                      <Button buttonSize='btn--medium' buttonColor='blue'>
                        {button4}
                      </Button>
                      <div className="top-head-disc">
                      </div>
                    </Fade>
                  </div>

                </div>


                <Fade bottom>
                  <div className="image1">
                    <img src={img2} />
                  </div>
                </Fade>
                <Fade bottom>
                  <div className="cric">
                    {rect2name}
                  </div>
                </Fade>
                <div className="discription-cric">
                  <Fade bottom>
                    {description}
                  </Fade>
                  <div className="divbuttons">
                    <Fade bottom>
                      <Button buttonSize='btn--medium' buttonColor='blue'>
                        {button1}
                      </Button>
                      <Button buttonSize='btn--medium' buttonColor='blue'>
                        {button2}
                      </Button>
                      <Button buttonSize='btn--medium' buttonColor='blue'>
                        {button3}
                      </Button>
                      <Button buttonSize='btn--medium' buttonColor='blue'>
                        {button4}
                      </Button>
                      <div className="top-head-disc">
                      </div>
                    </Fade>
                  </div>

                </div>


                <Fade bottom>
                  <div className="content-disc"></div>
                </Fade>

                <div className="end-disc">
                  <Fade bottom>

                  </Fade>
                  <Fade bottom>

                  </Fade>
                  <Fade bottom>

                  </Fade>
                </div>

              </div>
            </div>
            <div className='col1'>


              <Fade bottom>
                <div className="image2">
                  <img src={img3} />
                </div>
              </Fade>
              <Fade bottom>
                <div className="cric">
                  {rect3name}
                </div>
              </Fade>
              <div className="discription-cric">
                <Fade bottom>
                  {description}
                </Fade>
                <div className="divbuttons">
                  <Fade bottom>
                    <Button buttonSize='btn--medium' buttonColor='blue'>
                      {button1}
                    </Button>
                    <Button buttonSize='btn--medium' buttonColor='blue'>
                      {button2}
                    </Button>
                    <Button buttonSize='btn--medium' buttonColor='blue'>
                      {button3}
                    </Button>
                    <Button buttonSize='btn--medium' buttonColor='blue'>
                      {button4}
                    </Button>
                    <div className="top-head-disc">
                    </div>
                  </Fade>
                </div>

                <Fade bottom>
                  <div className="image1">
                    <img src={img4} />
                  </div>
                </Fade>
                <Fade bottom>
                  <div className="cric">
                    {rect4name}
                  </div>
                </Fade>
                <div className="discription-cric">
                  <Fade bottom>
                    {description}
                  </Fade>
                  <div className="divbuttons">
                    <Fade bottom>
                      <Button buttonSize='btn--medium' buttonColor='blue'>
                        {button1}
                      </Button>
                      <Button buttonSize='btn--medium' buttonColor='blue'>
                        {button2}
                      </Button>
                      <Button buttonSize='btn--medium' buttonColor='blue'>
                        {button3}
                      </Button>
                      <Button buttonSize='btn--medium' buttonColor='blue'>
                        {button4}
                      </Button>
                      <div className="top-head-disc">
                      </div>
                    </Fade>
                  </div>

                </div>
                
              </div>
              
            </div>
            
          </div>
          <Fade bottom>
           <div className="btnwide">
           <Button buttonSize='btn--wide' buttonColor='yellow'>
                    {buttonlabel}
                    <FiArrowRight className='Navbar-icon1' />
                  </Button>
           </div>
          
                  </Fade>
        </div>
      </div>
    </>
  );
}
export default HeroSection4;