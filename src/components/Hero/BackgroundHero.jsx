import React from 'react'
import Cursor from "../Cursor/Cursor";
import { useState } from 'react';

export default function BackgroundHero() {
    const [isActive, setIsActive] = useState(false);

    return (
        <div className='absolute  top-52 right-0 left-0 bottom-0'>
            <h1 onMouseOver={() => { setIsActive(true) }} onMouseLeave={() => { setIsActive(false) }} className="text-[4.5vw] text-center text-white p-20">
                moving when you scroll</h1>
            <Cursor isActive={isActive} />
        </div>
    )
}