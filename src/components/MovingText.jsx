import { useLayoutEffect, useRef } from "react";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Picture1 from '../assets/picture1.jpg';
import Picture2 from '../assets/picture2.jpg';
import Picture3 from '../assets/picture3.jpg';

gsap.registerPlugin(ScrollTrigger)
const word = "making a nex gen website";

export default function Index() {
    const container = useRef(null);
    const images = [Picture1, Picture2, Picture3];
    const lettersRef = useRef([])
    const imagesRef = useRef([])
    const title1 = useRef(null);

    useLayoutEffect(() => {

        const context = gsap.context(() => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: container.current,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: true,
                },
            })
                .to(title1.current, { y: -50 }, 0)
                .to(imagesRef.current[1], { y: -150 }, 0)
                .to(imagesRef.current[2], { y: -255 }, 0)

            lettersRef.current.forEach((letter, i) => {
                tl.to(letter, {
                    top: Math.floor(Math.random() * -75) - 25,
                }, 0)
            })

        })

        return () => context.revert();
    }, [])

    return (
        <div ref={container} >
            <div>
                <h1 ref={title1}>Welcome</h1>
                <h1 >To the future</h1>
                <div className="font-extrabold ">
                    <p>
                        {
                            word.split(" ").map((letter, i) => {
                                return <span key={`l_${i}`} ref={el => lettersRef.current[i] = el}>{letter}</span>
                            })
                        }
                    </p>
                </div>
            </div>
            <div >
                {
                    images.map((image, i) => {
                        return <div key={`i_${i}`} ref={el => el = imagesRef.current[i]} className="w-52 h-52">
                            <Image
                                src={image}
                                placeholder="blur"
                                alt="image"
                                fill
                            />
                        </div>
                    })
                }
            </div>
        </div>
    )
}