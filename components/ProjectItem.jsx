import React from "react";
import Image from "next/image";
import Link from "next/link";

const ProjectItem = ({ title, toolstack, img, url }) => {
  return (
    <div className="relative flex items-center justify-center h-auto w-full shadow-md shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)]">
      <Image
        className="rounded-xl group-hover:opacity-10"
        src={img}
        alt={title}
      />
      <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        <h3 className="text-xl pb-2 md:text-2xl tracking-wider text-center text-[var(--color-text-dark)] dark:text-[var(--color-text-light)]">
          {title}
        </h3>
        <div className="hidden md:block">
        <p className="pb-3 text-center text-[var(--color-text-dark)] dark:text-[var(--color-text-light)]">
          {toolstack}
        </p>
        </div>
        <Link href={`projects/${url}`}>
          <p className="text-center p-3 rounded-lg text-[var(--color-text-light)] bg-[var(--color-text-dark)] dark:bg-[var(--color-text-light)] dark:text-[var(--color-text-dark)] font-bold text-lg cursor-pointer hover:text-[var(--color-highlight)] dark:hover:text-[var(--color-highlight)]">
            Read More
          </p>
        </Link>
      </div>
    </div>
  );
};

export default ProjectItem;
