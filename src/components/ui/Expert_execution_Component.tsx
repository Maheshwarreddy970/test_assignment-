'use client'

import React from 'react'
import { motion } from 'framer-motion';

const list = ['SPAC', 'MERGERS', 'BLOCKCHAIN']

export default function ExpertexecutionComponent() {
    return (
        <div className=' absolute -bottom-3 w-full px-9 '>
            {
                list.map((text, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: 'easeIn' }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className='w-full'
                    >
                        <InnerGlowButton text={text}></InnerGlowButton>
                        <div className=' w-full flex flex-col items-center -mt-[0.5rem]' >
                            <span className='size-4 border rounded-full z-10 bg-[#1A1A1D] border-[#46484B]'></span>
                            <span className='h-7 w-[1px] bg-gradient-to-b from-[#46484B] to-[#FFFFFF]'></span>
                        </div>
                    </motion.div>
                ))
            }
        </div>
    )
}

function InnerGlowButton({ text }: { text: string }) {
    return (
        <div className=' relative bg-[#101012] z-10 overflow-hidden  rounded-2xl border border-white/10 h-[4.5rem] flex items-center justify-center'>
            <div className="absolute z-10 right-0 top-0 h-px w-80 bg-gradient-to-l from-transparent via-white/30 via-10% to-transparent" />
            <div className="absolute -top-0 -right-0  h-20 w-20  rounded-full bg-white/25 blur-3xl"></div>
            <p className=' text-center text-lg font-medium'>
                {text}
            </p>
        </div>
    )
}
