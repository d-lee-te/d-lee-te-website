import {useEffect, useState} from "react";
import {loadFull} from "tsparticles";
import Particles, {initParticlesEngine} from "@tsparticles/react";
import particlesOptions from "./particles.json";
import './App.css'
import Header from "./components/Header/Header.jsx"
import Navi from "./components/Navi/Navi.jsx"
import Body from "./components/Body/Body.jsx"

const App = () => {
  const [init, setInit] = useState(false);

    useEffect(() => {
        if (init) {
            return;
        }

        initParticlesEngine(async (engine) => {
            await loadFull(engine);
        }).then(() => {
            setInit(true);
        });
    }, []);

  return (
    <div className="App">
      {/* Background based on Preset on tsParticles*/}
    {init && <Particles options={particlesOptions}/>}
    <Header/>
    <Navi/>
    <Body/>
    </div>
  )
}

export default App
