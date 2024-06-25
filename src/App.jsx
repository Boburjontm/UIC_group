import React from "react";
import Home from "./pages/home/Home";
import Header from "./components/Header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Services from "./pages/Services";
import Footer from "./components/Footer";
// import Onion from "./components/onion/Onion";
import Career from "./pages/Career";
import Blogs from "./pages/Blogs";
import Portfolio from "./pages/Portfolio";
import AboutPage from "./components/About";

const App = () => {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/brief" element={<Services />} />
          <Route path="/vacancy" element={<Career />} />
          <Route path="/blog" element={<Blogs />} />
          <Route path="/portfolio" element={<Portfolio />} />
        </Routes>
        <Footer />
      </Router>
      {/* <Onion /> */}
    </div>
  );
};

export default App;
