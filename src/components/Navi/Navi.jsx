import "./Navi.css"
import documentIcon from '/documenticon.svg'
import Pdf from '../../assets/resume.pdf'

const Navi = () => {
    return(
        <ul className="navigation">
            <li><a href="https://github.com/d-lee-te" target="_blank">
                <div className="iconContainer">
                    <img alt="githubIcon" 
                    src = "https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png" 
                /></div>
            </a></li>
            <li><a href="https://www.linkedin.com/in/d-lee-te/" target="_blank">
                <div className="iconContainer">
                <img alt="linkedinIcon" 
                src = "https://content.linkedin.com/content/dam/me/business/en-us/amp/brand-site/v2/bg/LI-Bug.svg.original.svg" 
                /></div>
            </a></li>
            <li><a href={Pdf} target="_blank">
                <div className="iconContainer">
                <img alt="linkedinIcon" 
                src = {documentIcon} 
                /></div>
            </a></li>
        </ul>
    );
};

export default Navi;