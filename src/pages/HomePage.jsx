import React from "react";
import Hero from "../components/Hero";
import BentoGrid from "../components/BentoGrid";

const HomePage = () => {
  return (
    <div>
     <div className="pt-10">

      <Hero />
     </div>
      <BentoGrid />
    </div>
  );
};

export default HomePage;
