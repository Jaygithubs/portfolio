'use client';
import { motion,Variants } from "framer-motion";
import Link from "next/link";

const hero = () => {

  const textVarients:Variants = {
    offScreen:{
      y:20,
      opacity:0
    },
    onScreen:{
      y:0,
      opacity:1,
      transition:{
        duration:0.6,
        ease:'easeOut'
      }
    }
  }

  return (
    <div id='home'>
      <div className="min-h-screen flex justify-center items-center">
          <div className="space-y-5 text-center">
            <motion.div
            variants={textVarients}
            initial="offScreen"
            whileInView="onScreen"
            viewport={{once:false,amount:0.8}} 
            className="text-[clamp(2.5rem,5vw,7rem)]"><span className="font-bold">Crafted</span> <span className="italic">Websites</span></motion.div>

            <motion.div
            variants={textVarients}
            initial="offScreen"
            whileInView="onScreen"
            viewport={{once:false,amount:0.8}} 
            className="text-[clamp(2.5rem,5vw,7rem)]"><span className="italic">Lasting</span> <span className="font-bold">Impressions</span></motion.div>

            <motion.div
            variants={textVarients}
            initial="offScreen"
            whileInView="onScreen"
            viewport={{once:false,amount:0.8}} 
            className='text-xl'>Premium websites crafted for bold brands.</motion.div>
            <div className="space-x-3">
              <Link href="#contactus">
                <button className='bg-white text-black rounded-4xl px-4 py-1'>Get in touch</button>
              </Link>
              <Link href="#myworks">
                <button className='bg-neutral-700 px-4 py-1 rounded-4xl hover:bg-neutral-800 transition-background duration-300 ease-in-out'>See our work</button>
              </Link>
            </div>
          </div>
      </div>
    </div>
  )
}

export default hero
