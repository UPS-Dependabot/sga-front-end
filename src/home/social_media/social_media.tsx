/**
 * social_media.ts
 * 
 * TODO: Implement slideshow, here ya go Brian!
 */

export function SocialMediaSection() {
  return (
    <div className="h-1/2 w-full flex flex-row justify-around items-center bg-background-default">
      <div className="h-2/3 w-1/3 bg-background-paper text-center text-text-primary">Instagram</div>
      <div className="h-2/3 w-1/4 bg-background-paper text-center text-text-primary">Contact</div>
      <div className="h-2/3 w-1/3 bg-background-paper text-center text-text-primary">Blog</div>
    </div>
  );
}