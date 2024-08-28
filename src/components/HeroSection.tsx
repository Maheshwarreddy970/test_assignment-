'use client'

import React from 'react'
import { motion } from 'framer-motion';

const FADE_UP_ANIMATION_VARIANTS = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 50 } },
};

export default function HeroSection() {

    return (
        <div className=' relative w-full mt-28 pb-56 sm:pb-96'>
            <motion.div
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                variants={{
                    hidden: {},
                    show: {
                        transition: {
                            staggerChildren: 0.3,
                        },
                    },
                }}
                className='w-full flex flex-col items-center gap-7'
            >
                <motion.p
                    variants={FADE_UP_ANIMATION_VARIANTS}
                    className='tracking-wide font-medium text-center text-4xl sm:text-6xl  max-w-2xl'>Where Wall Street Meets the Blockchain</motion.p>
                <motion.p
                    variants={FADE_UP_ANIMATION_VARIANTS}
                    className='text-white text-opacity-70 px-5 text-center'>Pioneering the Future of Finance Through Strategic SPACs and Mergers</motion.p>
                <motion.button
                    variants={FADE_UP_ANIMATION_VARIANTS}
                    className=" rounded-full px-5 py-2.5 font-semibold  bg-white text-black ">Explore Our Vision</motion.button>
            </motion.div>
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: 'easeIn' }}
                className=' absolute rounded-full hidden sm:flex  -top-[65%]  left-1/2 h-[30rem] w-[80%] md:h-[50rem] md:w-[50rem] -z-10 -translate-x-1/2 bg-white/15 blur-3xl  lg:h-[56rem] lg:w-[56rem] lg:blur-[128px]'>
            </motion.div>
            <div className=' absolute rounded-full hidden sm:flex -top-[65%] left-1/2 h-[30rem] w-[80%] md:h-[50rem] md:w-[50rem] -z-10 -translate-x-1/2 bg-black lg:h-[56rem] lg:w-[56rem] '></div>
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: 'easeIn', }}
                className="absolute  -top-96 lg:-top-[35rem] h-96 w-96  sm:left-[30%] rounded-full bg-white/25 blur-3xl lg:h-[32rem] lg:w-[32rem] lg:blur-[128px]"
            ></motion.div>
        </div>
    )
}
