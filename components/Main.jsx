import React from "react";
import { AiFillMail } from "react-icons/ai";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";

const Main = () => {
  return (
    <div className="w-full h-screen text-center">
      <div className="relative max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center z-[1]">
        <div>
          <h1 className="py-4 text-[var(--color-text-light)] dark:text-[var(--color-text-dark)]">
            Hello, I'm{" "}
            <span className="text-[var(--color-primary)]">Alex Cheng</span>
          </h1>
          <h1 className="py-2 text-[var(--color-text-light)] dark:text-[var(--color-text-dark)]">
            Focussed on{" "}
            <span className="text-[var(--color-secondary)]">
              {" "}
              Web Development
            </span>
          </h1>
          <p className="py-4 text-[var(--color-text-secondary-light)] dark:text-[var(--color-text-secondary-dark)] max-w-[70%] m-auto">
            My current interest is learning web development. In which I
            specialize in front-end frameworks, whilst also learning back-end
            technologies.
          </p>

          <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-150">
              <FaGithub size={25} />
            </div>
            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-150">
              <FaLinkedinIn size={25} />
            </div>
            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-150">
              <AiFillMail size={25} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
