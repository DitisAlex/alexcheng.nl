import React from "react";
import Image from "next/image";
import Link from "next/link";
import sinchenImg from "../../public/assets/projects/sinchen_cms.png";
import { RiRadioButtonFill } from "react-icons/ri";
import Head from "next/head";
const sinchen_cms = () => {
  return (
    <div className="w-full py-16">
      <Head>
        <title>AC Project | Sin Chen CMS</title>
      </Head>
      <div className="w-screen h-[30vh] lg:h-[40vh] relative">
        <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/50 z-10"></div>
        <Image
          className="absolute z-1"
          fill
          objectFit="cover"
          src={sinchenImg}
          alt="sinchen"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-[var(--color-text-dark)] z-10 p-2">
          <h2 className="py-2">Sin Chen CMS</h2>
          <p>
            Website for Sin Chen where customers can view the menu, location and
            latest information. All the content is managed through a Sanity.io
            CMS back-end.
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
            Website made for Sin Chen, a Chinese restaurant located in The
            Netherlands. The goal here was to create a minimalistic and
            responsive website where customers can easily view the menu,
            location and latest information. This design was made with Next.js,
            Tailwind.css and Flowbite components to ensure optimal performance
            and a great user experience.
          </p>
          <p className="py-2 text-[var(--color-text-light)] dark:text-[var(--color-text-dark)]">
            Additionally, the owner wanted to be able to manage all the content
            himself through a CMS back-end since they were used to their
            previous WordPress environment. For this purpose, I utilized
            Sanity.io as the CMS solution, which provides a user-friendly
            interface for content management.
          </p>
          <Link href="/#projects">
            <button className="px-8 py-2 mt-4 mr-4">Back</button>
          </Link>
          <Link href="https://www.sinchen.nl/">
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
                Sanity.io
              </p>
              <p className="text-[var(--color-text-light)] dark:text-[var(--color-text-dark)] py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                TypeScript
              </p>
              <p className="text-[var(--color-text-light)] dark:text-[var(--color-text-dark)] py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                Flowbite
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default sinchen_cms;
