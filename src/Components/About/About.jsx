import React from "react";
import "./about.css";
import AboutImg from "../../assets/Main.jpg";
import Resume from "../../assets/Shubham_Kumar.pdf";
import Info from "./Info";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFile } from "@fortawesome/free-regular-svg-icons";

const About = () => {
  return (
    <section className="about section" id="about">
      <h2 className="section__title">About Me</h2>
      <span className="section__subtitle">My introduction</span>
      <div className="about_container container grid">
        <img data-aos="zoom-in" data-aos-duration="1500" src={AboutImg} className="about__img" alt="not found" />
        <div className="about__data">
          <Info />
          <p data-aos="fade-down" data-aos-duration="2500" className="about__description">
          Frontend Developer with 2.5+ years of experience in HTML, CSS, JavaScript, 
          React, Node.js, MongoDB, and Tailwind. Currently learning Next.js, 
          Generative AI, and AWS to enhance full-stack capabilities and stay 
          updated with modern development trends.
          </p>
          <div data-aos="fade-down" data-aos-duration="3500" className="doc_file">
            <a href={Resume} className="button button--flex" download="">
              Resume{" "} &nbsp;
              <FontAwesomeIcon icon={faFile} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
