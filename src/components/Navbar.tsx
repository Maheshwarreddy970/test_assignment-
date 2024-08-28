import React from 'react'


const List = ['Our Focus', 'Why us', 'Our Approach', 'Our Team']

export default function Navbar() {
    return (
        <nav className=' relative z-50 bg-black h-14 border-b  border-white/20 flex items-center justify-center'>
            <ul className=' sm:flex gap-5 hidden '>
                {
                    List.map((item, i) => (
                        <li key={i} className=' text-white text-opacity-70 hover:text-opacity-100 cursor-pointer'>
                            {item}
                        </li>
                    ))
                }
            </ul>
            <button className=" absolute hover:shadow-sm hover:shadow-white/20 right-2 justify-self-end inline-flex overflow-hidden rounded-full border border-white/20 p-px">
                <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full px-3 py-1 font-medium text-gray-50 backdrop-blur-3xl">
                    Join the Revolution
                </span>
            </button>
        </nav>
    )
}
