import React from "react";
import Image from "next/image";
import Link from "next/link";
import securenotesImg from "../../public/assets/projects/securenotes.png";
import { RiRadioButtonFill } from "react-icons/ri";
import Head from "next/head";
const securenotes = () => {
  return (
    <div className="w-full py-16">
      <Head>
        <title>AC Project | SecureNotes</title>
      </Head>
      <div className="w-screen h-[30vh] lg:h-[40vh] relative">
        <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/50 z-10"></div>
        <Image
          className="absolute z-1"
          fill
          style={{ objectFit: "cover" }}
          src={securenotesImg}
          alt="securenotes"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-[var(--color-text-dark)] z-10 p-2">
          <h2 className="py-2">SecureNotes</h2>
          <p>
            Application to securely send sensitive information to customers.
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
            This was my graduation project for Webbio and HAN. The goal was to
            develop a web application that allows employees to securely send
            sensitive information to their customers, such as government
            agencies. Previously, the data would be sent by e-mail, which
            according to their ISO 27001 certification is considered a security
            risk.
          </p>
          <p className="py-2 text-[var(--color-text-light)] dark:text-[var(--color-text-dark)]">
            Therefore, I developed this application using the T3 stack and
            several AWS services to ensure that the data is encrypted, sent and
            stored securely. For the encryption algorithm I wrote an in-depth
            research document, which concluded in using AES-256. Additionally, I
            implemented a custom authentication system inspired by two-factor
            authentication using NextAuth.js and AWS SES.
          </p>
          <p className="py-2 text-[var(--color-text-light)] dark:text-[var(--color-text-dark)]">
            Lastly, the entire application was deployed using AWS Elastic
            Beanstalk. This was my first time diving into several AWS services,
            so I learned a lot about the flexibility and power of this cloud
            service provider. Besides that I also learned a lot about the
            importance of security, encryption and privacy, as well as how to
            implement these concepts in a web application.
          </p>
          <Link href="/#projects">
            <button className="px-8 py-2 mt-4 mr-4">Back</button>
          </Link>
          <Link href="https://github.com/DitisAlex/SecureNotes">
            <button className="px-8 py-2 mt-4">Code</button>
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
                TypeScript
              </p>
              <p className="text-[var(--color-text-light)] dark:text-[var(--color-text-dark)] py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                tRPC
              </p>
              <p className="text-[var(--color-text-light)] dark:text-[var(--color-text-dark)] py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                Prisma
              </p>
              <p className="text-[var(--color-text-light)] dark:text-[var(--color-text-dark)] py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                NextAuth.js
              </p>
              <p className="text-[var(--color-text-light)] dark:text-[var(--color-text-dark)] py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                Tailwind.CSS
              </p>
              <p className="text-[var(--color-text-light)] dark:text-[var(--color-text-dark)] py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                AWS S3
              </p>
              <p className="text-[var(--color-text-light)] dark:text-[var(--color-text-dark)] py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                AWS SES
              </p>
              <p className="text-[var(--color-text-light)] dark:text-[var(--color-text-dark)] py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                AWS Elastic Beanstalk
              </p>
              <p className="text-[var(--color-text-light)] dark:text-[var(--color-text-dark)] py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                AWS RDS
              </p>
              <p className="text-[var(--color-text-light)] dark:text-[var(--color-text-dark)] py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                Docker
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default securenotes;
