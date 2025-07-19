import React, { useEffect, useState } from "react";
import { FaGithub } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const Projects = () => {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    fetch("https://api.github.com/users/Aitzaz786/repos")
      .then((res) => res.json())
      .then((data) => {
        const sorted = data.sort(
          (a, b) => new Date(b.updated_at) - new Date(a.updated_at)
        );
        setRepos(sorted.slice(0, 6));
      });
  }, []);
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section className="min-h-screen px-6 py-20 bg-[#0f172a] text-white">
      <div data-aos="zoom-in-down" className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl sm:text-5xl font-bold mb-14 inline-block border-b-4 border-transparent bg-gradient-to-r from-pink-500 to-yellow-400 bg-clip-text text-transparent">
          My Projects
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {repos.map((repo) => (
            <div
              key={repo.id}
              className="bg-[#05101d]/70 backdrop-blur-md border border-[#3fa4ff]/20 rounded-2xl p-6 shadow-md hover:shadow-[0_0_30px_#3fa4ff] transition duration-300 hover:scale-105 text-left"
            >
              <h3 className="text-xl font-semibold mb-2">{repo.name}</h3>
              <p className="text-blue-100 mb-4 text-sm h-[60px] overflow-hidden">
                {repo.description || "No description provided."}
              </p>
              <a
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-cyan-300 hover:underline"
              >
                <FaGithub /> View on GitHub
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
