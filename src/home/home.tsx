/**
 * Home.tsx
 * 
 * This is the base component for the home page.
 */
import { SlideShowSection } from "./slideshow/slideshow";
import { SocialMediaSection } from "./social_media/social_media";
import { Nav } from "./navbar/navbar";
import { Box } from '@mui/system';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from "../themes";
import { SgaStamp } from "./sga_stamp.";

export function Home(): JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          backgroundColor: "background.default",
          width: "100%",
          height: "100vh"
        }}>
        <SgaStamp />
        <Title />
        <Nav />
        <SlideShowSection />
        <SocialMediaSection />
      </Box>
    </ThemeProvider>
  );
}

export function Title(): JSX.Element {
  return (
    <div className="absolute w-full left-2/4 top-1/4 -translate-x-1/2 -translate-y-1/4 text-text-primary">
      <span className="inline-block w-full text-7xl text-center tracking-wide font-semibold">Student Government Association</span>
      <span className="inline-block w-full text-2xl text-center font-medium">Marist College</span>
    </div>
  );
}