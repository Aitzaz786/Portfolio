import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <section className="min-h-screen flex items-center justify-center bg-[#0f172a] px-6 py-24">
      <div
        data-aos="zoom-in-down"
        className="max-w-5xl w-full mx-auto rounded-3xl p-10 border border-[#3fa4ff]/30 bg-[#05101d]/70 backdrop-blur-2xl text-white  shadow-[0_0_50px_#3fa4ff] transition duration-500 ease-in-out transform hover:scale-105"
      >
        <div className="text-center">
          <div className="mb-6 animate-bounce-slow">
            <img
              src="https://images.hdqwalls.com/download/react-js-logo-no-1920x1200.jpg"
              alt="Profile"
              className="w-36 h-36 mx-auto rounded-full border-4 border-[#3fa4ff] shadow-[0_8px_30px_rgba(63,164,255,0.5)] object-cover transition-transform duration-300 hover:scale-110"
            />
          </div>

          <h2 className="text-4xl md:text-5xl font-extrabold mb-3 text-transparent bg-clip-text bg-gradient-to-r from-[#3fa4ff] to-[#0F4C81] drop-shadow-lg">
            Aitzaz Afzal
          </h2>
          <p className="text-xl font-medium text-blue-100 mb-6 tracking-wide">
            Full Stack Web Developer (MERN)
          </p>

          <p className="text-lg md:text-xl leading-relaxed text-blue-200 max-w-3xl mx-auto">
            I specialize in crafting fast, secure, and scalable applications
            using the{" "}
            <span className="text-green-400 font-semibold">MERN Stack</span>:
            MongoDB, Express, React, and Node.js. I build responsive frontends
            and strong backends for seamless user experiences.
            <br />
            <br />
            Passionate about{" "}
            <span className="text-[#3fa4ff] font-medium">clean code</span>,
            <span className="text-[#3fa4ff] font-medium"> modern UI/UX</span>,
            and{" "}
            <span className="text-[#3fa4ff] font-medium">
              lifelong learning
            </span>
            , I bring focus, creativity, and dedication to every project.
          </p>
        </div>
      </div>

      {/* Custom slow bounce animation */}
    </section>
  );
};

export default About;
