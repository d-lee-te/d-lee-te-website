import TypeTitle from "./TypeTitle.jsx";
import './Header.css'
import metry from '../../assets/metry.jpg'

const Header = () => {
    const disArray = ['David Lee', 'David-Lee', 'dleete', 'd-lee-te'];

    return(
        <div className = "Title">
            <div className = "imgContainer">
                <img src={metry} alt="metry"/>
            </div>
            <TypeTitle display={disArray} />
            <hr/>
        </div>
    );
};

export default Header;