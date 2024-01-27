import React from "react";
import ProjectItem from "./ProjectItem";

import airbnbPng from "../public/assets/projects/airbnb.png";
import laterlezenPng from "../public/assets/projects/laterlezen.png";
import sinchenPng from "../public/assets/projects/sinchen.png";
import captchaSolver from "../public/assets/projects/captcha_solver.jpg";
import securenotesPng from "../public/assets/projects/securenotes.png";

const Projects = () => {
  return (
    <div id="projects" className="w-full py-32 max-w-[1240px] mx-auto px-2">
      <p className="uppercase text-2xl tracking-widest text-[var(--color-primary)]">
        Projects
      </p>
      <h2 className="py-4">What Have I Built?</h2>
      <div className="grid md:grid-cols-2 gap-8">
        <ProjectItem
          title="SecureNotes"
          toolstack="T3 Stack / AWS Services / AES-256 / Docker"
          img={securenotesPng}
          url="securenotes"
        />
        <ProjectItem
          title="Inside AirBNB"
          toolstack="React.js / Mapbox.js / Charts.js / ASP.NET Core / Azure Services"
          img={airbnbPng}
          url="airbnb"
        />
        <ProjectItem
          title="LaterLezen"
          toolstack="MongoDB / Express.js / React.js / Node.js / Mongoose / Passport-jwt"
          img={laterlezenPng}
          url="laterlezen"
        />
        <ProjectItem
          title="SinChen"
          toolstack="MongoDB / Express.js / React.js / Node.js / ReactToPrint"
          img={sinchenPng}
          url="sinchen"
        />
        <ProjectItem
          title="CAPTCHA Solver"
          toolstack="Python / Artificial Intelligence / YOLOv5"
          img={captchaSolver}
          url="captcha_solver"
        />
      </div>
    </div>
  );
};

export default Projects;
