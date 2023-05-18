import React from "react";
import Image from "next/image";
import Link from "next/link";
import { AiFillMail } from "react-icons/ai";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import contactImg from "../public/assets/misc/contact.jpg";

const Contact = () => {
  return (
    <div
      id="contact"
      className="max-w-[1240px] m-auto px-2 py-32 w-full lg:h-screen"
    >
      <p className="uppercase text-2xl tracking-widest text-[var(--color-primary)]">
        Contact
      </p>
      <h2 className="py-4">Wanna Talk?</h2>
      <div className="grid lg:grid-cols-5 gap-8">
        <div className="col-span-3 lg:col-span-2 w-full h-full shadow-md shadow-gray-400 rounded-xl p-4">
          <div className="lg:p-4 h-full">
            <div>
              <Image src={contactImg} className="rounded-xl shadow-md" />
            </div>
            <div>
              <h2 className="py-2">Alex Cheng</h2>
              <p className="uppercase tracking-widest text-[var(--color-primary)]">
                Web Developer
              </p>
              <p className="py-4">
                I am always open to new opportunities and experiences. Whether
                you have a interesting project idea or simply want to connect,
                feel free to reach out to me using the contact information
                provided below. I look forward to hearing from you!
              </p>
            </div>
            <div className="pt-8">
              <p className="uppercase tracking-widest text-[var(--color-primary)]">
                Lets stay in touch!
              </p>
              <div className="flex items-center justify-between p-4">
                <Link href="https://github.com/ditisalex">
                  <div className="rounded-full shadow-md shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-150">
                    <FaGithub size={25} />
                  </div>
                </Link>
                <Link href="https://www.linkedin.com/in/ditisalex/">
                  <div className="rounded-full shadow-md shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-150">
                    <FaLinkedinIn size={25} />
                  </div>
                </Link>
                <Link href="mailto:chengalex777@gmail.com">
                  <div className="rounded-full shadow-md shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-150">
                    <AiFillMail size={25} />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-3 w-full h-auto shadow-md shadow-gray-400 rounded-xl lg:p-4">
          <div className="p-4">
            <form>
              <div className="grid md:grid-cols-2 gap-4 w-full py-2">
                <div className="flex flex-col">
                  <label className="uppercase tracking-widest first-letter:text-sm py-2">
                    Name
                  </label>
                  <input
                    className="border-2 rounded-lg p-3 flex border-gray-300"
                    type="text"
                    required
                  />
                </div>
                <div className="flex flex-col">
                  <label className="uppercase tracking-widest text-sm py-2">
                    E-Mail
                  </label>
                  <input
                    className="border-2 rounded-lg p-3 flex border-gray-300"
                    type="email"
                    required
                  />
                </div>
              </div>
              <div className="flex flex-col py-2">
                <label className="uppercase tracking-widest text-sm py-2">
                  Subject
                </label>
                <input
                  className="border-2 rounded-lg p-3 flex border-gray-300"
                  type="text"
                  required
                />
              </div>
              <div className="flex flex-col py-2">
                <label className="uppercase tracking-widest text-sm py-2">
                  Message
                </label>
                <textarea
                  className="border-2 rounded-lg p-3 border-gray-300"
                  rows="10"
                  type="text"
                  resize="none"
                  required
                />
              </div>
              <button className="uppercase tracking-widest w-full mt-8 p-4">
                Submit Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
