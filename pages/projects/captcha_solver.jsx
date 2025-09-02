import React from "react";
import Image from "next/image";
import Link from "next/link";
import captchaSolver from "../../public/assets/projects/captcha_solver.jpg";
import { RiRadioButtonFill } from "react-icons/ri";
import Head from "next/head";
const captcha_solver = () => {
  return (
    <div className="w-full py-16">
      <Head>
        <title>AC Project | CAPTCHA Solver</title>
      </Head>
      <div className="w-screen h-[30vh] lg:h-[40vh] relative">
        <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/50 z-10"></div>
        <Image
          className="absolute z-1"
          fill
          objectFit="cover"
          src={captchaSolver}
          alt="captcha solver"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-[var(--color-text-dark)] z-10 p-2">
          <h2 className="py-2">CAPTCHA Solver</h2>
          <p>
            Solve CAPTCHAs automatically with Artificial Intelligence (YOLOv5).
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
            This was a school project for the course NOTS. Together with a group
            of four developers, our goal was to create an AI algorithm capable
            of solving CAPTCHAs. This meant we had to train our own model and
            devise strategies to overcome the very purpose for which CAPTCHAs
            were designed – to prevent such solutions.
          </p>
          <p className="py-2 text-[var(--color-text-light)] dark:text-[var(--color-text-dark)]">
            While building this tool, we also had to document the entire process
            in the form of a research paper. The paper addressed various
            questions, including: What is Deep Learning? What Deep Learning
            techniques are necessary to tackle this problem? What data do we
            need to train our AI model? How much accuracy is required to
            determine a correct letter? How can we enhance the accuracy of our
            model? And finally, what are the ethical consequences of
            automatically solving CAPTCHAs? This 50+ pages research paper can be
            found on the GitHub repository below.
          </p>
          <p className="py-2 text-[var(--color-text-light)] dark:text-[var(--color-text-dark)]">
            Eventually, we achieved the capability to automatically solve
            CAPTCHAs using the YOLOv5 model. To train the model, we manually
            labeled over 400 images using Roboflow. We then increased the
            dataset size using data augmentation techniques. After training the
            model for several days on powerful hardware provided by Google Colab
            and Kaggle, the AI demonstrated high accuracy in recognizing
            different types of CAPTCHAs. We tracked the model's performance
            using a tool called Weights and Biases (WandB), which provided
            insights on its performance compared to earlier runs. You can find
            the full working demo below as well.
          </p>
          <Link href="/#projects">
            <button className="px-8 py-2 mt-4 mr-4">Back</button>
          </Link>
          <Link href="https://github.com/DitisAlex/captcha-solver">
            <button className="px-8 py-2 mt-4 mr-4">Code</button>
          </Link>
          <Link href="https://colab.research.google.com/drive/1JlLNy03KpM_E9oyB9TpQ-CFjR9vNj93i?usp=sharing">
            <button className="px-8 py-2 mt-4">Demo</button>
          </Link>
        </div>
        <div className="col-span-4 md:col-span-1 shadow-lg shadow-gray-400 rounded-xl p-4">
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
                YOLOv5
              </p>
              <p className="text-[var(--color-text-light)] dark:text-[var(--color-text-dark)] py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                Google Collab
              </p>
              <p className="text-[var(--color-text-light)] dark:text-[var(--color-text-dark)] py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                Kaggle
              </p>
              <p className="text-[var(--color-text-light)] dark:text-[var(--color-text-dark)] py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                WandB
              </p>
              <p className="text-[var(--color-text-light)] dark:text-[var(--color-text-dark)] py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                Roboflow
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default captcha_solver;
