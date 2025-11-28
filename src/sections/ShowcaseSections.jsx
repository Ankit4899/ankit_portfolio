import React, { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const ShowcaseSections = () => {
  const sectionRef = useRef(null);
  const project1Ref = useRef(null);
  const project2Ref = useRef(null);
  const project3Ref = useRef(null);

  useGSAP(() => {
    const projects = [
      project1Ref.current,
      project2Ref.current,
      project3Ref.current,
    ];

    // Animate Cards one by one
    projects.forEach((card, index) => {
      gsap.fromTo(
        card,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: index * 0.1,
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );
    });

    // Fade in entire section on scroll
    gsap.from(sectionRef.current, {
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 90%",
      },
    });
  }, []);

  return (
    <section id="work" ref={sectionRef} className="app-showcase">
      <div className="w-full">
        <div className="showcaselayout">

          {/* LEFT PROJECT */}
          <div className="first-project-wrapper" ref={project1Ref}>
            <div className="image-wrapper">
              <img src="images/project1.png" alt="Ryde" />
            </div>
            <div className="text-content">
              <h2>
                On-Demand Rides Made Simple with a Powerful, User-friendly App
                called Ryde.
              </h2>
              <p className="text-white-50 md:text-xl">
                An app built with React Native, Expo & TailwindCSS for a fast
                user-friendly experience.
              </p>
            </div>
          </div>

          {/* RIGHT PROJECT LIST */}
          <div className="project-list-wrapper overflow-hidden">

            {/* Project 2 */}
            <div className="project" ref={project2Ref}>
              <div className="image-wrapper bg-[#ffefdb]">
                <img src="images/project2.png" alt="Library Management" />
              </div>
              <h2>Library Management Platform.</h2>
            </div>

            {/* Project 3 */}
            <div className="project" ref={project3Ref}>
              <div className="image-wrapper bg-[#ffe7eb]">
                <img src="images/project3.png" alt="YC Directory" />
              </div>
              <h2>YC Directory - A startup showcase App.</h2>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default ShowcaseSections;
