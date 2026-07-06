import { HeroSection, Topbar } from "@/sections/home";
import { FC } from "react";

const Home: FC = () => {
  return (
    <div>
      <Topbar />
      <HeroSection />
    </div>
  );
};

export default Home;
