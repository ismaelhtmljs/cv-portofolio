"use client";
import Header from "@/app/components/header/header";
import Image from "next/image";
import "@/app/sites/about/about.css";

export default function Projects() {
  const openLink = (URL: string) => {
    window.open(URL);
  };

  return (
    <>
      <Header />
      <main className="flex justify-center">
        <div className="w-[840px]">
          {/*  */}
          <div className="flex flex-col p-[30px] projects-padding-res">
            <div className="p-5">
              <h2 className="text-[17px] tracking-[2px] about">
                <strong>Projects</strong>
              </h2>
            </div>
            <div className="flex flex-wrap items-center justify-around p-2.5 gap-5">
              <div className="flex flex-col gap-5">
                <div className="bg-[#09203a] rounded">
                  <div className="flex flex-col-reverse">
                    <div className="flex flex-col p-[10px] gap-2.5">
                      <p className="text-xl">WordNext</p>
                      <div className="flex flex-col gap-5">
                        <p>
                          Enlace:{" "}
                          <button
                            type="button"
                            className="hover:cursor-pointer bg-blue-800 p-[5px] rounded hover:bg-blue-600"
                            onClick={() =>
                              openLink("https://word-next-seven.vercel.app/")
                            }
                          >
                            WordNext
                          </button>
                        </p>
                        <p>
                          Repositorio:{" "}
                          <button
                            type="button"
                            className="hover:cursor-pointer bg-blue-800 p-[5px] rounded hover:bg-blue-600"
                            onClick={() => openLink("https://github.com/ismaelhtmljs/word-next")}
                          >
                            Repositorio
                          </button>
                        </p>
                      </div>
                    </div>
                    <div>
                      {/* img */}
                      <Image src="/wordnext_img.png" alt="" width={350} height={100}/>
                    </div>
                  </div>
                </div>
                {/*  */}
                <div className="bg-[#09203a] rounded">
                  <div className="flex flex-col-reverse">
                    <div className="flex flex-col p-[10px] gap-2.5">
                      <p className="text-xl">MemoBox</p>
                      <div className="flex flex-col gap-5">
                        <p>
                          Enlace:{" "}
                          <button
                            type="button"
                            className="hover:cursor-pointer bg-blue-800 p-[5px] rounded hover:bg-blue-600"
                            onClick={() => openLink("https://memobox-beta.vercel.app/")}
                          >
                            MemoBox
                          </button>
                        </p>
                        <p>
                          Repositorio:{" "}
                          <button
                            type="button"
                            className="hover:cursor-pointer bg-blue-800 p-[5px] rounded hover:bg-blue-600"
                            onClick={() => openLink("https://github.com/ismaelhtmljs/memobox")}
                          >
                            Repositorio
                          </button>
                        </p>
                      </div>
                    </div>
                    <div>
                      {/* img */}
                      <Image src="/memobox_pag1.png" alt="" width={350} height={100}/>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-5">
                {/*  */}
                <div className="bg-[#09203a] rounded">
                  <div className="flex flex-col-reverse">
                    <div className="flex flex-col p-[10px] gap-2.5">
                      <p className="text-xl">Project IDX</p>
                      <div className="flex flex-col gap-5">
                        <p>
                          Enlace:{" "}
                          <button
                            type="button"
                            className="hover:cursor-pointer bg-blue-800 p-[5px] rounded hover:bg-blue-600"
                            onClick={() => openLink("https://blog-project-idk.vercel.app/")}
                          >
                            Project IDX
                          </button>
                        </p>
                        <p>
                          Repositorio:{" "}
                          <button
                            type="button"
                            className="hover:cursor-pointer bg-blue-800 p-[5px] rounded hover:bg-blue-600"
                            onClick={() => openLink("https://github.com/ismaelhtmljs/blog-project-idk")}
                          >
                            Repositorio
                          </button>
                        </p>
                      </div>
                    </div>
                    <div>
                      {/* img */}
                      <Image src="/project_idx_img.png" alt="" width={350} height={100}/>
                    </div>
                  </div>
                </div>
                {/*  */}
                <div className="bg-[#09203a] rounded">
                  <div className="flex flex-col-reverse">
                    <div className="flex flex-col p-[10px] gap-2.5">
                      <p className="text-xl">GoAbstract</p>
                      <div className="flex flex-col gap-5">
                        <p>
                          Enlace:{" "}
                          <button
                            type="button"
                            className="hover:cursor-pointer bg-blue-800 p-[5px] rounded hover:bg-blue-600"
                            onClick={() => openLink("https://abstract-blog.vercel.app/")}
                          >
                            GoAbstract
                          </button>
                        </p>
                        <p>
                          Repositorio:{" "}
                          <button
                            type="button"
                            className="hover:cursor-pointer bg-blue-800 p-[5px] rounded hover:bg-blue-600"
                            onClick={() => openLink("https://github.com/ismaelhtmljs/Abstract-Blog")}
                          >
                            Repositorio
                          </button>
                        </p>
                      </div>
                    </div>
                    <div>
                      {/* img */}
                      <Image src="/goAbstract.png" alt="" width={350} height={100}/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
