import { Mouse } from "lucide-react";
import React from "react";

const ScrolDown = () => {
  return (
    <div data-aos="fade-down" className="home__scroll">
      <a href="#about" className="home__scroll-button button--flex">
      <Mouse size={36} color="#000" strokeWidth={1.5} />
        <span className="home__scroll-name">
          Scroll Down
        </span>
        <i className="uil uil-arrow-down home__scroll-arrow"></i>
      </a>
    </div>
  );
};

export default ScrolDown;
