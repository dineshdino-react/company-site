import React from 'react';
import './HeroSection5.scss';
import Fade from 'react-reveal/Fade';
function HeroSection5({
  lightBg,
  topLine,
  lightText,
  lightTextDesc,
  headline,
  subdiv,
  description,
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img1disc,
  img2disc,
  img3disc,
  img4disc,
  img5disc,
  img6disc,
}) {
  return (
    <>
      <div
        className={lightBg ? 'home__hero-section3' : 'home__hero-section3 darkBg'}
      >
        <div className='container'>
          <div
            className='row home__hero-row'

          >
            <div className='col'>
              <div className='home__hero-text-wrapper'>
                <Fade bottom>
                <div className='top-line2'>{topLine}</div>
                </Fade>

                <Fade bottom>
                <h1 className={lightText ? 'heading' : 'heading dark'}>
                  {headline}
                </h1>
                </Fade>
              <Fade bottom>
                <p
                  className={
                    lightTextDesc
                      ? 'home__hero-subtitle'
                      : 'home__hero-subtitle dark'
                  }
                >
                  {description}
                </p>
                </Fade>

                <div className="round-discription">
                  <Fade bottom>
                 
                  </Fade>
                  <Fade bottom>
                  <div className="top-head-disc">
                 
                  </div>
                  </Fade>
                  

                </div>
                <Fade bottom>
                <div className="content-disc"></div>
                </Fade>
                
                

              </div>
            </div>
            <div className='col2'>
              
                <div className="section5images">
                    <div className="section5-top">
                    <div className="imagepack">
                <Fade bottom>
               <img src={img1} />
               <p className="image-discription">{img1disc}</p>
                </Fade>
                </div>
                
               <div className="imagepack">
               <Fade bottom>
               <img src={img2} />
               <p className="image-discription">{img2disc}</p>
                </Fade>
               </div>
                
               <div className="imagepack">
               <Fade bottom>
               <img src={img3} />
               <p className="image-discription">{img3disc}</p>
                </Fade>
               </div>
                    </div>
                
                    <div className="section5-top">
                    <div className="imagepack">
                <Fade bottom>
               <img src={img4} />
               <p className="image-discription">{img4disc}</p>
                </Fade>
                </div>
                
               <div className="imagepack">
               <Fade bottom>
               <img src={img5} />
               <p className="image-discription">{img5disc}</p>
                </Fade>
               </div>
                
               <div className="imagepack">
               <Fade bottom>
               <img src={img6} />
               <p className="image-discription">{img6disc}</p>
                </Fade>
               </div>
                    </div>




                </div>
               
              
              <Fade bottom>
              <div className="content-disc"></div>
              </Fade>
              
              <div className="end-disc">
               
                </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HeroSection5;
