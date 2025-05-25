import React, { useEffect } from "react";
import Header from "./Components/header/Header";
import "./App.css";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Skills from "./Components/Skills/Skills";
import Qualification from "./Components/Qualification/Qualification"
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import Scrollup from "./Components/Scroll-Up/Scrollup";
import Work from "./Components/Work/Work";
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'react-toastify/dist/ReactToastify.css';


const App = () => {
  
  useEffect(() => {
    AOS.init({
      duration: 1500,
      once: true
    });
  });

  return (
    <div>
      <Header />
      <main className="main">
        <Home />
        <About />
        <Skills />
        <Qualification />
        <Work />
        <Contact />
      </main>
        <Footer />
        <Scrollup />
    </div>
  );
};

export default App;
