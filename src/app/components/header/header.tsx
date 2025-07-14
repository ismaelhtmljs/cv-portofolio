"use client"
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import '@/app/components/css/responsive.css'
import { IoMenuSharp } from "react-icons/io5";
import Header_Mobil from './header-mobil/header_mobil';

export default function Header(){
  const [OpenHeaderMobil, SetCloseHeaderMobil] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) => 
    pathname === href ? 'text-green-500' : 'text-white';

  return (
    <>
      <header className="p-5 bg-[#09203a] sticky top-0 z-[100]">
        <div className="flex justify-evenly items-center">
          <div>
            <h1 className="text-[36px] poppins-bold header-tittle-res">
              {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
              <a href="/">Ismael Alexis</a>
            </h1>
          </div>
          <nav className='header-nav-res'>
            <ul className="flex gap-[30px] items-center">
              {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
              <li><a href="/" className={`poppins-bold text-xl hover:text-green-500 ${isActive('/')}`}>Home</a></li>
              <li><a href="/sites/about" className={`poppins-bold text-xl hover:text-green-500 ${isActive('/sites/about')}`}>About</a></li>
              <li><a href="/sites/education" className={`poppins-bold text-xl hover:text-green-500 ${isActive('/sites/education')}`}>Education</a></li>
              <li><a href="/sites/projects" className={`poppins-bold text-xl hover:text-green-500 ${isActive('/sites/projects')}`}>Projects</a></li>
              <li><a href="/sites/skills" className={`poppins-bold text-xl hover:text-green-500 ${isActive('/sites/skills')}`}>Skills</a></li>
            </ul>
          </nav>
          <IoMenuSharp 
            className='hidden header-menu-res text-[30px]'
            onClick={() => SetCloseHeaderMobil(true)}
          />
        </div>
      </header>

      {OpenHeaderMobil && (
        <Header_Mobil onClose={() => SetCloseHeaderMobil(false)} />
      )}
    </>
  );
}
