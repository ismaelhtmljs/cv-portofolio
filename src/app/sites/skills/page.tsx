import Header from "@/app/components/header/header";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaJs } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaNodeJs } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { FaGitAlt } from "react-icons/fa";
import { IoLogoVercel } from "react-icons/io5";
import { SiGooglefonts } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import "@/app/sites/skills/skills.css";
import "@/app/sites/about/about.css";
import "@/app/components/css/responsive.css";

export default function Skills() {
  return (
    <>
      <Header />
      <main className="flex justify-center mb-[30px]">
        <div className="w-[840px] p-2.5">
          {/*  */}
          <div className="mb-2.5 mt-2.5">
            <h2 className="text-[17px] tracking-[2px] about">
              <strong>Skills</strong>
            </h2>
          </div>
          <div className="flex items-center flex-col gap-5">
            <div className="bg-white rounded p-2.5 text-black w-full">
              <div className="p-[5px]">
                <h4 className="raleway-none-w font-bold text-2xl">
                  Lenguajes
                </h4>
              </div>
              <div className="flex flex-wrap p-2.5 justify-evenly items-center skills_padding_res skills_gap_res">
                {/*  */}
                <div className="flex flex-col gap-5 items-center skills_w_cart">
                  <div className="flex items-center">
                    <FaHtml5 className="text-orange-700 text-[45px]" />
                    <p className="font-bold text-xl">HTML5</p>
                    <div className="ml-5 separator">
                      <p className="font-bold text-xl ml-2.5">Avanzado</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <FaCss3Alt className="text-blue-700 text-[45px]" />
                    <p className="font-bold text-xl">CSS</p>
                    <div className="ml-5 separator">
                      <p className="font-bold text-xl ml-2.5">Intermedio</p>
                    </div>
                  </div>
                </div>
                {/*  */}
                <div className="flex flex-col gap-5 items-center skills_w_cart">
                  <div className="flex items-center">
                    <FaJs className="text-amber-500 text-[45px]" />
                    <p className="font-bold text-xl">JavaScript</p>
                    <div className="ml-5 separator">
                      <p className="font-bold text-xl ml-2.5">Intermedio</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <SiTypescript className="text-blue-700 text-[45px]" />
                    <p className="font-bold text-xl">TypeScript</p>
                    <div className="ml-5 separator">
                      <p className="font-bold text-xl ml-2.5">Básico</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*  */}
            <div className="bg-white rounded p-2.5 text-black w-full">
              <div className="p-[5px]">
                <h4 className="raleway-none-w font-bold text-2xl">
                  Frameworks
                </h4>
              </div>
              <div className="flex flex-wrap p-2.5 justify-evenly items-center skills_padding_res skills_gap_res">
                {/*  */}
                <div className="flex flex-col gap-5 items-center skills_w_cart">
                  <div className="flex items-center">
                    <RiNextjsFill className="text-black text-[45px]" />
                    <p className="font-bold text-xl">Next JS</p>
                    <div className="ml-5 separator">
                      <p className="font-bold text-xl ml-2.5">Intermedio</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <RiTailwindCssFill className="text-cyan-500 text-[45px]" />
                    <p className="font-bold text-xl">Tailwind CSS</p>
                    <div className="ml-5 separator">
                      <p className="font-bold text-xl ml-2.5">Intermedio</p>
                    </div>
                  </div>
                </div>
                {/*  */}
                <div className="flex flex-col gap-5 items-center skills_w_cart">
                  <div className="flex items-center">
                    <FaNodeJs className="text-green-500 text-[45px]" />
                    <p className="font-bold text-xl">Node js</p>
                    <div className="ml-5 separator">
                      <p className="font-bold text-xl ml-2.5">Básico</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <FaReact className="text-cyan-700 text-[45px]" />
                    <p className="font-bold text-xl">React</p>
                    <div className="ml-5 separator">
                      <p className="font-bold text-xl ml-2.5">Intermedio</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*  */}
            <div className="bg-white rounded p-2.5 text-black w-full">
              <div className="p-[5px]">
                <h4 className="raleway-none-w font-bold text-2xl">Tools</h4>
              </div>
              <div className="flex flex-wrap p-2.5 justify-evenly items-center skills_padding_res skills_gap_res">
                {/*  */}
                <div className="flex flex-col gap-5 items-center skills_w_cart">
                  <div className="flex items-center">
                    <FaGitAlt className="text-orange-600 text-[45px]" />
                    <p className="font-bold text-xl">Git</p>
                    <div className="ml-5 separator">
                      <p className="font-bold text-xl ml-2.5">Intermedio</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <IoLogoVercel className="text-black text-[45px]" />
                    <p className="font-bold text-xl">Vercel Hosting</p>
                  </div>
                </div>
                {/*  */}
                <div className="flex flex-col gap-5 items-center skills_w_cart">
                  <div className="flex items-center">
                    <SiGooglefonts className="text-green-500 text-[45px]" />
                    <p className="font-bold text-xl">Google Fonts</p>
                  </div>
                  <div className="flex items-center">
                    <VscVscode className="text-blue-700 text-[45px]" />
                    <p className="font-bold text-xl">Visual Studio Code</p>
                  </div>
                </div>
              </div>
            </div>
            {/*  */}
          </div>
        </div>
      </main>
    </>
  );
}
