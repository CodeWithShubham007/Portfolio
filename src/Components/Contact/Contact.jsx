import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./contact.css"
import {Send, Phone} from 'lucide-react';
import { faMobileScreen } from '@fortawesome/free-solid-svg-icons';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();

      emailjs
        .sendForm(
          "service_niz40sz",
          "template_aqj260o",
          form.current,
          "hCYRUNRJVkV_96qpY"
        )
        .then(
          (result) => {
            alert("Sent")
          },
          (error) => {
            console.log(error.text);
          }
        );
    };

  return (
    <section className="cantact section" id="contact">
      <h2 className="section__title">Get in Touch</h2>
      <span className="section__subtitle">Contact Me</span>
      <div className="contact__container container grid">
        <div className="contact__content">
          <h3 className="contact__title">Talk to me</h3>
          <div className="contact__info">
            <div className="contact__card">
              <i className="bx bx-mail-send contact__card-icon"></i>
              <h3 className="contact__card-title">Email</h3>
              <span className="contact__card-data">codewithshubham007@gmail.com</span>
              <a
                href="mailto:codewithshubham007@gmail.com"
                className="contact__button"
                target='_blank'
              >
                Write me{" "}
                <i className="bx bx-right-arrow-alt contact__button-icon"></i>
              </a>
            </div>
            <div className="contact__card">
              <i className="bx bxl-whatsapp contact__card-icon"></i>
              <h3 className="contact__card-title">Whatsapp</h3>
              <span className="contact__card-data">+91-7549831252</span>
              <a
                href="https://api.whatsapp.com/send?phone=7549831252&text=Hello, more information!"
                className="contact__button"
                target='_blank'
              >
                Write me{" "}
                <i className="bx bx-right-arrow-alt contact__button-icon"></i>
              </a>
            </div>
            <div className="contact__card">
            <Phone  />
            <i className="fa-regular fa-mobile-screen"></i>
              {/* <i className="bx bxl-messenger contact__card-icon"></i> */}
              <h3 className="contact__card-title">Call Details</h3>
              <span className="contact__card-data">+91-7549831252</span>
              <a href="tel:+917549831252" className="contact__button">
                Call me{" "}
                <i className="bx bx-right-arrow-alt contact__button-icon"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="contact__content">
          <h3 className="contact__title">Write me your project</h3>
          <form className="cantact__form" ref={form} onSubmit={sendEmail}>
            <div className="contact__form-div">
              <label className="contact__form-tags">Name</label>
              <input
                type="text"
                name="name"
                className="contact__form-input"
                placeholder="Insert your Name"
              />
            </div>
            <div className="contact__form-div">
              <label className="contact__form-tags">Maill</label>
              <input
                type="email"
                name="email"
                className="contact__form-input"
                placeholder="Insert your Email"
              />
            </div>
            <div className="contact__form-div contact__form-area">
              <label className="contact__form-tags">Project</label>
              <textarea
                type="text"
                name="project"
                className="contact__form-input"
                placeholder="Write your Project"
                cols={30}
                rows={10}
              ></textarea>
            </div>
            <button className="button button--flex">
              Send Message &nbsp; <Send />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;