import React from 'react';
import './HeroSection3.css';
import Fade from 'react-reveal/Fade';
function HeroSection3({
  lightBg,
  topLine,
  lightText,
  lightTextDesc,
  headline,
  
  description,

  roundimg,
  roundDisc,
  bottomDisc,
  content,
  endcontent1,
  endcontent2,
  endcontent3,
  leftDisc,
  rectDisc,
  rectbottom,
  content1,
  leftend1,
  leftend2,
  leftend3,
  leftend4,
  leftend5,
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
                <div className='top-line4'>{topLine}</div>
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
                  <img src={roundimg} />
                  </Fade>
                  <Fade bottom>
                  <div className="top-head-disc">
                    <p className="top-head">{roundDisc}</p>
                    <p className="bottom-disc">{bottomDisc}</p>
                  </div>
                  </Fade>
                  

                </div>
                <Fade bottom>
                <div className="content-disc">{content}</div>
                </Fade>
                
                <div className="end-disc">
                  <Fade bottom>
                  <div> {endcontent1}</div>
                  </Fade>
                  <Fade bottom>
                  <div> {endcontent2}</div>
                  </Fade>
                  <Fade bottom>
                  <div> {endcontent3}</div>
                  </Fade>
                </div>

              </div>
            </div>
            <div className='col1'>
              <div className="round-discription">
                <Fade bottom>
                <img src={leftDisc} />
                </Fade>
               <Fade bottom>
                <div className="top-head-disc">
                  <p className="top-head">{rectDisc}</p>
                  <p className="bottom-disc">{rectbottom}</p>
                </div>
                </Fade>
              </div>
              <Fade bottom>
              <div className="content-disc">{content1}</div>
              </Fade>
              
              <div className="end-disc">
                <Fade bottom>
                  <div> { leftend1}</div>
                  <div> { leftend2}</div>
                  <div> { leftend3}</div>
                  <div> { leftend4}</div>
                  <div> { leftend5}</div>
                  </Fade>
                </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HeroSection3;
