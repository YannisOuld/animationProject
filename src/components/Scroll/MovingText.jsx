import { useLayoutEffect, useRef } from "react";

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Picture1 from '../../assets/picture1.jpg';
import Picture2 from '../../assets/picture2.jpg';
import Picture3 from '../../assets/picture3.jpg';

gsap.registerPlugin(ScrollTrigger)


export default function Index() {

    const container = useRef(null);
    const images = [Picture1, Picture2, Picture3];
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
                    yoyo: true
                },
            })
                .to(title1.current, { y: 0, stagger: 0.05, delay: 0.2, duration: 0.1 }, 0)
                .to(imagesRef.current[1], { y: -550 }, 0)
                .to(imagesRef.current[2], { y: -350 }, 0)
                .to(imagesRef.current[0], { y: -100 }, 0)



        })

        return () => context.revert();
    }, [])

    return (
        <div ref={container} className="w-full mx-auto p-20 flex justify-between bg-slate-950">
            <div className=" block w-1/2">
                <h1 ref={title1} className="text-[3vw]   text-white z-50 pr-20 pt-20">Welcome To the future</h1>


                <div className="font-extrabold ">
                    <p className="text-white text-4xl">
                        making the impossible possible
                    </p>
                </div>
                <p className="text-md  text-white z-50 mr-40 mt-28 tracking-wider">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque numquam ullam velit eius? Sunt, iure totam soluta praesentium exercitationem eum reprehenderit, recusandae temporibus modi nesciunt vero. Tempore officia soluta asperiores.
                    Perspiciatis fugiat, natus cumque maiores quaerat doloremque. Suscipit iure quis officiis saepe placeat quas fugiat quisquam, eaque veniam esse minus nobis reprehenderit facere eius explicabo sint iste illo nisi neque?
                    Sequi ullam illo dolorem iusto corporis labore nihil? Quo libero doloremque ab, odit mollitia cupiditate sed error. Dignissimos ut iure deserunt, pariatur doloribus consequuntur ipsam odit. Laborum nemo molestias perspiciatis?
                    Veniam porro consequatur, tenetur rerum sint molestias doloribus pariatur voluptate sed saepe voluptatem, impedit suscipit possimus, quo doloremque facere minus ab aliquam asperiores non laudantium quis illo illum! Corporis, minus.
                    Quasi amet non vitae tempore quia, ipsam temporibus. Commodi amet quam cumque laborum neque aperiam incidunt fugit qui quasi. Voluptatum animi laudantium necessitatibus quo iste, eos nihil minus itaque cum?
                    Natus minima accusantium illo tenetur nostrum ad, quasi nesciunt quod ab rem fugit cum, ipsa asperiores dicta dolor ipsam? Nihil quisquam natus porro maxime dolorem nam consequatur voluptates magni rem!
                    Nesciunt qui asperiores libero fugiat nostrum quibusdam nemo quae sint excepturi. Totam repellat, vel natus suscipit quos quaerat? Facilis, ullam velit. Harum fuga necessitatibus unde, at corrupti sequi consequuntur veniam?
                    Iste expedita reiciendis amet totam alias provident rem inventore tempore error numquam enim eligendi dolores fuga, temporibus ad quas commodi, non, asperiores eveniet vitae iure beatae? Amet rem assumenda ex.

                </p>
            </div>
            <div className="flex h-[900px] justify-center items-end p-3  w-1/2 relative overflow-hidden">
                {
                    images.map((image, i) => {
                        return (
                            <div key={`i_${i}`} ref={el => imagesRef.current[i] = el} className={` relative  w-3/4 h-80 z-[${i}]`}>
                                <img
                                    src={image}
                                    placeholder="blur"
                                    alt="image"
                                    className={`w-[500px] h-[400px] overflow-visible absolute object-cover object-center right-[${i * 5}px] z-${i} `}

                                />
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}