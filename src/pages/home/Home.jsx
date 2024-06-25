import React from "react";
import Hero from "../../../src/components/Hero";
import About from "../../../src/components/About";
import Services from "../../components/Services";
import Believer from "../../../src/components/Believer";
import Contact from "../../../src/components/Contact";
import Portfolio from "../../../src/components/Portfolio";

const Home = () => {
  return (
    <div>
      <Hero />
      <About />
      <Portfolio />
      <Services />
      <Believer />
      <Contact />
      {/* <Footer /> */}
    </div>
  );
};

export default Home;
