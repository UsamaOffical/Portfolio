import React from "react";
import { IoLogoGithub, IoLogoLinkedin } from "react-icons/io5";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="bg-black">
      <footer className="text-gray-600 body-font">
        <div className="container px-3 py-7 mx-auto flex items-center sm:flex-row flex-col">
          <p className="text-sm text-[#eca400] sm:ml-4 sm:pl-4 sm:py-2 sm:mt-0 mt-4">
            © 2024 Usama Jameel
          </p>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
            <Link target="_blank" href="https://github.com/Sarkarusama">
              <IoLogoGithub className="text-2xl hover:text-white text-gray-300" />
            </Link>
            <Link
              target="_blank"
              href="https://linkedin.com/in/usamasheikhoffical"
            >
              <IoLogoLinkedin className="text-2xl hover:text-[#0e76a8] text-gray-300" />
            </Link>
          </span>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
