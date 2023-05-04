import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <div id="about" className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-2xl tracking-widest text-[var(--color-primary)]">
            About Me
          </p>
          <h2 className="py-4">Who Am I?</h2>
          <p className="py-2 text-[var(--color-text-light)] dark:text-[var(--color-text-dark)]">
            At a very young age I realised I had an interest for working with
            computers and technology in general. So after I finished secondary
            school, at the age of 16, I immediately started my study "HBO-ICT"
            at the HAN University of Applied Sciences.
          </p>
          <p className="py-2 text-[var(--color-text-light)] dark:text-[var(--color-text-dark)]">
            In my free time I like to be in the gym, playing video games and
            ofcourse spending my time to program, as I am keen on learning new
            things everday!
          </p>
          <p className="py-2 text-[var(--color-text-light)] dark:text-[var(--color-text-dark)] underline cursor-pointer">
            Click here to check some of my work!
          </p>
        </div>
        <div>
          <Image
            src="/assets/logo-light.png"
            alt="logo"
            width="500"
            height="500"
            className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-110 ease-in duration-300"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
