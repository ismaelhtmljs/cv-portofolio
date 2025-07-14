import Header from "@/app/components/header/header";
import { AiOutlineGlobal } from "react-icons/ai";
import { IoCodeSlash } from "react-icons/io5";
import '@/app/components/css/responsive.css';
import "@/app/sites/about/about.css";

export default function About() {

  const flecha = ">";

  return (
    <>
      <Header />
      <main className="flex justify-center">
        <div className="w-[840px] about_w_res">
          {/*  */}
          <div className="flex flex-col p-[30px] about_padding_res">
            <div className="p-5">
              <h2 className="text-[17px] tracking-[2px] about">
                <strong>ABOUT</strong>
              </h2>
            </div>
            <div className="flex items-center justify-around about_div_1_res">
              <div className="p-2.5 about_size_img_div">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/pancho.jpg"
                  alt=""
                  className="w-[1063px] h-auto rounded"
                />
              </div>
              <div className="p-[15px] flex flex-col gap-5">
                <p>
                  Ingeniero de software especializado en desarrollo web
                  frontend. Con sólida experiencia liderando proyectos
                  tecnológicos y más de 40 soluciones desarrolladas, busco
                  integrarme a un equipo innovador donde pueda aportar mis
                  habilidades técnicas, potenciar la experiencia del usuario y
                  seguir creciendo profesionalmente.
                </p>
                <div className="flex items-center flex-wrap justify-between">
                  <div>
                    <p className="flex items-center">
                      <i className="text-[#00ff3a] text-[25px] pr-[10px]">
                        {flecha}
                      </i>
                      <strong>Birthday:</strong> 8 Sep, 2004
                    </p>
                    <p className="flex items-center">
                      <i className="text-[#00ff3a] text-[25px] pr-[10px]">
                        {flecha}
                      </i>
                      <strong>Phone:</strong> +51 978 680 283
                    </p>
                  </div>
                  <div>
                    <p className="flex items-center">
                      <i className="text-[#00ff3a] text-[25px] pr-[10px]">
                        {flecha}
                      </i>
                      <strong>Cite:</strong> Independence, Perú
                    </p>
                    <p className="flex items-center">
                      <i className="text-[#00ff3a] text-[25px] pr-[10px]">
                        {flecha}
                      </i>
                      <strong>Email:</strong> Ismaelgq.88@gmail.com
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*  */}
          <div className="flex flex-col p-[30px] about_padding_res">
            <div className="p-5">
              <h2 className="text-[17px] tracking-[2px] about">
                <strong>Interests</strong>
              </h2>
            </div>
            <div className="flex flex-wrap items-center p-5 gap-5">
              {/*  */}
              <div className="bg-[#09203a] hover:bg-[#042b56eb]">
                <div className="p-5">
                  <p className="flex items-center gap-[10px] font-bold">
                    <AiOutlineGlobal className="text-yellow-400 text-[32px]" />{" "}
                    Software Development
                  </p>
                </div>
              </div>
              {/*  */}
              <div className="bg-[#09203a] hover:bg-[#042b56eb]">
                <div className="p-5">
                  <p className="flex items-center gap-[10px] font-bold">
                    <IoCodeSlash className="text-green-500 text-[32px]" />{" "}
                    Software Engineering
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
