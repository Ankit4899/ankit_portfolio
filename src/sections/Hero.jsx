import React from "react";
import Button from "../components/Button";
import HeroExperience from "../components/HeroModels/HeroExperience";
import { words } from "../constants";


const Hero = () => {
  return (
    <section id="hero" className="relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute top-0 left-0 z-10">
        <img src="/images/bg.png" alt="background" />
      </div>

      <div className="hero-layout">
        {/* Left: Hero Content */}
        <header className="flex flex-col justify-center md:w-full w-screen md:px-20 px-5">
          <div className="flex flex-col gap-7">
            <div className="hero-text">
              <h1 className="text-4xl font-bold">
                Shaping{" "}
                <span className="slide inline-block relative">
                  <span className="wrapper">
                    {words.map((word) => (
                      <span
                        key={word.text}
                        className="flex items-center md:gap-3 gap-1 pb-2"
                      >
                        <img
                          src={word.imgPath}
                          alt={word.text}
                          className="xl:size-12 md:size-10 size-7 md:p-2 p-1 rounded-full bg-white-50"
                        />
                        <span className="text-primary font-semibold">
                          {word.text}
                        </span>
                      </span>
                    ))}
                  </span>
                </span>
              </h1>
              <h1 className="text-4xl font-bold">into Real Projects</h1>
              <h1 className="text-4xl font-bold">that Deliver Results</h1>
            </div>
            <p className="text-white md:text-xl relative z-10 pointer-events-none">
              Hi, i am ANKIT RAJ, a developer based in india with a passion for code.
            </p>
            <Button className='md:w-80 md:h-16 w-60 h-12' id="button" text="See my work"/>
          </div>
        </header>

        {/* Right: 3D Model Placeholder */} 
        <figure>
          <div className="hero-3d-layout">
            <HeroExperience />
          </div>
        </figure>
      </div>
    </section>
  );
};

export default Hero;
