'use client'

import React from 'react'
import { motion } from 'framer-motion';


export default function Card({ Heading, children }: { Heading: string, children: React.ReactNode }) {
    return (
        <div className=' rounded-3xl h-[27.5rem] w-[22.6rem]'>
            <div className=' relative rounded-3xl h-full w-full p-[1px] bg-gradient-to-tr from-black via-black to-white/60'>
                <div className=' relative w-full h-full bg-[#0E1014] rounded-3xl  overflow-hidden '>
                    <div className="absolute -top-36 -right-36  h-10 w-10  rounded-full bg-white/25 blur-3xl lg:h-[20rem] lg:w-[20rem] lg:blur-[128px]"></div>
                    <div className="absolute -bottom-36  -left-36  h-10 w-10  rounded-full bg-white/25 blur-3xl lg:h-[20rem] lg:w-[20rem] lg:blur-[128px]"></div>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ ease: 'easeIn', duration: 1, }}
                        className=' mx-6 mt-6'>{Heading}
                    </motion.p>
                    {children}
                </div>
                <div className='absolute top-0 flex right-0 w-[70%] justify-center'>
                    <div className='h-[1.5px] animate-border-width rounded-full bg-gradient-to-r from-[rgba(17,17,17,0)] via-white to-[rgba(17,17,17,0)] transition-all duration-1000' />
                </div>
            </div>
        </div>
    )
}
