"use client";
import { useEffect, useState } from "react";
export default function Header_Mobil({ onClose }: { onClose: () => void }) {
  const [AnimatedExit, SetAnimatedExit] = useState(false);

  const handleClose = () => {
    SetAnimatedExit(true);
  };

  const onAnimationEnd = () => {
    if (AnimatedExit) {
      onClose();
    }
  };

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  });
  return (
    <>
      <div
        className={`fixed w-full h-full flex items-center bg-[#000000f5] top-0 justify-center z-[100] p-2.5 ${
          AnimatedExit ? "aside-exit" : "aside-enter"
        }`}
        onAnimationEnd={onAnimationEnd}
      >
        <div className="w-full flex gap-5 flex-col bg-[#5552520f] border-2 border-gray-600 rounded-[10px] p-2.5">
          <div className="flex items-center justify-around">
            <div>
              <h1>Menu</h1>
            </div>
            <div>
              <p onClick={handleClose}>❎</p>
            </div>
          </div>
          <nav>
            <ul className="flex gap-[30px] items-center flex-col">
              <li>
                {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/sites/about">About</a>
              </li>
              <li>
                <a href="/sites/education">Education</a>
              </li>
              <li>
                <a href="/sites/projects">Projects</a>
              </li>
              <li>
                <a href="/sites/skills">Skills</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
}
