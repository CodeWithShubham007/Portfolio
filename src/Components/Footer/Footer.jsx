import React from "react";
import "./footer.css"
import {Github, Instagram, Linkedin} from 'lucide-react'

const Footer = () => {
  return (
    <footer  className="footer">
      <div className="footer__container">
        <h1 data-aos="fade-down" data-aos-duration="1000" className="footer__title">Shubham</h1>
        <ul className="footer__list">
          <li>
            <a data-aos="fade-down" data-aos-duration="1000" href="#about" className="footer__link">
              About
            </a>
          </li>
          <li>
            <a data-aos="fade-down" data-aos-duration="2000" href="#projects" className="footer__link">
              Projects
            </a>
          </li>
          <li>
            <a data-aos="fade-down" data-aos-duration="3000" href="#contact" className="footer__link">
              Contact
            </a>
          </li>
          <li>
            <a data-aos="fade-down" data-aos-duration="4000" href="#skills" className="footer__link">
              Skills
            </a>
          </li>
        </ul>
        <div className="footer__social">
          <a
            href="https://www.instagram.com/Ace_shubham/"
            className="footer__social-link"
            target="_blank"
            data-aos="fade-down" data-aos-duration="1000"
          >
            <Instagram size={28} strokeWidth={1.5} />
          </a> 
          <a 
            href="https://www.linkedin.com/in/ershubham007/" 
            className="footer__social-link" 
            target="_blank"
            data-aos="fade-down" data-aos-duration="2000"
          >
            <Linkedin size={28} color="#ffffff" strokeWidth={1.5} />
          </a>
          <a
            href="https://www.github.com/codewithshubham007"
            className="footer__social-link"
            target="_blank"
            data-aos="fade-down" data-aos-duration="3000"
          >
            {/* <i className="uil uil-github-alt"></i> */}
            <Github size={28} color="#ffffff" strokeWidth={1.5} />
          </a>
        </div>
        <span className="footer__copy">&copy; Shubham. All rights reserved</span>
      </div>
    </footer>
  );
};

export default Footer;
