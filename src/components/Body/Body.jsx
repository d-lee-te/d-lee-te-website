// import BioButton from "./BioButton/BioButton.jsx";
import { useState, useEffect } from 'react';
import './Body.css';

/*Gutting BioButton until I can repurpose the button into something useful
It's basically decorative rn */

const Body = () => {
    // const spinTime = 1000; // Duration of each spin in milliseconds
    const [ini, startIni] = useState(false);

    useEffect(() => {
        startIni(true);
    }, [])

    return (
        <div className="body">
            <p className = "bioBox">
                I’m David! <br/><br/>
                A CS(Intel/Devices) graduate from Georgia Tech seeking full-time positions in software engineering and related with aspirations of becoming a full-stack developer.<br/><br/>
                I have a moderate amount of experience with Python with additional light background experience in C, Java, ASM, and others. I’ve made my own neural net, and as an extension of that, I've learned or looked into: AI Principles, Deep Learning, and Computer Vision principles. Currently, I am reviewing material from my studies and building projects with new languages.<br/><br/>
                In my free time, I like to brainstorm and dissect games into what makes them enjoyable, listen to music, follow esports loosely (previously an esports president in both high school and college), and learn new skills in any focus as I enjoy learning new things!<br/><br/>
                Excited to meet you!
            </p>
        </div>
    );
};

export default Body;
