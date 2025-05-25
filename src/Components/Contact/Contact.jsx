import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import "./contact.css"
import {Send, Phone} from 'lucide-react';
import { ToastContainer, toast } from 'react-toastify';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();

      const form = e.target;

  // Get values
      const name = form.user_name.value.trim();
      const subject = form.user_subject.value.trim();
      const email = form.user_email.value.trim();
      const message = form.user_message.value.trim();

  // Simple validation
      if (!name || !subject || !email || !message) {
        toast.error("Please fill in all the fields.");
        return;
      }

      emailjs.sendForm(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, e.target, process.env.REACT_APP_PUBLIC_KEY)
        .then((result) => {
            toast.success("Message sent successfully")
            form.reset();
          },(error) => {
            toast.error("Something went wrong");
          }
        );
    };

  return (
    <section className="cantact section" id="contact">
      <h2 className="section__title">Get in Touch</h2>
      <span className="section__subtitle">Contact Me</span>
      <div className="contact__container container grid">
        <div data-aos="fade-right" data-aos-duration="4000" className="contact__content">
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
                rel='noreferrer'
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
                rel='noreferrer'
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
        <div data-aos="fade-right" data-aos-duration="2000" className="contact__content">
          <h3 className="contact__title">Write me your project</h3>
          <form className="cantact__form" ref={form} onSubmit={sendEmail}>
            <div className="contact__form-div">
              <label className="contact__form-tags">Name</label>
              <input type="text" name="user_name" className="contact__form-input" placeholder="Insert your Name"/>
            </div>
            <div className="contact__form-div">
              <label className="contact__form-tags">Subject</label>
              <input type="text" name="user_subject" className="contact__form-input" placeholder="Insert your Subject"/>
            </div>
            <div className="contact__form-div">
              <label className="contact__form-tags">Maill</label>
              <input type="email" name="user_email" className="contact__form-input" placeholder="Insert your Email"/>
            </div>
            <div className="contact__form-div contact__form-area">
              <label className="contact__form-tags">Message</label>
              <textarea type="text" name="user_message" className="contact__form-input" placeholder="Write your Message" cols={10} rows={1}></textarea>
            </div>
            <button className="button button--flex">
              Send Message &nbsp; <Send />
            </button>
          </form>
        </div>
      </div>
      <ToastContainer position="bottom-right" autoClose={3000} />
    </section>
  );
};

export default Contact;