import React from "react";
import ProjectItem from "./ProjectItem";

import airbnbPng from "../public/assets/projects/airbnb.png";
import laterlezenPng from "../public/assets/projects/laterlezen.png";
import sinchenPng from "../public/assets/projects/sinchen.png";
import captchaSolver from "../public/assets/projects/captcha_solver.jpg";
import securenotesPng from "../public/assets/projects/securenotes.png";
import agePredictionPng from "../public/assets/projects/ah_age_prediction.png";
import briefbuddyPng from "../public/assets/projects/briefbuddy.png";
import sinchencmsPng from "../public/assets/projects/sinchen_cms.png";
import longstayachterhoekPng from "../public/assets/projects/longstayachterhoek.png";

const Projects = () => {
  return (
    <div id="projects" className="w-full py-32 max-w-[1240px] mx-auto px-2">
      <p className="uppercase text-2xl tracking-widest text-[var(--color-primary)]">
        Projects
      </p>
      <h2 className="py-4">What Have I Built?</h2>
      <div className="grid md:grid-cols-2 gap-8">
        <ProjectItem
          title="AH Age Prediction"
          toolstack="Python / Artificial Intelligence / DeepFace / WebSockets / React.js"
          img={agePredictionPng}
          url="ah_age_prediction"
        />
        <ProjectItem
          title="SecureNotes"
          toolstack="T3 Stack / AWS Services / AES-256 / Docker"
          img={securenotesPng}
          url="securenotes"
        />
        <ProjectItem
          title="Brief Buddy"
          toolstack="Python / Artificial Intelligence / Optical Character Recognition / Natural Language Processing / React.js"
          img={briefbuddyPng}
          url="briefbuddy"
        />
        <ProjectItem
          title="Sin Chen CMS"
          toolstack="Next.js / Sanity.io / Tailwind.css / TypeScript / Flowbite"
          img={sinchencmsPng}
          url="sinchen_cms"
        />
        <ProjectItem
          title="Longstay Achterhoek"
          toolstack="Next.js / Tailwind.cs / Flowbite / SEO Optimization / Google Analytics"
          img={longstayachterhoekPng}
          url="longstayachterhoek"
        />
        <ProjectItem
          title="Sin Chen Order App"
          toolstack="MongoDB / Express.js / React.js / Node.js / ReactToPrint"
          img={sinchenPng}
          url="sinchen"
        />
        <ProjectItem
          title="LaterLezen"
          toolstack="MongoDB / Express.js / React.js / Node.js / Mongoose / Passport-jwt"
          img={laterlezenPng}
          url="laterlezen"
        />
        <ProjectItem
          title="Inside AirBNB"
          toolstack="React.js / Mapbox.js / Charts.js / ASP.NET Core / Azure Services"
          img={airbnbPng}
          url="airbnb"
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
