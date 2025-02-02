import Image from "next/image";
import React from "react";
import heroImage from "@/public/profile/profile2.jpg"



const About = () => {
  return (
    <div id="about">
      <section className="text-gray-100 body-font bg-black">
        <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
          <Image
            className="lg:w-auto md:w-3/6  mb-10 object-cover object-center h-[250px] w-[250px] rounded-full"
            alt="hero"
            src={heroImage}
            height={400}
            width={400}
          />
          <div className="text-center lg:w-2/3 w-full">
            <h1 className="title-font sm:text-4xl  mb-4  text-[#eca400] text-4xl font-bold">
              About me
            </h1>
            <p className="mb-8 leading-relaxed mt-7 font-extralight text-lg text-gray-100">
              "I am currently learning web development with a solid foundation
              in HTML, CSS, JavaScript, and TypeScript. While I am still
              improving, I am actively working on projects to enhance my skills
              in React and Next.js. I’m passionate about continuous learning and
              constantly strive to keep up with the latest trends and best
              practices in web development."
            </p>
            <div className="flex justify-center">
              <a href="#contact">
              <button className="inline-flex text-[#1c2541] bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-300 rounded text-lg font-bold">
                Contact
              </button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
