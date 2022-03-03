/**
 * slideshow.ts
 * 
 * Takes images from the public/images/slideshow and fades them in and out
 */
 import {useState,useEffect} from 'react';

export function SlideShowSection() {
  const secondsPerSlide = 5;
  
  const imageList = [
    "DesktopMCSGAFall2014.jpg",
    "Marist-SGA-Background-Dot.jpg",
    "Marist-SGA-Background-No-Dot.jpg",
    "Splash-Logo.jpg"
  ]
  const [ index , setIndex] = useState<number>(Math.floor(Math.random() * imageList.length)); 

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((index + 1) % imageList.length);
    }, secondsPerSlide * 1000);
    return () => clearInterval(timer);
  });

  return (
    <div className="flex flex-row w-full h-2/3 justify-center">
      <div className="flex flex-col justify-end h-full w-2/3 bg-background-paper text-center text-text-primary items-center">
        {<img src={`images/slideshow/${imageList[index]}`} className={"max-w-fit h-full z-70"} alt="slideshow"></img>}
        </div>
    </div>
  );
}