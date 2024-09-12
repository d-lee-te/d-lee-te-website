"use client";

import { useState, useEffect, useCallback } from "react";
import Particles, {initParticlesEngine} from "@tsparticles/react";
import { loadFull } from "tsparticles"
import particleConfig from "@/config/particles.json"

export default function ParticleBackground() {
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
    }, [init]);

    const particleInit = useCallback(async (engine) => {
        console.log(engine);
        await loadFull(engine);
    }, []);
    const particleLoaded = useCallback(async (container) => {
        await console.log(container);
    }, []);

    return(
        <Particles
            id='tsparticles'
            init={particleInit}
            loaded={particleLoaded}
            options={particleConfig}
            height='100vh'
            width='100vh'
        />

    );
}