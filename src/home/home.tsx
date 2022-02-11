/**
 * Home.tsx
 * 
 * This is the base component for the home page.
 * 
 * DO NOT TOUCH!
 */

import { SlideShowSection } from "./slideshow/slideshow";
import { SocialMediaSection } from "./social_media/social_media";
import { Nav } from "./navbar/navbar";
export function Home() {
  return (
    <div className="h-screen w-screen overflow-y-scroll">
      <Nav/>
      <SlideShowSection/>
      <SocialMediaSection/>
    </div>
  );
}