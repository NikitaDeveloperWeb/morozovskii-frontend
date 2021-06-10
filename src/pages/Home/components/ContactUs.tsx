import React from 'react';
import image from '../../../assets/images/contact-me-img.png';
import ContactUsForm from '../../../components/forms/ContactUsForm';
function ContactUs() {
  return (
    <div className="home-block">
      <h2>Связаться с нами</h2>
      <div className="home-block__content">
        <img src={image} alt="изображение" style={{ width: 600 }} />
        <ContactUsForm />
      </div>
    </div>
  );
}

export default ContactUs;
