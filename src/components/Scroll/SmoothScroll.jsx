import React, { useLayoutEffect, useRef } from 'react'
import Picture5 from '../../assets/picture5.jpg';
import Picture7 from '../../assets/picture7.jpg';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function Index() {

    const background = useRef(null);
    const introImage = useRef(null);

    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const timeline = gsap.timeline({
            scrollTrigger: {
                trigger: document.documentElement,
                scrub: true,
                start: "top",
                end: "+=500px",
            },
        })

        timeline
            .from(background.current, { clipPath: `inset(15%)` })
            .to(introImage.current, { height: "200px" }, 0)
    }, [])

    return (
        <div className="relative w-full flex h-[140vh] justify-center overflow-hidden ">
            <div className="w-full h-[140vh] absolute brightness-[60%] " ref={background}>
                <img
                    src={Picture5}
                    alt="background image"
                    className='object-cover'
                    priority='high'
                />
            </div>
            <div className="flex justify-center relative mt-[35vh] ">
                <div ref={introImage} data-scroll data-scroll-speed="0.5" className=" brightness-[70%]  w-[350px] h-[475px] absolute ">
                    <img
                        src={Picture7}
                        alt="intro image"
                        className='object-cover object-top'
                        priority='high'
                    />
                </div>
                <h1 data-scroll data-scroll-speed="0.5" className='text-white text-7xl z-30 text-center whitespace-nowrap ' >SMOOTH SCROLL</h1>
            </div>
        </div>
    )
}