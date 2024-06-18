import { motion } from 'framer-motion'
import React from 'react'

function Marquee() {
  return (
    <div data-scroll data-scroll-section data-scroll-speed='.2' className='w-full py-10 bg-[#004D43] rounded-t-3xl'>
        <div className='text flex border-t-2 border-b-2 border-zinc-300 whitespace-nowrap overflow-hidden '>
            <motion.h1 initial={{x:"0"}} animate={{x:"-100%"}} transition={{repeat:Infinity , ease: "linear", duration: 10}} className='text-[15vw] leading-none font-bold uppercase pr-5 pb-5'>We are ochi</motion.h1>
            <motion.h1 initial={{x:"0"}} animate={{x:"-100%"}} transition={{repeat:Infinity , ease: "linear", duration: 10}} className='text-[15vw] leading-none font-bold uppercase pb-5'>We are ochi</motion.h1>
        </div>
    </div>
  )
}

export default Marquee