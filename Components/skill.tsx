import React from "react";
import { CiSquareCheck } from "react-icons/ci";


const Skill = () => {
  return (
    <section id="skill" className="text-gray-600 body-font bg-black">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h2 className="text-xs text-white tracking-widest font-medium title-font mb-1">
            SKILLS
          </h2>
          <h1 className="title-font sm:text-4xl  mb-5  text-[#eca400] text-4xl font-bold">
            My Skills
          </h1>
        </div>
        <div className="flex flex-wrap -m-4 -mt-[5rem] ">
          {/* skill */}
          {/* html */}
          <div className="p-4 w-[100%]  md:w-1/3">
            <div className="flex rounded-lg h-full p-8 flex-col">
              <div className="flex items-center mb-3">
                <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-[#eca400] text-white flex-shrink-0">
                <CiSquareCheck className="text-xl font-bold "/>
                </div>
                <h2 className="text-white text-lg title-font font-medium">
                  HTML
                </h2> 
              </div>
              <div className="flex-grow">
                <div className="relative h-1 w-full bg-gray-200 rounded-xl">
                  <div className="absolute h-1 bg-[#eca400] w-[70%]"></div>
                </div>
                <p className="font-bold text-[#eca400] text-right">70%</p>
              </div>
            </div>
          </div>
          {/* css */}
          <div className="p-4 w-[100%] md:w-1/3">
            <div className="flex rounded-lg h-full p-8 flex-col">
              <div className="flex items-center mb-3">
                <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-[#eca400] text-white flex-shrink-0">
                <CiSquareCheck className="text-xl font-bold "/>
                </div>
                <h2 className="text-white text-lg title-font font-medium">
                  CSS
                </h2> 
              </div>
              <div className="flex-grow">
                <div className="relative h-1 w-full bg-gray-200 rounded-xl">
                  <div className="absolute h-1 bg-[#eca400] w-[55%]"></div>
                </div>
                <p className="font-bold text-[#eca400] text-right">55%</p>
              </div>
            </div>
          </div>
          {/* j/t */}
          <div className="p-4 w-[100%] md:w-1/3">
            <div className="flex rounded-lg h-full p-8 flex-col">
              <div className="flex items-center mb-3">
                <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-[#eca400] text-white flex-shrink-0">
                <CiSquareCheck className="text-xl font-bold "/>
                </div>
                <h2 className="text-white text-lg title-font font-medium">
                  JAVASCRIPT/TYPESCRIPT
                </h2> 
              </div>
              <div className="flex-grow">
                <div className="relative h-1 w-full bg-gray-200 rounded-xl">
                  <div className="absolute h-1 bg-[#eca400] w-[50%]"></div>
                </div>
                <p className="font-bold text-[#eca400] text-right">50%</p>
              </div>
            </div>
          </div>
          {/* react */}
          <div className="p-4 w-[100%] md:w-1/3">
            <div className="flex rounded-lg h-full p-8 flex-col">
              <div className="flex items-center mb-3">
                <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-[#eca400] text-white flex-shrink-0">
                <CiSquareCheck className="text-xl font-bold "/>
                </div>
                <h2 className="text-white text-lg title-font font-medium">
                  REACT.JS
                </h2> 
              </div>
              <div className="flex-grow">
                <div className="relative h-1 w-full bg-gray-200 rounded-xl">
                  <div className="absolute h-1 bg-[#eca400] w-[40%]"></div>
                </div>
                <p className="font-bold text-[#eca400] text-right">40%</p>
              </div>
            </div>
          </div>
          {/* next.js */}
          <div className="p-4 w-[100%] md:w-1/3">
            <div className="flex rounded-lg h-full p-8 flex-col">
              <div className="flex items-center mb-3">
                <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-[#eca400] text-white flex-shrink-0">
                <CiSquareCheck className="text-xl font-bold "/>
                </div>
                <h2 className="text-white text-lg title-font font-medium">
                  NEXT.JS
                </h2> 
              </div>
              <div className="flex-grow">
                <div className="relative h-1 w-full bg-gray-200 rounded-xl">
                  <div className="absolute h-1 bg-[#eca400] w-[40%]"></div>
                </div>
                <p className="font-bold text-[#eca400] text-right">40%</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skill;
