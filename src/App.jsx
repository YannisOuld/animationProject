import Navigation from "./components/Navigation"
import MovingText from "./components/MovingText"
import Cursor from "./components/Cursor"
import BlurryCursor from './components/Cursor'
import Hero from "./components/Hero"
import BackgroundHero from "./components/BackgroundHero"
import { useState } from 'react';

function App() {

  const [isActive, setIsActive] = useState(false);
  return (
    <>
      <Navigation />
      <div className="relative bg-slate-400">
        <Hero />
        <BackgroundHero />
        <BlurryCursor isActive={isActive} />
        <Cursor />
        <MovingText />
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
