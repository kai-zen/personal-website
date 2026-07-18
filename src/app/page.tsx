import {
  ArticlesSection,
  HeroSection,
  HighlightsSection,
  Topbar,
} from "@/sections/home";
import { FC } from "react";

const Home: FC = () => {
  return (
    <div>
      <Topbar />
      <HeroSection />
      <HighlightsSection />
      <ArticlesSection />
    </div>
  );
};

export default Home;
