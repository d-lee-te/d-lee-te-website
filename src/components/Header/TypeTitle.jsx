import Typewriter from 'typewriter-effect';

//Decided to move what should be displayed by the typewriter effect to Header.jsx

const TypeTitle = ({ display }) => {
    return(
        <Typewriter options={{
            strings: display,
            delay: 130,
            pauseFor: 3500,
            deleteSpeed: 130,
            autoStart: true,
            loop: true,
        }}  />
    );
};

export default TypeTitle;