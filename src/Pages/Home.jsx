import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import NET from "vanta/dist/vanta.net.min";
import { ReactTyped } from "react-typed";
import Layout from "../Components/Layout";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import Fotter from "./Fotter";

const Home = () => {
  const vantaRef = useRef(null);
  const [vantaEffect, setVantaEffect] = useState(null);

  useEffect(() => {
    if (!vantaEffect && vantaRef.current) {
      setVantaEffect(
        NET({
          el: vantaRef.current,
          THREE: THREE,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          scale: 1.0,
          scaleMobile: 1.0,
          color: 0x3fa4ff,
          backgroundColor: 0x000000,
        })
      );
    }

    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return (
    <div className="w-full">
      <div
        ref={vantaRef}
        className="h-screen w-full text-white  flex items-center justify-center"
      >
        <div className="absolute top-10 w-full z-10">
          <Layout />
        </div>

        <div className="relative z-10 px-4 text-center">
          <p className="text-6xl py-5 font-bold">FULL STACK WEB DEVELOPER</p>
          <h1 className="text-3xl md:text-3xl font-bold">
            I am a{" "}
            <ReactTyped
              strings={[
                "Full Stack Web Developer",
                "MERN Stack Specialist",
                "React.js & Node.js Expert",
              ]}
              typeSpeed={60}
              backSpeed={40}
              loop
            />
          </h1>
        </div>
      </div>

      <div id="about">
        <About />
      </div>
      <div id="skills">
        <Skills />
      </div>
      <div id="projects">
        <Projects />
      </div>
      <div id="fotter">
        <Fotter />
      </div>
    </div>
  );
};

export default Home;
