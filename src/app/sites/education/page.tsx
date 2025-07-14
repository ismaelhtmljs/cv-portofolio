import Header from "@/app/components/header/header";
import Image from "next/image";
import "@/app/sites/about/about.css";

export default function Education() {
  return (
    <>
      <Header />
      <main className="flex justify-center">
        <div className="w-[840px]">
          {/*  */}
          <div className="flex flex-col p-[30px]">
            <div className="p-5">
              <h2 className="text-[17px] tracking-[2px] about">
                <strong>Education</strong>
              </h2>
            </div>
            <div className="flex flex-col w-fit">
              <div>
                <Image src="/upn_logo.png" alt="" width={315} height={162} />
              </div>
              <div className="bg-[#09203a]">
                <div className="p-[10px]">
                  <p>
                    <i>Bachiller en Ingeniería de Sistemas</i>
                  </p>
                  <p className="p-[0px 10px] text-[20px]">Janurary 2016 - 2021</p>
                  <p>Relevant Coursework : </p>
                  <ul className="list-disc pl-5">
                    <li>Distributed Database Systems</li>
                    <li>Database Management Systems</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
