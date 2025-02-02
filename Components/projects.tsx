import Image from "next/image";
import React from "react";
import project1 from "@/public/project/project-1.jpg"
import project2 from "@/public/project/project-2.jpg"
import project3 from "@/public/project/project-3.jpg"
import project4 from "@/public/project/project-4.png"
import project5 from "@/public/project/project-5.jpg"
import project6 from "@/public/project/project-6.jpg"

const Projects = () => {
  return (
    <div id="project">
      <section className="text-gray-100 body-font bg-black">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="sm:text-3xl -4xl title-font mb-[-0] text-[#eca400] font-bold">
              My projects
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base"></p>
          </div>
          <div className="flex flex-wrap -m-4">
            <div className="lg:w-1/3 sm:w-1/2 p-4">
              <div className="flex relative ">
                <Image
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src={project1}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-[orange] mb-1">
                    CountDown Timer
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    COUNTDOWN TIMER
                  </h1>
                  <p className="leading-relaxed line-clamp-2 text-[#141a2f]">
                    I created a Countdown Timer App using Next.js that
                    dynamically displays the remaining time in real-time. The
                    timer automatically updates and shows a message or alert
                    when the countdown reaches zero.
                  </p>
                  <a
                    target="_blank"
                    href="https://vercel.live/link/count-down-timer-next-js-q1u1.vercel.app?via=project-dashboard-alias-list&p=1"
                    className="text-[orange] hover:underline"
                  >
                    <p>View project..</p>
                  </a>
                </div>
              </div>
            </div>
            <div className="lg:w-1/3 sm:w-1/2 p-4">
              <div className="flex relative">
                <Image
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src={project2}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-[orange] mb-1">
                    Weather widget app
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    WEATHER WIDGET APP
                  </h1>
                  <p className="leading-relaxed line-clamp-2 text-[#141a2f]">
                    I developed a Weather Widget App using Next.js that displays
                    real-time weather updates for a selected location. The app
                    fetches data from a weather API and dynamically shows the
                    current temperature, conditions, and other weather details,
                    updating automatically.
                  </p>
                  <a
                    target="_blank"
                    href="https://vercel.live/link/count-down-timer-next-js-q1u1.vercel.app?via=project-dashboard-alias-list&p=1"
                    className="text-[orange] hover:underline"
                  >
                    <p>View project..</p>
                  </a>
                </div>
              </div>
            </div>
            <div className="lg:w-1/3 sm:w-1/2 p-4">
              <div className="flex relative">
                <Image
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src={project3}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-[orange] mb-1">
                    Digital clock
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    DIGITAL CLOCK
                  </h1>
                  <p className="leading-relaxed line-clamp-2 text-[#141a2f]">
                    I developed a digital clock App using Next.js that displays
                    real-time time updates for a selected location.
                  </p>
                  <a
                    target="_blank"
                    href="https://vercel.live/link/count-down-timer-next-js-q1u1.vercel.app?via=project-dashboard-alias-list&p=1"
                    className="text-[orange] hover:underline"
                  >
                    <p>View project..</p>
                  </a>
                </div>
              </div>
            </div>
            <div className="lg:w-1/3 sm:w-1/2 p-4">
              <div className="flex relative">
                <Image
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src={project4}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-[orange] mb-1">
                    Digital clock
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    DIGITAL CLOCK
                  </h1>
                  <p className="leading-relaxed line-clamp-2 text-[#141a2f]">
                    I developed a digital clock App using Next.js that displays
                    real-time time updates for a selected location.
                  </p>
                  <a
                    target="_blank"
                    href="https://vercel.live/link/count-down-timer-next-js-q1u1.vercel.app?via=project-dashboard-alias-list&p=1"
                    className="text-[orange] hover:underline"
                  >
                    <p>View project..</p>
                  </a>
                </div>
              </div>
            </div>
            <div className="lg:w-1/3 sm:w-1/2 p-4">
              <div className="flex relative">
                <Image
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src={project5}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-[orange] mb-1">
                    Digital clock
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    DIGITAL CLOCK
                  </h1>
                  <p className="leading-relaxed line-clamp-2 text-[#141a2f]">
                    I developed a digital clock App using Next.js that displays
                    real-time time updates for a selected location.
                  </p>
                  <a
                    target="_blank"
                    href="https://vercel.live/link/count-down-timer-next-js-q1u1.vercel.app?via=project-dashboard-alias-list&p=1"
                    className="text-[orange] hover:underline"
                  >
                    <p>View project..</p>
                  </a>
                </div>
              </div>
            </div>
            <div className="lg:w-1/3 sm:w-1/2 p-4">
              <div className="flex relative">
                <Image
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src={project6}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-[orange] mb-1">
                    Digital clock
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    DIGITAL CLOCK
                  </h1>
                  <p className="leading-relaxed line-clamp-2 text-[#141a2f]">
                    I developed a digital clock App using Next.js that displays
                    real-time time updates for a selected location.
                  </p>
                  <a
                    target="_blank"
                    href="https://vercel.live/link/count-down-timer-next-js-q1u1.vercel.app?via=project-dashboard-alias-list&p=1"
                    className="text-[orange] hover:underline"
                  >
                    <p>View project..</p>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
