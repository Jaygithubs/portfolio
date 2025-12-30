'use client';
import Link from "next/link"
import { useState } from "react";

const header = () => {

  const [open,setOpen]=useState(false);


  return (
    <nav className="backdrop-blur-[2px] sticky top-0 p-5 z-10 bg-white/10 w-full" >
        <div className="flex justify-between items-center">
            <div className="text-3xl font-sans">Jay<span className="italic">Sharma.</span></div>
            <div className="space-x-5 hidden md:block">
                <Link className="hover:text-white/50" href="#home">Home</Link>
                <Link className="hover:text-white/50" href="#aboutme">About Me</Link>
                <Link className="hover:text-white/50" href="#experience">My Experience</Link>
                <Link className="hover:text-white/50" href="#services">Services</Link>
                <Link className="hover:text-white/50" href="#myworks">My works</Link>
                <Link className="hover:text-white/50" href="#footer">Contact</Link>
            </div>
            <div className="flex items-center space-x-2">
              <Link href="#footer" className="border rounded-4xl px-4 py-1">Get in touch</Link>
              <svg onClick={() => setOpen(!open)} className="w-8 h-8 text-gray-800 dark:text-white md:hidden" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18 6H6m12 4H6m12 4H6m12 4H6"/>
              </svg>
            </div>    

        </div>
        {/* mobile links */}
          <div className={`space-y-5 overflow-hidden transition-all duration-300 ease-in-out flex flex-col md:hidden ${open? 'max-h-96 opacity-100 py-5' : 'max-h-0 opacity-0' }`} >
              <Link className="hover:text-white/50" href="#home">Home</Link>
              <Link className="hover:text-white/50" href="#aboutme">About Me</Link>
              <Link className="hover:text-white/50" href="#experience">My Experience</Link>
              <Link className="hover:text-white/50" href="#services">Services</Link>
              <Link className="hover:text-white/50" href="#myworks">My works</Link>
              <Link className="hover:text-white/50" href="#footer">Contact</Link>
          </div>
    </nav>
  )
}

export default header
