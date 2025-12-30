'use client';
import { motion,Variants } from "framer-motion"

const showoff = () => {

  const textVariants:Variants = {
  offscreen: {
    opacity: 0,
  },
  onscreen: {
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
};

  return (
    <div className="min-h-screen flex justify-center items-center scroll-mt-24">
      <div className="space-y-2 text-center">
        <motion.div 
        className="text-[clamp(2.5rem,5vw,6rem)] font-bold"
        variants={textVariants}
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: false, amount: 0.8 }}
        >Create Bold.</motion.div>
        <motion.div
         className="text-[clamp(2.5rem,5vw,6rem)] font-bold"
         variants={textVariants}
         initial="offscreen"
         whileInView="onscreen"
         viewport={{ once: false, amount: 0.8 }}
         >Deliver Better.</motion.div>
        <div className="text-center space-x-5">
            <button className="bg-white text-black rounded-4xl px-4 py-1">See our work</button>
            <button className="bg-neutral-700 px-4 py-1 rounded-4xl hover:bg-neutral-800 transition-background duration-300 ease-in-out">Get in touch</button>
        </div>
      </div>
    </div>
  )
}

export default showoff
