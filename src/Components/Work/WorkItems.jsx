import React from "react";

const WorkItems = ({ item }) => {
  return (
    <div data-aos="zoom-in" data-aos-duration="2000" className="work__card" key={item.id}>
      <img src={item.image} alt="" className="work__image" />
      <h3 className="work__title">{item.title}</h3>
      <a href={item.link} target="_blank" rel="noopener noreferrer" className="work__button">
        Demo <i className="bx bx-right-arrow-alt work__button-icon"></i>
      </a>
    </div>
  );
};

export default WorkItems;
