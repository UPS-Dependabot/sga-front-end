/**
 * slideshow.ts
 * 
 * TODO: Implement slideshow, here ya go Gabe!
 * 
 * Takes images from the public/images/slideshow and fades them in and out
 * 
 */
 import {useState,useEffect} from 'react';

export function SlideShowSection() {
  const secondsPerSlide = 5;
  const maxOpacity = 70;
  
  const imageList = [
    "DesktopMCSGAFall2014.jpg",
    "Marist SGA Background Dot.jpg",
    "Marist SGA Background No Dot.jpg",
    "Splash Logo.jpg"
  ]

  const [ index , setIndex] = useState<number>(0); 
  const [ opacity , setOpacity] = useState<number>(maxOpacity); 

  useEffect(() => {
    const timer = setInterval(() => {
      let fadeOut = setInterval(fadeout,10);

      function fadeout(){

      }
      setIndex((index + 1)%imageList.length);
    }, secondsPerSlide*1000);
               // clearing interval
    return () => clearInterval(timer);
  });

  return (
    <div className="flex flex-row w-full h-2/3 justify-center">
      <div className="flex flex-col justify-end h-full w-2/3 bg-background-paper text-center text-text-primary items-center">
        {<img src={"images/slideshow/"+imageList[index]} className={"opacity-"+opacity+" max-w-fit h-full z-70"} alt="slideshow"></img>}
        </div>
    </div>
  );
}