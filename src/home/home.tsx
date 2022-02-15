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

export function Home() {
  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          backgroundColor: "background.default",
          width: "100vw",
          height: "100vh"
        }}>
        <Nav />
        <SlideShowSection />
        <SocialMediaSection />
      </Box>
    </ThemeProvider>
  );
}