import React from "react";
import Image from "next/image";
import Link from "next/link";
import airbnbImg from "../../public/assets/projects/airbnb.png";
import { RiRadioButtonFill } from "react-icons/ri";

const airbnb = () => {
  return (
    <div className="w-full py-16">
      <div className="w-screen h-[30vh] lg:h-[40vh] relative">
        <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10"></div>
        <Image
          className="absolute z-1"
          fill
          objectFit="cover"
          src={airbnbImg}
          alt="airbnb"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-[var(--color-text-dark)] z-10 p-2">
          <h2 className="py-2">Inside AirBNB</h2>
          <p>Application to display Airbnb locations across Amsterdam.</p>
        </div>
      </div>
      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
        <div className="col-span-4">
          <p className="uppercase text-2xl tracking-widest text-[var(--color-primary)]">
            Project
          </p>
          <h2 className="py-4">Description</h2>
          <p className="py-2 text-[var(--color-text-light)] dark:text-[var(--color-text-dark)]">
            This was a school project for the course NOTS - Web Applications.
            The project required developers to build their own AirBNB clone,
            with some extra features. These features were intended for the
            management team of InsideAirBNB, which they could use to get an
            overview of different statistics, such as: average reviews per
            neighbourhood, monthly income per neighbourhood, amount of
            accomodations, etc.
          </p>
          <p className="py-2 text-[var(--color-text-light)] dark:text-[var(--color-text-dark)]">
            During this project I learned how to use several Azure Services like
            Redis Caching, Azure AD B2C and App Service. For the front-end I
            chose for React.js, Mapbox.js (to show the different Airbnb
            locations) and Charts.js (to display multiple graphs). Besides that,
            I was required to create a ASP.NET Core Web API with a MSSQL
            database running in Docker as the back-end. Lastly, I documented the
            complete coding process in addition with performance tests by Apache
            JMeter and vulnerability tests by OWASP ZAP.
          </p>
          <p className="py-2 text-[var(--color-text-light)] dark:text-[var(--color-text-dark)]">
            At first this project was really challenging, due to the big variety
            of technologies being used. But after setting up a solid development
            environment, I believe that I have done an excelent job in
            fulfilling the wants and needs of the project.
          </p>
          <Link href="/#projects">
            <button className="px-8 py-2 mt-4 mr-4 shadow-md shadow-gray-400 text-[var(--color-text-light)] dark:text-[var(--color-text-dark)] hover:text-[var(--color-highlight)] dark:hover:text-[var(--color-highlight)]">
              Back
            </button>
          </Link>
          <Link href="https://github.com/DitisAlex/HAN-NOTS-WAPP-AIRBNB">
            <button className="px-8 py-2 mt-4 shadow-lg shadow-gray-400 text-[var(--color-text-light)] dark:text-[var(--color-text-dark)] hover:text-[var(--color-highlight)] dark:hover:text-[var(--color-highlight)]">
              Code
            </button>
          </Link>
        </div>
        <div className="col-span-4 md:col-span-1 shadow-md shadow-gray-400 rounded-xl p-4">
          <div className="p-2">
            <p className="text-center font-bold pb-2">Tech Stack</p>
            <div className="grid grid-cols-3 md:grid-cols-1">
              <p className="text-[var(--color-text-light)] dark:text-[var(--color-text-dark)] py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                React.js
              </p>
              <p className="text-[var(--color-text-light)] dark:text-[var(--color-text-dark)] py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                Mapbox.js
              </p>
              <p className="text-[var(--color-text-light)] dark:text-[var(--color-text-dark)] py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                Charts.js
              </p>
              <p className="text-[var(--color-text-light)] dark:text-[var(--color-text-dark)] py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                Node.js
              </p>
              <p className="text-[var(--color-text-light)] dark:text-[var(--color-text-dark)] py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                .NET Core
              </p>
              <p className="text-[var(--color-text-light)] dark:text-[var(--color-text-dark)] py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                MSSQL
              </p>
              <p className="text-[var(--color-text-light)] dark:text-[var(--color-text-dark)] py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                Docker
              </p>
              <p className="text-[var(--color-text-light)] dark:text-[var(--color-text-dark)] py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                App Services
              </p>
              <p className="text-[var(--color-text-light)] dark:text-[var(--color-text-dark)] py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                Redis Caching
              </p>
              <p className="text-[var(--color-text-light)] dark:text-[var(--color-text-dark)] py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                Azure AD B2C
              </p>
              <p className="text-[var(--color-text-light)] dark:text-[var(--color-text-dark)] py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                Apache JMeter
              </p>
              <p className="text-[var(--color-text-light)] dark:text-[var(--color-text-dark)] py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                OWASP ZAP
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default airbnb;
