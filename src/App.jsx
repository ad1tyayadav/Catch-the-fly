import { gsap } from 'gsap';
import { useEffect, useRef, useState } from 'react'
import './App.css';
import Social from './Social';

function App() {
  const fly = useRef();
  const [valueX, setValueX] = useState(0);
  const [valueY, setValueY] = useState(0);
  const [animation, setAnimation] = useState(0);

  const randomX = () => gsap.utils.random(-300, 300, 100);
  const randomY = () => gsap.utils.random(-300, 300, 80);
  const rotate = () => gsap.utils.random(-360, 360, 50);

  const handleSubmit = () => {
    setValueX(randomX());
    setValueY(randomY());
    setAnimation(rotate());
  };

  useEffect(() => {
    if (valueX || valueY || animation) {
      gsap.to(fly.current, {
        x: valueX,
        y: valueY,
        rotate: animation,
        duration: 0.6,
        ease: "slow(0.7, 0.7)",
      });
    }
  }, [valueX, valueY, animation]);

  return (
    <>
      <header className='hidden sm:block'>
        <Social />
      </header>
      <h3 className='absolute top-4 left-8 text-l font-bold'>Catch bug! and make your app bug free!</h3>
      <p className='absolute top-14 left-8 text-sm opacity-[.3] sm:hidden'>Refresh Page! if you can't see the bug!</p>
      <main>
        <img src='/fly.svg' onMouseOver={handleSubmit} onClick={handleSubmit} ref={fly} className="fly right-6 bottom-4"></img>
      </main>
      <footer className='absolute bottom-20 w-full right-3 flex block sm:hidden'>
      <Social />
      </footer>
    </>
  );
}

export default App;
