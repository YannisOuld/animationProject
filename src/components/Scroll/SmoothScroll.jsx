import React, { useLayoutEffect, useRef } from 'react'
import Picture5 from '../../assets/picture5.jpg';
import Picture6 from '../../assets/picture6.jpg';
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
        <div className="relative w-full flex justify-center">
            <div className="w-full h-[140vh] absolute brightness-[60%] " ref={background}>
                <img
                    src={Picture6}
                    fill={true}
                    alt="background image"
                    priority={true}
                    className='object-cover'
                />
            </div>
            <div className="flex justify-center relative mt-[35vh] ">
                <div ref={introImage} data-scroll data-scroll-speed="0.3" className=" brightness-[70%]  w-[350px] h-[475px] absolute ">
                    <img
                        src={Picture5}
                        alt="intro image"
                        fill={true}
                        priority={true}
                        className='object-cover object-top'
                    />
                </div>
                <h1 data-scroll data-scroll-speed="0.7" className='text-white text-7xl z-30 text-center whitespace-nowrap ' >SMOOTH SCROLL</h1>
            </div>
        </div>
    )
}