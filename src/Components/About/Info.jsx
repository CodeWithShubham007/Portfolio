import React from "react";

const Info = () => {
  return <div className="about__info grid">
    <div data-aos="fade-down" data-aos-duration="1500" className="about__box">
        <i className="bx bx-award about_icon"></i>
        <h3 className="about__title">Work Experience</h3>
        <span className="about__subtitle">2.5+ Years</span>
    </div>
    <div data-aos="fade-down" data-aos-duration="1500" className="about__box">
        <i className="bx bx-briefcase-alt about_icon"></i>
        <h3 className="about__title">Completed</h3>
        <span className="about__subtitle">10 + Projects</span>
    </div>
  </div>;
};

export default Info;
