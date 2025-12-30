import React from 'react'

const services = () => {

  const serviceClasses="group p-20 m-3 flex flex-col items-center space-y-3 text-neutral-500 font-sans border rounded hover:shadow-xl/20 shadow-white transition-shadow duration-300 ease-in";
  
  return (
    <div className='pb-40 scroll-mt-24' id='services'>
      <div className="text-center text-[clamp(2.5rem,5vw,6rem)] pb-20">Services</div>
      <div className="container mx-auto">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          <div className={serviceClasses}>
            <svg xmlns="http://www.w3.org/2000/svg" className="icon text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" width="30" height="30">
              <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none" />
              <path d="M2 12h20M12 2a15 15 0 010 20M12 2a15 15 0 000 20" stroke="currentColor" strokeWidth="2" />
            </svg>
            <div className='group-hover:text-white transition-color duration-300 ease-in-out'>Crafted website</div>
          </div>

          <div className={serviceClasses}>
            <svg xmlns="http://www.w3.org/2000/svg" className="icon text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" width="30" height="30" >
              <path d="M15.232 5.232l3.536 3.536M9 13l3 3L19 9l-3-3-7 7v3h3z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <div className="group-hover:text-white transition-color duration-300 ease-in-out">Website Redesign</div>
          </div>

          <div className={serviceClasses}>
            <svg xmlns="http://www.w3.org/2000/svg" className="icon text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" width="30" height="30" >
              <circle cx="9" cy="21" r="1" stroke="currentColor" strokeWidth="2"/>
              <circle cx="20" cy="21" r="1" stroke="currentColor" strokeWidth="2"/>
              <path d="M1 1h4l2.68 13.39a2 2 0 002 1.61h9.72a2 2 0 002-1.61L23 6H6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <div className="group-hover:text-white transition-color duration-300 ease-in-out">eCommerce Website Design</div>
          </div>

          <div className={serviceClasses}>
            <svg xmlns="http://www.w3.org/2000/svg" className="icon text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" width="30" height="30" >
              <line x1="3" y1="6" x2="21" y2="6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              <line x1="3" y1="12" x2="21" y2="12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              <line x1="3" y1="18" x2="21" y2="18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
            <div className="group-hover:text-white transition-color duration-300 ease-in-out">CMS & Dynamic Websites</div>
          </div>

          <div className={serviceClasses}>
            <svg xmlns="http://www.w3.org/2000/svg" className="icon text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" width="30" height="30" >
              <path d="M2 12l19-7-7 19-3-7-7-3z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" strokeLinecap="round"/>
            </svg>
            <div className="group-hover:text-white transition-color duration-300 ease-in-out">Landing Pages & Microsites</div>
          </div>
          <div className={serviceClasses}>
            <svg xmlns="http://www.w3.org/2000/svg" className="icon text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" width="30" height="30" >
              <path d="M9 19h6v-2a2 2 0 012-2h2v-4h-2a2 2 0 01-2-2v-2H9v2a2 2 0 01-2 2H5v4h2a2 2 0 012 2v2z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" strokeLinecap="round"/>
            </svg>
            <div className="group-hover:text-white transition-color duration-300 ease-in-out">Consistent Identity</div>
          </div>
          <div className={serviceClasses}>
            <svg xmlns="http://www.w3.org/2000/svg" className="icon text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" width="30" height="30" >
              <path d="M13 2L3 14h7l-1 8 10-12h-6l1-8z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" strokeLinecap="round"/>
            </svg>
            <div className="group-hover:text-white transition-color duration-300 ease-in-out">Motion & Interaction Design</div>
          </div>
          <div className={serviceClasses}>
            <svg xmlns="http://www.w3.org/2000/svg" className="icon text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"  width="30" height="30">
              <line x1="22" y1="2" x2="11" y2="13" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              <polygon points="22 2 15 22 11 13 2 9 22 2" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
            </svg>
            <div className="group-hover:text-white transition-color duration-300 ease-in-out">UX Centric Strategy</div>
          </div>
          <div className={serviceClasses}>
            <svg xmlns="http://www.w3.org/2000/svg" className="icon text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" width="30" height="30">
              <path d="M9 21l-2-2 5-5-3-3 5-5 5 5-3 3 5 5-2 2-4-4-3 3z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" strokeLinecap="round"/>
            </svg>
            <div className="group-hover:text-white transition-color duration-300 ease-in-out">Performance Optimization</div>
          </div>
          <div className={serviceClasses}>
              <svg xmlns="http://www.w3.org/2000/svg" className="icon text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" width="30" height="30">
                <path d="M14.7 6.3a6.7 6.7 0 018.3 8.3l-4.3-4.3a3 3 0 01-4.2 0l-5.5 5.5a3 3 0 010-4.2l4.3-4.3zM3 17.25V21h3.75l11-11-3.75-3.75L3 17.25z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" strokeLinecap="round"/>
              </svg>
              <div className="group-hover:text-white transition-color duration-300 ease-in-out">Maintenance & Ongoing Support</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default services
