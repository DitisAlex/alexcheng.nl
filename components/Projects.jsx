import React from "react";
import ProjectItem from "./ProjectItem";

import airbnbPng from "../public/assets/projects/airbnb.png";
import laterlezenPng from "../public/assets/projects/laterlezen.png";
import sinchenpng from "../public/assets/projects/sinchen.png";

const Projects = () => {
  return (
    <div id="projects" className="w-full max-w-[1240px] mx-auto px-2 py-16">
      <p className="uppercase text-2xl tracking-widest text-[var(--color-primary)]">
        Projects
      </p>
      <h2 className="py-4">What Have I Built?</h2>
      <div className="grid md:grid-cols-2 gap-6">
        <ProjectItem
          title="Inside AirBNB"
          toolstack="React.js / Mapbox.js / Charts.js / .NET Core / Azure Services"
          img={airbnbPng}
          url="airbnb"
        />
        <ProjectItem
          title="LaterLezen"
          toolstack="MongoDB / Express / React.js / Node.js / Mongoose / Passport-jwt"
          img={laterlezenPng}
          url="laterlezen"
        />
        <ProjectItem
          title="SinChen"
          toolstack="MongoDB / Express / React.js / Node.js / ReactToPrint"
          img={sinchenpng}
          url="sinchen"
        />
      </div>
    </div>
  );
};

export default Projects;
