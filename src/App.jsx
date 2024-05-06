import Navigation from "./components/Navigation"
import Lenis from '@studio-freight/lenis'
import MovingText from "./components/Scroll/MovingText"
import SmoothScroll from "./components/Scroll/SmoothScroll"
import Cursor from "./components/Cursor/Cursor"
import BlurryCursor from './components/Cursor/Cursor'
import Hero from "./components/Hero/Hero"
import BackgroundHero from "./components/Hero/BackgroundHero"
import Picture1 from "./assets/picture1.jpg"
import { useState, useEffect } from 'react';

function App() {

  useEffect(() => {
    const lenis = new Lenis()

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    (
      async () => {
        const LocomotiveScroll = (await import('locomotive-scroll')).default
        const locomotiveScroll = new LocomotiveScroll();
      }
    )()
    requestAnimationFrame(raf)
  }, [])


  const [isActive, setIsActive] = useState(false);
  return (
    <>
      <Navigation />
      <div className="relative flex justify-around items-center bg-slate-400">
        <img src={Picture1} alt="photo" className="rounded-full w-1/4" />
        <div className="relative bg-slate-400">
          <Hero />
          <BackgroundHero />
          <BlurryCursor isActive={isActive} />
          <Cursor />
        </div>
      </div>
      <MovingText onMouseOver={() => { setIsActive(true) }} onMouseLeave={() => { setIsActive(false) }} />
      <div>
        <SmoothScroll />
        <h1>mother of code</h1>
      </div>
      <p>
        hello world
      </p>
    </>
  )
}

export default App
