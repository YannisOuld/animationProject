import React from 'react'
import GradientCursor from "./GradientCursor";
import { useState } from 'react';

export default function Hero() {
    const [isActive, setIsActive] = useState(false);

    return (
        <div className='h-[100vh] flex items-center justify-center'>
            <h1 onMouseOver={() => { setIsActive(true) }} onMouseLeave={() => { setIsActive(false) }} className="text-[4.5vw]  text-center text-white z-50 p-20">
                Welcome into my website.</h1>
            <GradientCursor isActive={isActive} />
        </div>
    )
}