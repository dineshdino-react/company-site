import React from 'react';
import './HeroSection.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';
import Fade from 'react-reveal/Fade';
import "animate.css"
function HeroSection({
  lightBg,
  topLine,
  lightText,
  lightTextDesc,
  headline,
  subdiv,
  description,
  buttonLabel,
  img,
  alt,
  imgStart
}) {
  return (
    <>
      <div
        className={lightBg ? 'home__hero-section' : 'home__hero-section darkBg'}
      >
        <div className='container'>
          <div
            className='row home__hero-row'
            style={{
              display: 'flex',
              flexDirection: imgStart === 'start' ? 'row-reverse' : 'row'
            }}  
          >
            <div className='col'>
              <div className='home__hero-text-wrapper'>
                <div className='top-line'>{topLine}</div>
                <h1 className={lightText ? 'heading' : 'heading dark'}>
                 <Fade bottom>
                  <div className="headln ">Building <span className="yel-1">end-to-end digital solutions</span> for start-ups, SMEs & large enterprises</div>
                  </Fade>
                 
                </h1>
                <p
                  className={
                    lightTextDesc
                      ? 'home__hero-subtitle'
                      : 'home__hero-subtitle dark'
                  }
                >
                  
                  {description}

                </p>
                <Link to=''>
                  <Button buttonSize='btn--wide' buttonColor='blue'>
                    {buttonLabel}
                    <FiArrowRight className='Navbar-icon' />
                  </Button>
                </Link>
              </div>
            </div>
            <div className='col'>
              <div className='home__hero-img-wrapper'>
                
                <img src={img} alt={alt} className='home__hero-img' />
                
               
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HeroSection;
