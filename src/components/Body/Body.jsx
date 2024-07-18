import BioButton from "./BioButton/BioButton.jsx";

const Body = () => {
    const spinTime = 1000; // Duration of each spin in milliseconds

    return (
        <div className="body-container">
            <BioButton spinTime={spinTime} />
        </div>
    );
};

export default Body;
