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
import { SgaStamp } from "./navbar/sga_stamp.";

export function Home() {
  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          backgroundColor: "background.default",
          width: "100%",
          height: "100vh"
        }}>
        <SgaStamp />
        <Nav />
        <SlideShowSection />
        <SocialMediaSection />
      </Box>
    </ThemeProvider>
  );
}