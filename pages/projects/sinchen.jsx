import React from "react";
import Image from "next/image";
import Link from "next/link";
import sinchenImg from "../../public/assets/projects/sinchen.png";
import { RiRadioButtonFill } from "react-icons/ri";

const sinchen = () => {
  return (
    <div className="w-full py-16">
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
          <h2 className="py-2">SinChen</h2>
          <p>
            Application to order food and automatically be sent to a Thermal
            Point of Sale Receipt Printer.
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
            This was a personal project that I created for the restaurant where
            I work. Originally, every employee had to take orders by writing
            them on paper and physically walking to the kitchen to communicate
            them. While there are many existing order-taking applications
            available, they can be quite expensive. So, I took it upon myself to
            develop an application that allows employees to conveniently take
            orders using multiple tablets. These orders are then sent to a
            Thermal POS Receipt Printer, eliminating the need for employees to
            waste time walking back and forth.
          </p>
          <p className="py-2 text-[var(--color-text-light)] dark:text-[var(--color-text-dark)]">
            This project was primarily built using the MERN stack. I also
            implemented passport-jwt for user authorization and Higher-Order
            Components (HOC) for handling different roles within the user base.
            For example, employees were given the ability to take orders and
            view order history, while administrators had the additional
            capability to manage the items available for ordering
          </p>
          <p className="py-2 text-[var(--color-text-light)] dark:text-[var(--color-text-dark)]">
            By far, the most challenging aspect of this project was establishing
            communication with the printers. I utilized a POS Printer from Star
            Micronics, but unfortunately, there were no available
            documentations. Additionally, I utilized an npm package called
            'react-to-print' which had printing capabilities, but it was not
            specifically designed for POS printers. After investing numerous
            hours into tweaking and customizing my limited resources, I managed
            to make it work.
          </p>
          <Link href="/#projects">
            <button className="px-8 py-2 mt-4 mr-4">Back</button>
          </Link>
          <Link href="https://github.com/DitisAlex/SinChen">
            <button className="px-8 py-2 mt-4">Code</button>
          </Link>
        </div>
        <div className="col-span-4 md:col-span-1 shadow-md shadow-gray-400 rounded-xl p-4">
          <div className="p-2">
            <p className="text-center font-bold pb-2">Tech Stack</p>
            <div className="grid grid-cols-2 md:grid-cols-1">
              <p className="text-[var(--color-text-light)] dark:text-[var(--color-text-dark)] py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                MongoDB
              </p>
              <p className="text-[var(--color-text-light)] dark:text-[var(--color-text-dark)] py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                Express.js
              </p>
              <p className="text-[var(--color-text-light)] dark:text-[var(--color-text-dark)] py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                React.js
              </p>
              <p className="text-[var(--color-text-light)] dark:text-[var(--color-text-dark)] py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                Node.js
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
                ReactToPrint
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default sinchen;
