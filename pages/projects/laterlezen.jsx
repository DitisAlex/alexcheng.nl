import React from "react";
import Image from "next/image";
import Link from "next/link";
import laterlezenImg from "../../public/assets/projects/laterlezen.png";
import { RiRadioButtonFill } from "react-icons/ri";

const laterlezen = () => {
  return (
    <div className="w-full py-16">
      <div className="w-screen h-[30vh] lg:h-[40vh] relative">
        <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/50 z-10"></div>
        <Image
          className="absolute z-1"
          fill
          objectFit="cover"
          src={laterlezenImg}
          alt="laterlezen"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-[var(--color-text-dark)] z-10 p-2">
          <h2 className="py-2">LaterLezen</h2>
          <p>Application to bookmark articles on the internet</p>
        </div>
      </div>
      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
        <div className="col-span-4">
          <p className="uppercase text-2xl tracking-widest text-[var(--color-primary)]">
            Project
          </p>
          <h2 className="py-4">Description</h2>
          <p className="py-2 text-[var(--color-text-light)] dark:text-[var(--color-text-dark)]">
            This was a school project for the course DWA, together with a group
            of five developers. Our Product Owner wanted an application to
            bookmark articles on the internet that you read on the daily basis,
            such as: newspapers, e-books, research papers, etc. This application
            needed to stand out from its already existing competitors by having
            features like: a pay-wall bypass, better tagging, support for longer
            text, support for PDF's and ability to pick up the best metadata.
            Besides that, the Product Owner requested this to be both a web
            application and a browser extension.
          </p>
          <p className="py-2 text-[var(--color-text-light)] dark:text-[var(--color-text-dark)]">
            During this project I learned many useful things such as scraping
            metadata. Building an REST API with Express.js, which was able to
            communicate with our MongoDB & Mongoose. And how to setup and
            configure a Google Chrome extension. I also learned how to solve
            advanced data structures while implementing the tagging system.
            These data structures were for example binary trees, in which I used
            recursion to approach the different nodes inside the tree. Last but
            not least, I now know how to do solid end-to-end testing with Jest,
            Puppeteer and Chromium.
          </p>
          <p className="py-2 text-[var(--color-text-light)] dark:text-[var(--color-text-dark)]">
            This was not only one of the biggest projects I have been part of,
            but also one of the most educational ones. I simply enjoyed the
            variety of technologies used to meet all the requirements of our
            Product Owner.
          </p>
          <Link href="/#projects">
            <button className="px-8 py-2 mt-4 mr-4 shadow-md shadow-gray-400 text-[var(--color-text-light)] dark:text-[var(--color-text-dark)] hover:text-[var(--color-highlight)] dark:hover:text-[var(--color-highlight)]">
              Back
            </button>
          </Link>
          <Link href="https://github.com/DitisAlex/HAN-DWA-LaterLezen/">
            <button className="px-8 py-2 mt-4 shadow-md shadow-gray-400 text-[var(--color-text-light)] dark:text-[var(--color-text-dark)] hover:text-[var(--color-highlight)] dark:hover:text-[var(--color-highlight)]">
              Code
            </button>
          </Link>
        </div>
        <div className="col-span-4 md:col-span-1 shadow-lg shadow-gray-400 rounded-xl p-4">
          <div className="p-2">
            <p className="text-center font-bold pb-2">Tech Stack</p>
            <div className="grid grid-cols-1 md:grid-cols-1">
              <p className="text-[var(--color-text-light)] dark:text-[var(--color-text-dark)] py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                React.js
              </p>
              <p className="text-[var(--color-text-light)] dark:text-[var(--color-text-dark)] py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                Express.js
              </p>
              <p className="text-[var(--color-text-light)] dark:text-[var(--color-text-dark)] py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                Node.js
              </p>
              <p className="text-[var(--color-text-light)] dark:text-[var(--color-text-dark)] py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                MongoDB
              </p>
              <p className="text-[var(--color-text-light)] dark:text-[var(--color-text-dark)] py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                Mongoose
              </p>
              <p className="text-[var(--color-text-light)] dark:text-[var(--color-text-dark)] py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                Passport-jwt
              </p>
              <p className="text-[var(--color-text-light)] dark:text-[var(--color-text-dark)] py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                Websockets
              </p>
              <p className="text-[var(--color-text-light)] dark:text-[var(--color-text-dark)] py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                Jest
              </p>
              <p className="text-[var(--color-text-light)] dark:text-[var(--color-text-dark)] py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                Puppeteer
              </p>
              <p className="text-[var(--color-text-light)] dark:text-[var(--color-text-dark)] py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                Chromium
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default laterlezen;
