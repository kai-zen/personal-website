import {
  ArticlesSection,
  ExperiencesSection,
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
      <ExperiencesSection />
    </div>
  );
};

export default Home;
