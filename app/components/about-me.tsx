import React from 'react'

const aboutme = () => {
  return (
    <div className='pb-40 scroll-mt-24 p-5' id='aboutme'>
        <div className="container mx-auto space-y-5">
        <div className="text-[clamp(2.5rem,5vw,6rem)] pb-10 border-b border-white/20">About<span className="italic"> Me</span></div>
          <div className='text-xl font-sans'>Passionate Full Stack Web Developer with 1.5 years of professional experience. Worked as the sole developer managing 4 company websites. Skilled in JavaScript, React.js, Node.js, PHP, WordPress, and custom plugin/theme development.</div>
          <div className='text-xl font-sans'>Experienced in API integration, responsive UI, and eCommerce projects. Currently pursuing BCA while building modern web applications and enhancing full stack expertise.</div>
          <div className="font-bold">EDUCATION</div>
          <div>Bachelor of Computer Application (BCA)</div>
          <div>Mahatma Gandhi Kashi Vidyapith University</div>
          <div>Sep 2023 – Oct 2025 (Expected)</div>
        </div>
    </div>
  )
}

export default aboutme
