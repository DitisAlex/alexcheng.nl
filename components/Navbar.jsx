import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineMenu, AiOutlineClose, AiFillMail } from "react-icons/ai";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";
import { useTheme } from "next-themes";

const Navbar = () => {
  const [toggleNav, setToggleNav] = useState(false);
  const handleToggleNav = () => {
    setToggleNav(!toggleNav);
  };

  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const handleChangeTheme = () => {
    if (theme === "light" || theme === "system") setTheme("dark");
    else if (theme === "dark") setTheme("light");
  };

  return (
    <div className="fixed top-0 w-full h-20 shadow-md z-[100] bg-[var(--color-bg-light)] dark:bg-[var(--color-bg-dark)] dark:shadow-gray-400">
      <div className="flex justify-between items-center w-full h-full px-6 mr-4 2xl:px-10">
        <Link href="/">
          <Image
            src="/assets/logo-light.png"
            alt="logo"
            width="100"
            height="100"
            className="hover:scale-125 ease-in duration-300"
          />
        </Link>
        <ul className="hidden md:flex">
          <Link href="/#about">
            <li className="ml-10 text-l uppercase hover:text-[var(--color-highlight)]">
              About Me
            </li>
          </Link>
          <Link href="/#experience">
            <li className="ml-10 text-l uppercase hover:text-[var(--color-highlight)]">
              Experience
            </li>
          </Link>
          <Link href="/#projects">
            <li className="ml-10 text-l uppercase hover:text-[var(--color-highlight)]">
              Projects
            </li>
          </Link>
          <Link href="/#contact">
            <li className="ml-10 text-l uppercase hover:text-[var(--color-highlight)]">
              Contact
            </li>
          </Link>
          <li
            className="ml-10 hover:text-[var(--color-highlight)] hover:scale-110 ease-in duration-300"
            onClick={handleChangeTheme}
          >
            {theme === "light" ? (
              <MdOutlineDarkMode size={25} />
            ) : (
              <MdOutlineLightMode size={25} />
            )}
          </li>
        </ul>
        <div
          onClick={handleToggleNav}
          className="md:hidden rounded-full shadow-md shadow-gray-400 p-3 mr-4 cursor-pointer hover:scale-110 ease-in duration-150"
        >
          <AiOutlineMenu size={20} />
        </div>
      </div>

      <div
        className={
          toggleNav
            ? "md:hidden fixed right-0 top-0 w-full h-screen bg-black/40 ease-in-out duration-300"
            : ""
        }
      >
        <div
          className={
            toggleNav
              ? "fixed right-0 top-0 w-[70%] sm:w-[65%] h-screen bg-[var(--color-bg-light)] dark:bg-[var(--color-bg-dark)] p-10 ease-in duration-300"
              : "fixed right-[-100%] h-screen top-0 p-10 ease-in duration-300"
          }
        >
          <div>
            <div className="flex w-full items-center justify-between border-b border-gray-300 pr-2">
              <Link href="/">
                <Image
                  src="/assets/logo-light.png"
                  alt="logo"
                  width="85"
                  height="85"
                />
              </Link>
              <div className="rounded-full shadow-md shadow-gray-400 p-2 mr-4 cursor-pointer hover:scale-110 ease-in duration-150">
                {theme === "light" ? (
                  <MdOutlineDarkMode onClick={handleChangeTheme} size={20} />
                ) : (
                  <MdOutlineLightMode onClick={handleChangeTheme} size={20} />
                )}
              </div>
              <div className="rounded-full shadow-md shadow-gray-400 p-2 mr-4 cursor-pointer hover:scale-110 ease-in duration-150">
                <AiOutlineClose onClick={handleToggleNav} size={20} />
              </div>
            </div>
            <div className="py-4 flex flex-col ">
              <ul className="uppercase">
                <Link href="/">
                  <li
                    onClick={() => setToggleNav(false)}
                    className="py-4 text-l hover:text-[var(--color-highlight)]"
                  >
                    Home
                  </li>
                </Link>
                <Link href="/#about">
                  <li
                    onClick={() => setToggleNav(false)}
                    className="py-4 text-l hover:text-[var(--color-highlight)]"
                  >
                    About Me
                  </li>
                </Link>
                <Link href="/#experience">
                  <li
                    onClick={() => setToggleNav(false)}
                    className="py-4 text-l hover:text-[var(--color-highlight)]"
                  >
                    Experience
                  </li>
                </Link>
                <Link href="/#projects">
                  <li
                    onClick={() => setToggleNav(false)}
                    className="py-4 text-l hover:text-[var(--color-highlight)]"
                  >
                    Projects
                  </li>
                </Link>
                <Link href="/#contact">
                  <li
                    onClick={() => setToggleNav(false)}
                    className="py-4 text-l hover:text-[var(--color-highlight)]"
                  >
                    Contact
                  </li>
                </Link>
              </ul>
              <div className="pt-40">
                <p className="uppercase tracking-widest text-[var(--color-primary)]">
                  Lets stay in touch!
                </p>
                <div className="flex items-center justify-between my-4 w-full sm:w-[80%]">
                  <Link href="https://github.com/ditisalex">
                    <div className="rounded-full shadow-md shadow-gray-400 p-3 cursor-pointer hover:scale-110 ease-in duration-150">
                      <FaGithub />
                    </div>
                  </Link>
                  <Link href="https://www.linkedin.com/in/ditisalex/">
                    <div className="rounded-full shadow-md shadow-gray-400 p-3 cursor-pointer hover:scale-110 ease-in duration-150">
                      <FaLinkedinIn />
                    </div>
                  </Link>
                  <Link href="mailto:chengalex777@gmail.com">
                    <div className="rounded-full shadow-md shadow-gray-400 p-3 cursor-pointer hover:scale-110 ease-in duration-150">
                      <AiFillMail />
                    </div>
                  </Link>
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
