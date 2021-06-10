import React from 'react';
import image from '../../../assets/images/why-we-img.png';
import bg from '../../../assets/images/why-we-bg.jpg';
function WhyWe() {
  return (
    <div
      className="home-block"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      }}>
      <div className="home-block__filter">
        <h2>Почему мы?</h2>
        <div className="home-block__filter__content">
          <ul>
            <li>1. Самая вкусная и качественная продукция.</li>
            <li>2. У нас работают самые лучшие люди.</li>
            <li>3. Производим свыше 900 тонны продукции в год.</li>
            <li>4. Более 25 лет на рынке.</li>
          </ul>
          <img src={image} alt="изображение" />
        </div>
      </div>
    </div>
  );
}

export default WhyWe;
