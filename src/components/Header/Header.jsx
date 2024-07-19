import TypeTitle from "./TypeTitle.jsx";
import './Header.css'
import metry from '../../assets/grad-pic.jpg'

const Header = () => {
    const disArray = ['David Lee', 'David-Lee', 'dleete', 'd-lee-te'];

    return(
        <div className = "Title">
            <div className = "imgContainer">
                <img src={metry} alt="metry"/>
            </div>
            <div className = "typo">
                <TypeTitle display={disArray} />
            </div>
            <hr/>
        </div>
    );
};

export default Header;