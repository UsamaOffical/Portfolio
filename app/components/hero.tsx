"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Typewriter from "typewriter-effect";
import heroImage from "@/public/profile/profile2.jpg"
const Hero = () => {
  return (
    <div>
      <section className="text-gray-600 body-font bg-black">
        <div className="container mx-auto flex px-3 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <p className="text-[#eca400] text-4xl">Hello</p>
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-100">
              I'm
              <div className="text-[#eca400]">
                <Typewriter
                  options={{
                    strings: ["Usama", "Web developer"],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </div>
              <p className="font-normal mt-3 text-base">I am a student at GIAIC. pursing a course is Artificial Intelligence, Web 3.0 & Metaverse.</p>
              <br className="hidden lg:inline-block" />
            </h1>
            <p className="mb-8 leading-relaxed"></p>
            <div className="flex justify-center">
              <Link href={"#contact"}>
                <button className="inline-flex text-[#1c2541] bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-300 rounded text-lg font-bold">
                  Contact
                </button>
              </Link>
            </div>
          </div>
          <div className="lg:max-w-sm lg:w-auto  ">
            <Image
              className="object-cover object-center rounded-[50%] "
              alt="hero"
              src={heroImage}
              width={400}
              height={400}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
