import React from "react";
import Image from "next/image";
import Link from "next/link";
import longstayachterhoekImg from "../../public/assets/projects/longstayachterhoek.png";
import { RiRadioButtonFill } from "react-icons/ri";
import Head from "next/head";
const longstayachterhoek = () => {
  return (
    <div className="w-full py-16">
      <Head>
        <title>AC Project | Longstay Achterhoek</title>
      </Head>
      <div className="w-screen h-[30vh] lg:h-[40vh] relative">
        <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/50 z-10"></div>
        <Image
          className="absolute z-1"
          fill
          objectFit="cover"
          src={longstayachterhoekImg}
          alt="longstayachterhoek"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-[var(--color-text-dark)] z-10 p-2">
          <h2 className="py-2">Longstay Achterhoek</h2>
          <p>
            Website for Longstay Achterhoek, focused on branding/SEO and
            providing information about the company.
          </p>
        </div>
      </div>
      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
        <div className="col-span-4">
          <p className="uppercase text-2xl tracking-widest text-[var(--color-primary)]">
            Project
          </p>
          <h2 className="py-4">Description</h2>
          <p className="py-2 text-[var(--color-text-light)] dark:text-[var(--color-text-dark)]">
            This is a website made for Longstay Achterhoek, a company mainly
            that provides long-term accommodation for international workers in
            the Achterhoek region of The Netherlands. The main focus of this
            project was to create a user-friendly platform that showcases the
            available accommodations and allows potential clients to easily get
            in touch with the company.
          </p>
          <p className="py-2 text-[var(--color-text-light)] dark:text-[var(--color-text-dark)]">
            The stack used for this project includes a combination between
            Next.js for the front-end, Tailwind.css and Flowbite for styling,
            and Email.js for form handling. Besides that I also implemented
            Google Analytics to track user interactions and gather insights for
            future improvements regarding SEO and branding.
          </p>

          <Link href="/#projects">
            <button className="px-8 py-2 mt-4 mr-4">Back</button>
          </Link>
          <Link href="https://www.longstayachterhoek.nl/">
            <button className="px-8 py-2 mt-4">Visit Website</button>
          </Link>
        </div>
        <div className="col-span-4 md:col-span-1 shadow-md shadow-gray-400 rounded-xl p-4">
          <div className="p-2">
            <p className="text-center font-bold pb-2">Tech Stack</p>
            <div className="grid grid-cols-2 md:grid-cols-1">
              <p className="text-[var(--color-text-light)] dark:text-[var(--color-text-dark)] py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                Next.js
              </p>
              <p className="text-[var(--color-text-light)] dark:text-[var(--color-text-dark)] py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                Tailwind.css
              </p>
              <p className="text-[var(--color-text-light)] dark:text-[var(--color-text-dark)] py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                Flowbite
              </p>
              <p className="text-[var(--color-text-light)] dark:text-[var(--color-text-dark)] py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                Email.js
              </p>
              <p className="text-[var(--color-text-light)] dark:text-[var(--color-text-dark)] py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                Google Analytics
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default longstayachterhoek;
