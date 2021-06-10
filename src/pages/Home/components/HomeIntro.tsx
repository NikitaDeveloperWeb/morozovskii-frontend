import React from 'react';
import { Link } from 'react-router-dom';
import image from '../../../assets/images/home-intro-img.png';
function HomeIntro() {
  return (
    <div className="home-intro">
      <div className="home-intro__filter">
        <div className="home-intro__filter__text">
          <h1>Морозовский хлебокомбинат</h1>
          <p>Мы просто начали печь хлеб, потому что не могли не поделиться с вами этим вкусом.</p>
          <Link to="/products">В каталог</Link>
        </div>
        <img src={image} alt="Изображение" />
      </div>
    </div>
  );
}

export default HomeIntro;
