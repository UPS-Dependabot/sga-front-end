/**
 * slideshow.tsx
 * 
 * This is the base component for the home page.
 * 
 * DO NOT TOUCH, unless needed to for parallax effect!
 */

import Header from "./header/header";
import SgaDescription from "./sga_description/sga_description";
import Stories from "./stories/stories";
import Slideshow from "./slideshow/slideshow";

 function Home() {
   return (
     <>
       <Header></Header>
       <SgaDescription></SgaDescription>
       <Stories></Stories>
       <Slideshow></Slideshow>
     </>
   );
 }
 
 export default Home;
 