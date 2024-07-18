import { useState, useEffect } from 'react';
import './BioButton.css';


const BioButton = ({ spinTime }) => {
  const [isSpinClockwise, setSpinClockwise] = useState(true); //Sets direction of spin
  const [isSpin, setIsSpinning] = useState(false); //Check if spinning

  const handleClick = () => {
    if (isSpin) return; // Prevent clicking while spinning

    setSpinClockwise(prevIsSpinClockwise => !prevIsSpinClockwise); //Toggle spin direction
    setIsSpinning(true); // Start spinning animation

    setTimeout(() => {
      setIsSpinning(false); // Stop spinning animation after spinTime
    }, spinTime);
  };

  //Don't know if this works
  useEffect(() => {
    if (isSpinClockwise) {
      document.body.classList.add('overflow-visible');
    } else {
      document.body.classList.remove('overflow-visible');
    }
  }, [isSpinClockwise]);

  return (
    <div className="container">
      <button
        className={`spin-button ${isSpinClockwise ? 'clockwise' : 'counter-clockwise'}`}
        onClick={handleClick}

        style={{
          animation: isSpin
            //I need to move this to the css file
            //animation-name, animation-duration, animation-timing-function, animation-delay, animation-iteration-count, animation-direction, animation-fill-mode, animation-play-state, and animation-timeline
            ? `${isSpinClockwise ? 'spin' : 'spin-backwards'} ${spinTime / 1000}s ease-in-out normal both`
            : 'none',
        }}

      >
        hehe<br/>spin
      </button>
      
      {( 
        <div className="textBox">
          <p className={`text ${isSpinClockwise ? 'right-in' : 'left-out'}`}>
            <text>
            I’m David! <br/><br/>
            I’m a graduate from Georgia Tech seeking full-time positions in software engineering and related with aspirations of becoming a full-stack developer.<br/><br/>
            I have a moderate amount of experience with Python with additional light background experience in C, Java, ASM, and others. I’ve also dabbled with Neural Networks and as an extension of that: AI Principles, Deep Learning, and Computer Vision principles. That said, I’m very keen to learn as much as I can, quick to pick up new languages, and a competent learner.<br/><br/>
            In my free time, I like to brainstorm and dissect games into what makes them good, listen to music, and follow esports loosely (Previously an Esports President in both high school and college). I generally love to learn and experience anything, as the vision and ambition I imagine with those skills (obtained or not) drive me.<br/><br/>
            Excited to meet you!

            </text>
          </p>
        </div>
      )}
    </div>
  );
};

export default BioButton;
