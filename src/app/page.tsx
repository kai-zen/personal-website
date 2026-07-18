import {
  ArticlesSection,
  HeroSection,
  HighlightsSection,
} from "@/sections/home";
import { FC } from "react";

const Home: FC = () => {
  return (
    <div>
      <HeroSection />
      <HighlightsSection />
      <ArticlesSection />
    </div>
  );
};

export default Home;
