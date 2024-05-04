import Navigation from "./components/Navigation"
import Lenis from '@studio-freight/lenis'
import MovingText from "./components/MovingText"
import Cursor from "./components/Cursor"
import BlurryCursor from './components/Cursor'
import Hero from "./components/Hero"
import BackgroundHero from "./components/BackgroundHero"
import { useState, useEffect } from 'react';

function App() {

  useEffect(() => {
    const lenis = new Lenis()

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
  }, [])
  const [isActive, setIsActive] = useState(false);
  return (
    <>
      <Navigation />
      <div className="relative bg-slate-400">
        <Hero />
        <BackgroundHero />
        <BlurryCursor isActive={isActive} />
        <Cursor />
        <MovingText onMouseOver={() => { setIsActive(true) }} onMouseLeave={() => { setIsActive(false) }} />
      </div>
      <div>
        <h1>mother of code</h1>
      </div>
      <p>
        hello world
      </p>
    </>
  )
}

export default App
