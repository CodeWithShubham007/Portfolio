import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-regular-svg-icons";

const Data = () => {
    return (
        <div className="home__data">
            <h1 data-aos="fade-down" data-aos-duration="3000"  className="home__title">Shubham Kumar</h1>
            <h3 data-aos="fade-right" data-aos-duration="3000" className="home__subtitle">Web Developer</h3>
            <p data-aos="fade-right" data-aos-duration="5000" className="home__description">
                Frontend developer with over 2.5 years of experience in JavaScript, React.js, 
                and responsive user interface design. adept at using the newest tools, dynamic 
                dashboards, and API integration. solid track record at PrepBytes and CollegeDekho. 
                With a B.Tech in IT, I'm interested in collaboration, clean code, and delivering a 
                flawless user experience across all platforms. 
            </p>
            <a data-aos="fade-right" data-aos-duration="2000" href="#contact" className="button button--flex">
                Say Hello &nbsp; <FontAwesomeIcon icon={faPaperPlane} />
            </a>
        </div>
    );
};

export default Data;
