"use client"

import { cn } from '@/lib/utils'
import React from 'react'
import { motion } from "framer-motion";
import Brainicon from '@/icons/brainicon';


export default function Criptomarker() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 2, ease: 'easeIn' }}
            className=' h-full w-full flex justify-center items-start pt-[3.2rem] '>
            <Brainicon></Brainicon>
            <HorVector className='left-0'></HorVector>
            <HorVector className='right-0'></HorVector>
            {
                positionVerVector.map((data, i) => (
                    <div key={i}>
                        <VerVector className={` ${data.position}`}></VerVector>
                        <VectorMovingLine className={`rotate-90 -ml-[27.6px] ${data.position}`} variants={data.vector} delay={data.delay} ></VectorMovingLine>
                    </div>
                ))
            }
            <VectorMovingLine variants={vector1} delay={0.5}></VectorMovingLine>
            <VectorMovingLine variants={vector2}></VectorMovingLine>
        </motion.div>
    )
}



function VerVector({ className }: { className?: string }) {
    return (
        <svg width="4" height="195" className={cn('absolute -bottom-6', className)} viewBox="0 0 2 150" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 0.0999756V150.1" stroke="#292A2E" />
        </svg>
    )
}

function HorVector({ className }: { className?: string }) {
    return (
        <svg className={cn('absolute top-1/2 ', className)} width="112" height="4" viewBox="0 0 112 2" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M-90 1.09998H112" stroke="#292A2E" />
        </svg>

    )
}
function VectorMovingLine({ variants, className, delay }: {
    delay?: number, className?: string, variants?: {
        initial: {
            left?: string;
            top?: string;
            right?: string;
            bottom?: string;
        };
        animate: {
            left?: string;
            right?: string;
            top?: string;
            bottom?: string;

        };
    }
}) {
    return (
        <motion.svg
            transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: "loop",
                ease: "linear",
                delay: delay,
            }}
            variants={variants}
            initial={"initial"}
            animate={'animate'}

            width="58" height="5" className={cn('absolute', className)} viewBox="0 0 58 5" fill="none" xmlns="http://www.w3.org/2000/motion.svg">
            <path d="M57.5 2.09998H0" stroke="url(#paint0_linear_1_2683)" />
            <circle cx="31" cy="2.09998" r="2" fill="#CECFD0" />
            <defs>
                <linearGradient id="paint0_linear_1_2683" x1="57.5" y1="2.09998" x2="0" y2="2.09998" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#CECFD0" stop-opacity="0" />
                    <stop offset="0.570052" stop-color="#CECFD0" />
                    <stop offset="1" stop-color="#CECFD0" stop-opacity="0" />
                </linearGradient>
            </defs>
        </motion.svg>
    )
}

const positionVerVector =
    [
        {
            position: 'left-[39%]',
            vector: {
                initial: {
                    bottom: "-10%",
                },
                animate: {
                    bottom: "50%",
                },
            },
            delay: 0.3,
        },
        {
            position: 'left-[42%]',
            vector: {
                initial: {
                    bottom: "-10%",
                },
                animate: {
                    bottom: "50%",
                },
            },
            delay: 0.1,
        },
        {
            position: 'left-[45%]',
            vector: {
                initial: {
                    bottom: "-10%",
                },
                animate: {
                    bottom: "50%",
                },
            },
            delay: 0.9,

        },
        {
            position: 'left-[48%]',
            vector: {
                initial: {
                    bottom: "-10%",
                },
                animate: {
                    bottom: "50%",
                },
            },
            delay: 0,

        },
        {
            position: 'left-[51%]',
            vector: {
                initial: {
                    bottom: "-10%",
                },
                animate: {
                    bottom: "50%",
                },
            },
            delay: 1,

        },
        {
            position: 'left-[54%]',
            vector: {
                initial: {
                    bottom: "-10%",
                },
                animate: {
                    bottom: "50%",
                },
            },
            delay: 0.2,

        },
        {
            position: 'left-[57%]',
            vector: {
                initial: {
                    bottom: "-10%",
                },
                animate: {
                    bottom: "50%",
                },
            },
            delay: 0.9,

        },
        {
            position: 'left-[60%]',
            vector: {
                initial: {
                    bottom: "-10%",
                },
                animate: {
                    bottom: "50%",
                },
            },
            delay: 0.5,

        },

    ]


const vector1 = {
    initial: {
        left: "0%",
        top: "50%",
    },
    animate: {
        left: "50%",
    },
};
const vector2 = {
    initial: {
        right: "0%",
        top: "50%",
    },
    animate: {
        right: "50%",
    },
};

