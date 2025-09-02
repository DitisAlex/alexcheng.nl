import React from "react";
import Image from "next/image";
import Link from "next/link";
import agePredictionPng from "../../public/assets/projects/ah_age_prediction.png";
import { RiRadioButtonFill } from "react-icons/ri";
import Head from "next/head";

const ah_age_prediction = () => {
  return (
    <div className="w-full py-16">
      <Head>
        <title>AC Project | AH Age Prediction</title>
      </Head>
      <div className="w-screen h-[30vh] lg:h-[40vh] relative">
        <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/50 z-10"></div>
        <Image
          className="absolute z-1"
          fill
          style={{ objectFit: "cover" }}
          src={agePredictionPng}
          alt="ah_age_prediction"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-[var(--color-text-dark)] z-10 p-2">
          <h2 className="py-2">AH Age Prediction</h2>
          <p>
            An application for self-checkout systems in supermarkets that
            leverages machine learning to perform customer age estimation.
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
            This group project for the MAAI course focused on computer vision. I
            built an application for self-checkout systems in supermarkets that
            automatically estimates customer age, reducing the time and effort
            employees spend on manual checks.
          </p>
          <p className="py-2 text-[var(--color-text-light)] dark:text-[var(--color-text-dark)]">
            When a product requiring age verification is scanned, the system
            captures an image of the customer and estimates their age using a
            pre-trained model, DeepFace, optimized on the UTKFace dataset. If
            the estimated age is below the required threshold, an employee is
            notified to verify the customer’s ID. The checkout system
            communicates with the employee’s monitoring device through
            WebSockets.
          </p>
          <p className="py-2 text-[var(--color-text-light)] dark:text-[var(--color-text-dark)]">
            The experiments (see research paper) showed that the optimized model
            significantly improved recall, correctly identifying over 200 more
            customers above the age of 25 while still maintaining accuracy for
            underage detection. Although this came with a slight drop in
            precision, the improvement in recall reduces the risk of illegal
            alcohol sales, which was our primary objective.
          </p>
          <Link href="/#projects">
            <button className="px-8 py-2 mt-4 mr-4">Back</button>
          </Link>
          <Link href="/papers/ah_age_prediction_paper.pdf">
            <button className="px-8 py-2 mt-4">Research Paper</button>
          </Link>
        </div>
        <div className="col-span-4 md:col-span-1 shadow-md shadow-gray-400 rounded-xl p-4">
          <div className="p-2">
            <p className="text-center font-bold pb-2">Tech Stack</p>
            <div className="grid grid-cols-2 md:grid-cols-1">
              <p className="text-[var(--color-text-light)] dark:text-[var(--color-text-dark)] py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                Python
              </p>
              <p className="text-[var(--color-text-light)] dark:text-[var(--color-text-dark)] py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                Artificial Intelligence
              </p>
              <p className="text-[var(--color-text-light)] dark:text-[var(--color-text-dark)] py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                Machine Learning
              </p>
              <p className="text-[var(--color-text-light)] dark:text-[var(--color-text-dark)] py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                DeepFace
              </p>
              <p className="text-[var(--color-text-light)] dark:text-[var(--color-text-dark)] py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                Flask API
              </p>
              <p className="text-[var(--color-text-light)] dark:text-[var(--color-text-dark)] py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                React.js
              </p>
              <p className="text-[var(--color-text-light)] dark:text-[var(--color-text-dark)] py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                WebSockets
              </p>
              <p className="text-[var(--color-text-light)] dark:text-[var(--color-text-dark)] py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                Tailwind.CSS
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ah_age_prediction;
