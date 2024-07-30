import { useState, useEffect } from 'react';
import './BioButton.css';


const BioButton = ({ spinTime }) => {
  const [isSpinClockwise, setSpinClockwise] = useState(true);
  const [isSpin, setIsSpinning] = useState(false);

  const handleClick = () => {
    if (isSpin) return; // Prevent clicking while spinning

    setSpinClockwise(prevIsSpinClockwise => !prevIsSpinClockwise); // Toggle spin direction
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
            I’m a CS(Intel/Devices) graduate from Georgia Tech seeking full-time positions in software engineering and related with aspirations of becoming a full-stack developer.<br/><br/>
            I have a moderate amount of experience with Python with additional light background experience in C, Java, ASM, and others. I’ve made my own Neural Net, and as an extension of that, I've learned or looked into: AI Principles, Deep Learning, and Computer Vision principles. Currently, I am reviewing material from my studies and building projects with new languages.<br/><br/>
            In my free time, I like to brainstorm and dissect games into what makes them enjoyable, listen to music, follow esports loosely (Previously an Esports President in both high school and college), and learn new skills in any focus as I enjoy learning new things!<br/><br/>
            Excited to meet you!

            </text>
          </p>
        </div>
      )}
    </div>
  );
};

export default BioButton;
