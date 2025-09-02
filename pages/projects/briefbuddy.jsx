import React from "react";
import Image from "next/image";
import Link from "next/link";
import briefbuddyPng from "../../public/assets/projects/briefbuddy_banner.png";
import { RiRadioButtonFill } from "react-icons/ri";
import Head from "next/head";

const briefbuddy = () => {
  return (
    <div className="w-full py-16">
      <Head>
        <title>AC Project | Brief Buddy</title>
      </Head>
      <div className="w-screen h-[30vh] lg:h-[40vh] relative">
        <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/40 z-10"></div>
        <Image
          className="absolute z-1"
          fill
          style={{ objectFit: "cover" }}
          src={briefbuddyPng}
          alt="briefbuddy"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-[var(--color-text-dark)] z-10 p-2">
          <h2 className="py-2">Brief Buddy</h2>
          <p>
            An application designed to help government officials simplify
            letters for citizens with low literacy.
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
            This school project, completed during the Master in Applied
            Artificial Intelligence, was developed for the Municipality of
            Amsterdam to help government officials simplify their letters for
            citizens with A1 to B2 language proficiency.
          </p>
          <p className="py-2 text-[var(--color-text-light)] dark:text-[var(--color-text-dark)]">
            The application used Optical Character Recognition (OCR) to extract
            text from government letters, followed by Natural Language
            Processing (NLP) techniques to simplify the content. The pipeline
            included preprocessing, text simplification using Dutch pre-trained
            language models such as Geitje 7B Ultra and Llama 3.2 3B Instruct,
            and guardrails to verify model outputs.
          </p>
          <p className="py-2 text-[var(--color-text-light)] dark:text-[var(--color-text-dark)]">
            For training and evaluation, metrics like BLEU, BERTScore, and SARI
            were applied, with further fine-tuning performed using Low-Rank
            Adaption (LoRA). The final application featured a React.js frontend
            and a Flask backend.
          </p>
          <p className="py-2 text-[var(--color-text-light)] dark:text-[var(--color-text-dark)]">
            Through this project, I learned about the challenges of designing a
            user-friendly interface for citizens with lower literacy, the
            complexity of defining what counts as a “difficult” word, and the
            difficulty of improving already highly optimized Dutch language
            models.
          </p>

          <Link href="/#projects">
            <button className="px-8 py-2 mt-4 mr-4">Back</button>
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
                OCR
              </p>
              <p className="text-[var(--color-text-light)] dark:text-[var(--color-text-dark)] py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                NLP
              </p>
              <p className="text-[var(--color-text-light)] dark:text-[var(--color-text-dark)] py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                Llama 3.2 3B Instruct
              </p>
              <p className="text-[var(--color-text-light)] dark:text-[var(--color-text-dark)] py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                Geitje 7B Ultra
              </p>
              <p className="text-[var(--color-text-light)] dark:text-[var(--color-text-dark)] py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                Low-Rank Adaption
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
                Tailwind.CSS
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default briefbuddy;
