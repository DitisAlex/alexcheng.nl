import React from "react";
import Image from "next/image";
import Link from "next/link";

import selfieImg from "./../public/assets/misc/selfie.jpg";

const About = () => {
  return (
    <div id="about" className="w-full md:h-screen p-2 flex items-center py-32">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-2xl tracking-widest text-[var(--color-primary)]">
            About Me
          </p>
          <h2 className="py-4">Who Am I?</h2>
          <p className="py-2 text-[var(--color-text-light)] dark:text-[var(--color-text-dark)]">
            From a young age, I’ve been fascinated by technology, which led me
            to study HBO-ICT at the HAN University of Applied Sciences. During
            my studies, I discovered a passion for web development and the
            creativity it brings through problem-solving and innovation.
          </p>
          <p className="py-2 text-[var(--color-text-light)] dark:text-[var(--color-text-dark)]">
            After completing my Bachelor’s degree, I began a Master’s in Applied
            Artificial Intelligence in Amsterdam, with the ambition to combine
            AI with web development. My focus is on exploring how technologies
            like large language models and computer vision can create smarter,
            more adaptive web applications.
          </p>
          <p className="py-2 text-[var(--color-text-light)] dark:text-[var(--color-text-dark)]">
            Besides that, in my free time, I enjoy activities such as going to
            the gym, playing video games, and, of course, dedicating time to
            programming. I am always eager to learn new things every day!
          </p>
          <Link href="/#projects">
            <p className="py-2 text-[var(--color-text-light)] dark:text-[var(--color-text-dark)] underline cursor-pointer hover:text-[var(--color-highlight)] dark:hover:text-[var(--color-highlight)]">
              Click here to check some of my work!
            </p>
          </Link>
        </div>
        <div className="py-20 md:py-0">
          <Image
            src={selfieImg}
            alt="logo"
            width="500"
            height="500"
            className="w-3/4 md:w-full h-auto m-auto shadow-lg shadow-gray-400 rounded-full flex items-center justify-center p-4 hover:scale-110 ease-in duration-300"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
