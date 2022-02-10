import React from "react";

export default function Login(props) {
  return (
    <header class="intro">
      <h1 class="intro__hello">
        Heyhoi!
        <span class="emoji">👋</span>
      </h1>

      <h2 class="intro__tagline">
        Ik ben
        <span class="name"> Alex Cheng</span>, een Front-End Web Developer
        die erg gemotiveerd is om mooie interfaces &amp;
        ervaringen te realiseren!
      </h2>

      <h3 class="intro__contact">
        <span>Contact opnemen?</span>
        <span>
          <a
            href="mailto:alexcheng0314@gmail.com"
            target="_blank"
            class="highlight-link"
          >
            alexcheng0314@gmail.com
          </a>
        </span>
      </h3>
    </header>
  );
}
