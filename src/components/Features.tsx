"use client"

import React from 'react'
import ExpertexecutionComponent from './ui/Expert_execution_Component'
import Card from './ui/Card'
import Codeoperations from './ui/Codeoperations'
import Criptomarker from './ui/Criptomarker'
import { motion } from 'framer-motion';


const FADE_UP_ANIMATION_VARIANTS = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 50 } },
};

const FeturesList = [
    {
        Heading: 'Expert execution of SPACs and Mergers',
        component: <ExpertexecutionComponent></ExpertexecutionComponent>,
    },
    {
        Heading: 'Tech-forward approach to financial operations',
        component: <Codeoperations></Codeoperations>,
    },
    {
        Heading: 'Deep understanding of both traditional and crypto markets',
        component: <Criptomarker></Criptomarker>,
    },
]

export default function Features() {
    return (
        <div className='w-full flex flex-col items-center pb-96'>
            <div className='max-w-6xl w-full sm:px-0 px-5'>
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
                    className=' flex flex-col gap-1 mb-12'>
                    <motion.p
                        variants={FADE_UP_ANIMATION_VARIANTS}
                        className='uppercase text-sm sm:text-base'>Next Layer Advantage</motion.p>
                    <motion.p
                        variants={FADE_UP_ANIMATION_VARIANTS}
                        className='tracking-wide font-medium [font-size:1.9rem] sm:[font-size:2.8rem]'>Uniquely Positioned for Success</motion.p>
                    <motion.p
                        variants={FADE_UP_ANIMATION_VARIANTS}
                        className='text-white text-opacity-70 text-sm sm:text-base'>Leveraging Our Expertise in Both Traditional and Crypto Markets</motion.p>
                </motion.div>
                <div className=' grid grid-cols-1 place-items-center lg:grid-cols-3  gap-8'>
                    {
                        FeturesList.map((item, i) => (
                            <Card key={i} Heading={item.Heading}>
                                {item.component}
                            </Card>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}
