'use client'
import { motion,Variants } from "framer-motion"
import Image from "next/image"
import Link from "next/link"

const Mywork = () => {

  const workCardVarient:Variants={
    screenOff:{
      y:50,
      opacity:0
    },
    screenOn:{
      y:0,
      opacity:1,
      transition:{
        duration:0.5,
        ease:'easeIn'
      }
    }
  } 

  return (
    <div className="pb-40 scroll-mt-24" id="myworks">
      <div className="text-center text-[clamp(2.5rem,5vw,6rem)] pb-20"><span className="italic">My </span>Works</div>
      <div className="container mx-auto px-5 md:px-20 space-y-10">
      <motion.div 
      className="border-4 rounded overflow-hidden"
      variants={workCardVarient}
      initial="screenOff"
      whileInView="screenOn"
      viewport={{once:false,amount:0.5}}
      >
          <Link href="https://beggarscorporation.com/" target="_blank">
        <Image src="/experiences/exp-1.png" alt="website-1" width={1352} height={596} />
      </Link>
      </motion.div>
      
      <motion.div 
      className="border-4 rounded overflow-hidden"
      variants={workCardVarient}
      initial="screenOff"
      whileInView="screenOn"
      viewport={{once:false,amount:0.5}}
      >
          <Link href="https://beggingfreedehradun.in/" target="_blank">
        <Image src="/experiences/exp-2.png" alt="website-1" width={1352} height={596} />
      </Link>
      </motion.div>
      
      <motion.div
       className="border-4 rounded overflow-hidden"
       variants={workCardVarient}
      initial="screenOff"
      whileInView="screenOn"
      viewport={{once:false,amount:0.5}}
       >
        <Link href="https://youth4employment.com/" target="_blank">
        <Image src="/experiences/exp-3.png" alt="website-1" width={1352} height={596} />
      </Link>
      </motion.div>
      
      <motion.div
       className="border-4 rounded overflow-hidden"
       variants={workCardVarient}
      initial="screenOff"
      whileInView="screenOn"
      viewport={{once:false,amount:0.5}}
       >
        <Link href="https://suryakantham.io/" target="_blank">
        <Image src="/experiences/exp-4.png" alt="website-1" width={1352} height={596} />
      </Link>
      </motion.div>
      
      </div>
    </div>
  )
}

export default Mywork
