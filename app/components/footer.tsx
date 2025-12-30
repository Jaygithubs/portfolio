import Link from "next/link"

const footer = () => {

  const currentYear = new Date().getFullYear();

  return (
    <div className='bg-white/2 backdrop-blur-[2px] border-t border-white/30' id="footer">
      
      <div className="container mx-auto border-l border-r border-white/30">

        <div className="grid grid-cols-1 md:gird-cols-3 lg:grid-cols-3 font-sans">

        <div>
          <Link href="https://www.instagram.com/jay.websitedeveloper/" target="_blank">
            <div className="flex justify-between p-5 border-b border-white/30">
              <div className='flex gap-2 items-center'>
              <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path fill="currentColor" fillRule="evenodd" d="M3 8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8Zm5-3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H8Zm7.597 2.214a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2h-.01a1 1 0 0 1-1-1ZM12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm-5 3a5 5 0 1 1 10 0 5 5 0 0 1-10 0Z" clipRule="evenodd" />
              </svg>
                <h4>Instagram</h4>
              </div>
              <div>
                <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 12H5m14 0-4 4m4-4-4-4" />
                </svg>

              </div>
            </div>
          </Link>
          <div className="font-sans pt-10 p-5 space-y-2">
            <h4 className="text-neutral-400 pb-3">Services</h4>
            <div className="text-neutral-300"><Link href="#services">Crafted Websites</Link></div>
            <div className="text-neutral-300"><Link href="#services">Website Redesign</Link></div>
            <div className="text-neutral-300"><Link href="#services">eCommerce Design</Link></div>
            <div className="text-neutral-300"><Link href="#services">CMS & Dynamic Sites</Link></div>
          </div>
        </div>

        <div className='border-l border-white/30'>
        <Link href="https://www.linkedin.com/in/jay-sharma-647687272/" target="_blank">
          <div className="flex justify-between p-5 border-b border-white/30">
            <div className='flex gap-2 items-center'>
              <svg className="w-5 h-5 rounded text-gray-800 bg-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M12.51 8.796v1.697a3.738 3.738 0 0 1 3.288-1.684c3.455 0 4.202 2.16 4.202 4.97V19.5h-3.2v-5.072c0-1.21-.244-2.766-2.128-2.766-1.827 0-2.139 1.317-2.139 2.676V19.5h-3.19V8.796h3.168ZM7.2 6.106a1.61 1.61 0 0 1-.988 1.483 1.595 1.595 0 0 1-1.743-.348A1.607 1.607 0 0 1 5.6 4.5a1.601 1.601 0 0 1 1.6 1.606Z" clipRule="evenodd" />
                <path d="M7.2 8.809H4V19.5h3.2V8.809Z" />
              </svg>
              <h4>LinkedIn</h4>
            </div>
            <div>
              <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 12H5m14 0-4 4m4-4-4-4" />
              </svg>

            </div>
          </div>
        </Link>
          <div className="font-sans pt-10 p-5 space-y-2">
            <h4 className="text-neutral-400 pb-3">Important Links</h4>
            <div className="text-neutral-300"><Link href="#myworks">My work</Link></div>
            <div className="text-neutral-300"><Link href="#aboutme">About me</Link></div>
            <div className="text-neutral-300"><Link href="#experience">My Experience</Link></div>
            <div className="text-neutral-300"><Link href="#faq">FAQ's</Link></div>
          </div>
        </div>

        <div className='border-l border-white/30'>
          <Link href="https://github.com/Jaygithubs" target="_blank">
            <div className="flex justify-between border-b border-white/30 p-5">
              <div className='flex gap-2 items-center'>
                <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12.006 2a9.847 9.847 0 0 0-6.484 2.44 10.32 10.32 0 0 0-3.393 6.17 10.48 10.48 0 0 0 1.317 6.955 10.045 10.045 0 0 0 5.4 4.418c.504.095.683-.223.683-.494 0-.245-.01-1.052-.014-1.908-2.78.62-3.366-1.21-3.366-1.21a2.711 2.711 0 0 0-1.11-1.5c-.907-.637.07-.621.07-.621.317.044.62.163.885.346.266.183.487.426.647.71.135.253.318.476.538.655a2.079 2.079 0 0 0 2.37.196c.045-.52.27-1.006.635-1.37-2.219-.259-4.554-1.138-4.554-5.07a4.022 4.022 0 0 1 1.031-2.75 3.77 3.77 0 0 1 .096-2.713s.839-.275 2.749 1.05a9.26 9.26 0 0 1 5.004 0c1.906-1.325 2.74-1.05 2.74-1.05.37.858.406 1.828.101 2.713a4.017 4.017 0 0 1 1.029 2.75c0 3.939-2.339 4.805-4.564 5.058a2.471 2.471 0 0 1 .679 1.897c0 1.372-.012 2.477-.012 2.814 0 .272.18.592.687.492a10.05 10.05 0 0 0 5.388-4.421 10.473 10.473 0 0 0 1.313-6.948 10.32 10.32 0 0 0-3.39-6.165A9.847 9.847 0 0 0 12.007 2Z" clipRule="evenodd" />
                </svg>

                <h4>GitHub</h4>
              </div>
              <div>
                <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 12H5m14 0-4 4m4-4-4-4" />
                </svg>

              </div>
            </div>
          </Link>
          <div className="font-sans pt-10 p-5 space-y-2">
            <h4 className="text-neutral-400 pb-3">Contact</h4>
            <div className="text-neutral-300"><a href="mailto:jaywebdeveloper@gmail.com">Email: jaywebdeveloper@gmail.com</a></div>
            <div className="text-neutral-300"><a href="tel:+918953338875">Phone: +91 8953338875</a></div>
          </div>
        </div>

      </div>

      </div>

      <div className="text-center border-t py-3 font-sans text-sm">
        <p>© {currentYear}. All rights reserved.</p>
      </div>
    </div>
  )
}

export default footer
