"use client";
import { useEffect, useRef } from "react";
import Typed from "typed.js";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import "@/app/components/header/header.css";
import '@/app/components/css/responsive.css'

export default function Content() {
  const typedRef = useRef(null);

  const OpenLink = (URL: string) => {
    window.open(URL);
  };

  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: ["Programador Front-End", "Desarrollador web"],
      typeSpeed: 65,
      backSpeed: 50,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  });

  return (
    <div className="relative h-screen flex items-center z-[997]">
      <div className="w-full pr-[15px] pl-[15px] mr-auto ml-auto conteiner">
        <div className="p-2.5">
          <h1 className="text-[48px] font-bold poppins-bold">Ismael Alexis</h1>
        </div>
        <div className="p-2.5">
          <p className="text-[24px] raleway content-p-size-res">
            Soy{" "}
            <span
              ref={typedRef}
              className="text-[#12D640] border-b-[#1c7d32] border-b-2 pb-1.5"
            ></span>
          </p>
        </div>
        <nav className="p-2.5">
          <ul className="flex gap-[30px] items-center flex-wrap">
            {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
            <li className="hover:cursor-pointer hover:text-green-500 text-green-500"><a href="/">Home</a></li>
            <li className="hover:cursor-pointer hover:text-green-500"><a href="/sites/about">About</a></li>
            <li className="hover:cursor-pointer hover:text-green-500"><a href="/sites/education">Education</a></li>
            <li className="hover:cursor-pointer hover:text-green-500"><a href="/sites/projects">Projects</a></li>
            <li className="hover:cursor-pointer hover:text-green-500"><a href="/sites/skills">Skills</a></li>
          </ul>
        </nav>
        <div className="flex items-center p-2.5 gap-5">
          <div
            className="bg-[#ffffff1a] rounded-full p-2.5 hover:cursor-pointer w-[40px] h-[40px] text-[18px] flex items-center justify-center hover:bg-[#1c7d32]"
            onClick={() => OpenLink("https://www.linkedin.com/in/ismaelguerrero-dev/")}
          >
            <FaLinkedin />
          </div>
          <div
            className="bg-[#ffffff1a] rounded-full p-2.5 hover:cursor-pointer w-[40px] h-[40px] text-[18px] flex items-center justify-center hover:bg-[#1c7d32]"
            onClick={() => OpenLink("https://github.com/ismaelhtmljs")}
          >
            <FaGithub />
          </div>
        </div>
      </div>
    </div>
  );
}
