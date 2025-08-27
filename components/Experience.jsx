import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { MdWork, MdSchool } from "react-icons/md";

const Experience = () => {
  return (
    <div id="experience" className="max-w-[1240px] m-auto px-2 pt-32 w-full">
      <p className="uppercase text-2xl tracking-widest text-[var(--color-primary)]">
        Experience
      </p>
      <h2 className="py-4">What Have I Learned?</h2>
      <div className="overflow-hidden md:overflow-visible md:py-4">
        <VerticalTimeline
          className="vertical-timeline"
          lineColor={"var(--color-secondary)"}
        >
          <VerticalTimelineElement
            className="vertical-timeline-element"
            contentStyle={{ background: "var(--color-primary)" }}
            contentArrowStyle={{
              borderRight: "10px solid var(--color-primary)",
            }}
            date="Mar 2025 - Aug 2025"
            dateClassName="date"
            icon={<MdWork />}
            iconClassName="icon"
          >
            <h3 className="vertical-timeline-element-title">
              Artificial Intelligence Specialist (Thesis Internship)
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Municipality of Amsterdam
            </h4>
            <p>
              During my master thesis internship at the Juridisch Bureau of the
              Municipality of Amsterdam, I researched how Retrieval-Augmented
              Generation (RAG) models can be leveraged to improve the efficiency
              of decision-making on lawyers&rsquo; objections.
            </p>
            <p>
              In this project, I gained hands-on experience with RAG while
              demonstrating that optimizing embeddings through advanced chunking
              techniques can significantly enhance model performance.
              Additionally, I explored strategies to maintain stakeholder trust
              when integrating AI into legal processes.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element"
            contentStyle={{ background: "var(--color-primary)" }}
            contentArrowStyle={{
              borderRight: "10px solid var(--color-primary)",
            }}
            date="Sep 2024 - Aug 2025"
            dateClassName="date"
            icon={<MdSchool />}
            iconClassName="icon"
          >
            <h3 className="vertical-timeline-element-title">
              Master Applied Artificial Intelligence
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Hogeschool van Amsterdam
            </h4>
            <p>
              One-year masters program focused on both theoretical foundations
              and practical applications of Artificial Intelligence.
            </p>
            <p>
              I gained expertise in techniques including, but not limited to:
              Machine Learning, Deep Learning, Reinforcement Learning, Computer
              Vision, Natural Language Processing, Large Language Models and
              Data engineering.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element"
            contentStyle={{ background: "var(--color-primary)" }}
            contentArrowStyle={{
              borderRight: "10px solid var(--color-primary)",
            }}
            date="Aug 2023 - Jan 2024"
            dateClassName="date"
            icon={<MdSchool />}
            iconClassName="icon"
          >
            <h3 className="vertical-timeline-element-title">
              Front-End Developer (Graduation Internship)
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Webbio, Nijmegen
            </h4>
            <p>
              For my graduation project at Webbio, I developed a web application
              that allows employees to submit sensitive information securely to
              their customers, such as government agencies.
            </p>
            <p>
              I learned a lot about the importance of security, encryption and
              privacy, as well as how to implement these concepts in a web
              application.
            </p>
            <p>Read more about this project in the "Projects" section below!</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element"
            contentStyle={{ background: "var(--color-primary)" }}
            contentArrowStyle={{
              borderRight: "10px solid var(--color-primary)",
            }}
            date="Feb 2023 - Jun 2023"
            dateClassName="date"
            icon={<MdSchool />}
            iconClassName="icon"
          >
            <h3 className="vertical-timeline-element-title">Minor GAME</h3>
            <h4 className="vertical-timeline-element-subtitle">
              HAN University of Applied Sciences, Arnhem
            </h4>
            <p>
              During this minor, I primarily learned how to work with Unity and
              how to establish a company to develop an actual game.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element"
            contentStyle={{ background: "var(--color-primary)" }}
            contentArrowStyle={{
              borderRight: "10px solid var(--color-primary)",
            }}
            date="Aug 2021 - Feb 2022"
            dateClassName="date"
            icon={<MdWork />}
            iconClassName="icon"
          >
            <h3 className="vertical-timeline-element-title">
              Front-End Developer (Internship)
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              a&m impact, Doetinchem
            </h4>
            <p>
              At my internship, my primary focus was on developing their main
              application, an intranet specifically designed for individuals in
              the healthcare sector.
            </p>
            <p>
              The key aspect of this experience was customizing each component
              according to the specific requirements and preferences of the
              clients, which provided me with valuable experience in creating
              custom components using Vue.js and SASS.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element"
            contentStyle={{ background: "var(--color-primary)" }}
            contentArrowStyle={{
              borderRight: "10px solid var(--color-primary)",
            }}
            date="Aug 2019 - Feb 2024"
            dateClassName="date"
            icon={<MdSchool />}
            iconClassName="icon"
          >
            <h3 className="vertical-timeline-element-title">
              HBO-ICT (Web Development)
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              HAN University of Applied Sciences, Arnhem
            </h4>
            <p>
              Throughout my study, I've had the opportunity to learn a wide
              range of valueable skills.
            </p>
            <p>
              These include, but are not limited to: Software Development,
              Object-Oriented Programming, Embedded Software, Database
              Management, and, of course, Web Development.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element"
            contentStyle={{ background: "var(--color-primary)" }}
            contentArrowStyle={{
              borderRight: "10px solid var(--color-primary)",
            }}
            date="Dec 2015 - Dec 2023"
            dateClassName="date"
            icon={<MdWork />}
            iconClassName="icon"
          >
            <h3 className="vertical-timeline-element-title">
              Restaurant Employee
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Sin Chen, Zeddam
            </h4>
            <p>
              I worked at a Chinese restaurant called Sin Chen. Within Sin Chen,
              I had a range of responsibilities that include serving guests,
              preparing the buffet, supervising other employees, and managing my
              own ordering application.
            </p>
            <p>Read more about my ordering application below!</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element"
            contentStyle={{ background: "var(--color-primary)" }}
            contentArrowStyle={{
              borderRight: "10px solid var(--color-primary)",
            }}
            date="2015 - 2019"
            dateClassName="date"
            icon={<MdSchool />}
            iconClassName="icon"
          >
            <h3 className="vertical-timeline-element-title">
              Havo (Economie & Maatschappij)
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Ulenhof College, Doetinchem
            </h4>
            <p>
              I successfully completed Havo and went the extra mile by taking an
              additional Vwo subject, as I initially intended to continue my
              studies at the secondary school level.
            </p>
            <p>
              It's worth noting that I accomplished all of this by the age of
              16!
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element"
            contentStyle={{ background: "var(--color-primary)" }}
            contentArrowStyle={{
              borderRight: "10px solid var(--color-primary)",
            }}
            date="2008 - 2016"
            dateClassName="date"
            icon={<MdSchool />}
            iconClassName="icon"
          >
            <h3 className="vertical-timeline-element-title">
              Chinese School (HSK Level 3)
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Stichting Chinese School Arnhem, Arnhem
            </h4>
            <p>
              I used to attend Chinese school every Saturday evening, which
              provided me with the opportunity to enhance my Chinese language
              skills, including speaking, grammar, and even calligraphy.
            </p>
            <p>
              Additionally, I completed both the HSK Level 2 and Level 3 exams,
              further demonstrating my proficiency in the Chinese language.
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
};

export default Experience;
