import {
  ArticlesSection,
  ContactSection,
  ExperiencesSection,
  HeroSection,
  HighlightsSection,
} from "@/sections/home";
import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <div>
      <HeroSection />
      <HighlightsSection />
      <ArticlesSection />
      <ExperiencesSection />
      <ContactSection />
    </div>
  );
};

export default Home;
