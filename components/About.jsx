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
            At a very young age, I realized my interest in working with
            computers and technology in general. So, right after finishing
            secondary school at the age of 16, I immediately started studying
            "HBO-ICT" at the HAN University of Applied Sciences.
          </p>
          <p className="py-2 text-[var(--color-text-light)] dark:text-[var(--color-text-dark)]">
            During this time, I have learned various technologies, but one has
            truly stood out to me: web development. I simply love that this
            career is always centered around creative problem-solving and
            continuous innovation.
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
