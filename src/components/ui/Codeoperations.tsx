'use client'
import React from 'react';
import { motion } from 'framer-motion';

const codetext = `
const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());

app.get("/", (req, res) => { 
    res.sendFile(path.join(__dirname, "index.html"));
});

app.post("/add", (req, res) => {
    const { a, b } = req.body; 
    res.send({ result: parseInt(a) + parseInt(b) });
});

app.listen(5000, () => { 
    console.log("Server is running on port 5000.");
});
`;

export default function CodeOperations() {


    return (
        <div className='flex'>
            <div className='absolute top-[43%] left-2 flex items-center '>
                <motion.div
                    initial={{ x: '-50%', opacity: 0 }}
                    whileInView={{ x: '2%', opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: 'easeIn', stiffness: 50, delay: 0.1 }}
                    className=' border p-[2px] rounded shadow-sm bg-black/10 backdrop-blur-md shadow-white/40  border-white/10'>
                    <Iconfir></Iconfir>
                </motion.div>
                <motion.span
                    initial={{ x: '-50%', opacity: 0 }}
                    whileInView={{ x: '0', opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: 'easeIn', stiffness: 50, delay: 0.3 }}
                    className=' w-3 h-[1.5px] bg-white/20 -ml-1'></motion.span>
                <motion.div
                    initial={{ x: '-10%', opacity: 0 }}
                    whileInView={{ x: '0', opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: 'easeIn', stiffness: 50, delay: 0.5 }}
                    className="border-dashed border-2 w-72 border-white/50 bg-white/5 h-20 rounded-md ">
                </motion.div>
            </div>

            <div className=' text-sm  overflow-hidden [mask-image:radial-gradient(180px_circle_at_center,white,transparent)]'>
                <motion.pre
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: 'easeIn' }}
                    className='text-wrap flex justify-center pl-12 leading-4 -mt-5 h-full'
                >
                    <code className=' whitespace-pre-wrap tracking-tight'
                    >{codetext}</code>
                </motion.pre>
            </div>
        </div>
    );
}

function Iconfir() {
    return (
        <svg width="11" height="14" viewBox="0 0 11 14" className='size-4' fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M0.1875 8.76724C0.1875 6.28499 1.48855 4.35828 2.74307 3.07604C3.55341 2.24778 4.48186 1.52718 5.5 0.972168C6.49761 1.58953 7.42978 2.23061 8.25693 3.07604C9.51145 4.35828 10.8125 6.28499 10.8125 8.76724C10.8125 10.4398 10.1482 11.7247 9.133 12.5844C8.12807 13.4353 6.805 13.8493 5.50016 13.8498C4.19532 13.8502 2.87211 13.4372 1.86705 12.5863C0.851714 11.7267 0.1875 10.4413 0.1875 8.76724ZM5.5 7.44373C5.5 7.44373 3.3125 8.65972 3.3125 10.7877C3.3125 13.6223 7.6875 13.6192 7.6875 10.7877C7.6875 8.65972 5.5 7.44373 5.5 7.44373Z" fill="#D5D5D5" />
        </svg>
    );
}

