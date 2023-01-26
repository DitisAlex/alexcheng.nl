import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineMenu, AiOutlineClose, AiFillMail } from "react-icons/ai";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";

const Navbar = () => {
  const [toggleNav, setToggleNav] = useState(false);
  const handleToggleNav = () => {
    setToggleNav(!toggleNav);
  };
  return (
    <div className="fixed w-full h-20 shadow-xl z-[100]">
      <div className="flex justify-between items-center w-full h-full px-6 mr-4 2xl:px-10 ">
        <Image
          src="/assets/logo-light.png"
          alt="logo"
          width="100"
          height="100"
          className="hover:scale-125 ease-in duration-300"
        />
        <ul className="hidden md:flex">
          <Link href="/">
            <li className="ml-10 text-l uppercase hover:text-[var(--color-highlight)]">
              About Me
            </li>
          </Link>
          <Link href="/">
            <li className="ml-10 text-l uppercase hover:text-[var(--color-highlight)]">
              Experience
            </li>
          </Link>
          <Link href="/">
            <li className="ml-10 text-l uppercase hover:text-[var(--color-highlight)]">
              Projects
            </li>
          </Link>
          <Link href="/">
            <li className="ml-10 text-l uppercase hover:text-[var(--color-highlight)]">
              Contact
            </li>
          </Link>
        </ul>
        <div
          onClick={handleToggleNav}
          className="md:hidden rounded-full shadow-lg shadow-gray-400 p-3 mr-4 cursor-pointer hover:scale-110 ease-in duration-150"
        >
          <AiOutlineMenu size={20} />
        </div>
      </div>

      <div
        className={
          toggleNav
            ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/40 ease-in-out duration-300"
            : ""
        }
      >
        <div
          className={
            toggleNav
              ? "fixed left-0 top-0 w-[70%] sm:w-[65%] h-screen bg-[var(--color-bg)] p-10 ease-in duration-500"
              : "fixed left-[-100%] top-0 p-10 ease-in duration-500"
          }
        >
          <div>
            <div className="flex w-full items-center justify-between border-b border-gray-300">
              <Image
                src="/../public/assets/logo-light.png"
                alt="logo"
                width="85"
                height="85"
              />
              <div className="rounded-full shadow-lg shadow-gray-400 p-2 mr-4 cursor-pointer hover:scale-110 ease-in duration-150">
                <AiOutlineClose onClick={handleToggleNav} size={20} />
              </div>
            </div>
            <div className="py-4 flex flex-col ">
              <ul className="uppercase">
                <Link href="/">
                  <li className="py-4 text-l hover:text-[var(--color-highlight)]">
                    About Me
                  </li>
                </Link>
                <Link href="/">
                  <li className="py-4 text-l hover:text-[var(--color-highlight)]">
                    Experience
                  </li>
                </Link>
                <Link href="/">
                  <li className="py-4 text-l hover:text-[var(--color-highlight)]">
                    Projects
                  </li>
                </Link>
                <Link href="/">
                  <li className="py-4 text-l hover:text-[var(--color-highlight)]">
                    Contact
                  </li>
                </Link>
              </ul>
              <div className="pt-40">
                <p className="uppercase tracking-widest text-[var(--color-primary)] ">
                  Lets stay in touch!
                </p>
                <div className="flex items-center justify-between my-4 w-full sm:w-[80%]">
                  <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-110 ease-in duration-150">
                    <FaGithub />
                  </div>
                  <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-110 ease-in duration-150">
                    <FaLinkedinIn />
                  </div>
                  <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-110 ease-in duration-150">
                    <AiFillMail />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;