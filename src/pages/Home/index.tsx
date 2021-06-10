import React from 'react';
import AboutCompany from './components/AboutCompany';
import Contacts from './components/Contacts';
import ContactUs from './components/ContactUs';
import Feedback from './components/Feedback';
import HomeIntro from './components/HomeIntro';
import WhyWe from './components/WhyWe';

function Home() {
  const Year = new Date().getFullYear();
  return (
    <div className="home">
      <HomeIntro />
      <AboutCompany />
      <WhyWe />
      <ContactUs />
      <Feedback />
      <Contacts />
      <footer>Морозовский хдебокомбинат - все права защищены {Year}г.</footer>
    </div>
  );
}

export default Home;
