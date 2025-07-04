import React, { useContext, useState } from "react";
import "./header.css";
import { ThemeContext } from "../../Context/ThemeContext";
import { Moon, Sun } from "lucide-react";

const Header = () => {

  const {theme, toggleTheme} = useContext(ThemeContext)

    window.addEventListener("scroll", function () {
      const header = document.querySelector(".header");
      if (this.scrollY >= 80) {
        header.classList.add("show-header");
      } else {
        header.classList.remove("show-header");
      }
    });
  const [Toggle, showMenu] = useState(false);
  return (
    <header className="header">
      <nav className="nav container">
        <a data-aos="fade-right" href="#home" className="nav__logo">
          Shubham
        </a>
        <div className={Toggle ? "nav_menu show_menu" : "nav_menu"}>
          <ul className="nav__list">
            <li className="nav__item">
              <a data-aos="fade-down" data-aos-duration="1000" href="#home" className="nav__link active-link"> 
                <i className="uil uil-estate nav__icon"> </i> Home
              </a>
            </li>
            <li className="nav__item">
              <a data-aos="fade-down" data-aos-duration="1500" href="#about" className="nav__link">
                <i className="uil uil-user nav__icon"></i> About
              </a>
            </li>
            <li className="nav__item">
              <a data-aos="fade-down" data-aos-duration="2000" href="#skills" className="nav__link">
                <i className="uil uil-file-alt nav__icon"></i> Skills
              </a>
            </li>
            <li className="nav__item">
              <a data-aos="fade-down" data-aos-duration="2500" href="#projects" className="nav__link">
                <i className="uil uil-scenery nav__icon"></i> Projects
              </a>
            </li>
            <li className="nav__item">
              <a data-aos="fade-down" data-aos-duration="3000" href="#contact" className="nav__link">
                <i className="uil uil-message nav__icon"></i> Contact
              </a>
            </li>
          {/* Theme */}
          <button data-aos="fade-left" onClick={toggleTheme} style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
              {theme === "light" ? <Moon size={20} /> : <Sun style={{color: '#ffAF02'}} size={20} />}
          </button>
          </ul>

          <i
            className="uil uil-times nav__close"
            onClick={() => showMenu(!Toggle)}
            >

            </i>
        </div>
        <div className="nav__toggle" onClick={() => showMenu(!Toggle)}>
          <i className="uil uil-apps"></i>
        </div>
      </nav>
    </header>
  );
};

export default Header;
