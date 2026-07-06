import { HeroSection, HighlightsSection, Topbar } from "@/sections/home";
import { FC } from "react";

const Home: FC = () => {
  return (
    <div>
      <Topbar />
      <HeroSection />
      <HighlightsSection />
    </div>
  );
};

export default Home;
