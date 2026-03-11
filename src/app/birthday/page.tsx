"use client";

import { useEffect, useState } from "react";
import Head from "../../components/header";
import Footer from "../../components/footer";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import type { ISourceOptions } from "@tsparticles/engine";
import { loadFull } from "tsparticles"; 

export default function Home() {
    const [init, setInit] = useState(false);

    useEffect(() => {
        initParticlesEngine(async (engine) => {
            await loadFull(engine); 
        }).then(() => {
            setInit(true);
        });
    }, []);

    const options: ISourceOptions = {
        fullScreen: {
            zIndex: -1, 
        },
        particles: {
            color: {
                value: ["#FFFFFF", "#FFd700"],
            },
            move: {
                direction: "bottom",
                enable: true,
                outModes: {
                default: "out",
                },
                size: true,
                speed: { min: 1, max: 3 },
            },
            number: {
                value: 1000,
                density: {
                enable: true,
                },
            },
            opacity: {
                value: 1,
                animation: {
                enable: false,
                startValue: "max",
                destroy: "min",
                speed: 0.3,
                sync: true,
                },
            },
            rotate: {
                value: { min: 0, max: 360 },
                direction: "random",
                move: true,
                animation: {
                enable: true,
                speed: 60,
                },
            },
            tilt: {
                direction: "random",
                enable: true,
                move: true,
                value: { min: 0, max: 360 },
                animation: {
                enable: true,
                speed: 60,
                },
            },
            shape: {
                type: ["circle", "square", "triangle", "polygon"],
                options: {},
            },
            size: {
                value: { min: 2, max: 4 },
            },
            roll: {
                darken: { enable: true, value: 30 },
                enlighten: { enable: true, value: 30 },
                enable: true,
                speed: { min: 15, max: 25 },
            },
            wobble: {
                distance: 30,
                enable: true,
                move: true,
                speed: { min: -15, max: 15 },
            },
        },
    };

    return (
        <>
        <Head></Head>

        {init && <Particles id="tsparticles" options={options} />}

        <div className="[&>*]:mx-auto text-center max-w-[700px] mx-auto relative z-10">
            <br></br>
            <h2 className="text-4xl font-semibold">
                Enactus Sheffield&apos;s 20th Anniversary!
            </h2>
            <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
        </div>

        <Footer></Footer>
        </>
    );
}