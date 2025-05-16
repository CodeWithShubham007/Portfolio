import React from "react";
import "./footer.css"
import {Github, Instagram, Linkedin} from 'lucide-react'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <h1 className="footer__title">Shubham</h1>
        <ul className="footer__list">
          <li>
            <a href="#about" className="footer__link">
              About
            </a>
          </li>
          <li>
            <a href="#work" className="footer__link">
              Projects
            </a>
          </li>
          <li>
            <a href="#testimonials" className="footer__link">
              Testimonial
            </a>
          </li>
        </ul>
        <div className="footer__social">
          <a
            href="https://www.instagram.com/Ace_shubham/"
            className="footer__social-link"
            target="_blank"
          >
            <Instagram size={28} strokeWidth={1.5} />
          </a> 
          <a href="https://www.linkedin.com/in/ershubham007/" className="footer__social-link" target="_blank">
            <Linkedin size={28} color="#ffffff" strokeWidth={1.5} />
          </a>
          <a
            href="https://www.github.com/codewithshubham007"
            className="footer__social-link"
            target="_blank"
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
