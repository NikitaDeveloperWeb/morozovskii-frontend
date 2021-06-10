/* eslint-disable jsx-a11y/iframe-has-title */
import React from 'react';

function Contacts() {
  return (
    <div className="home-block">
      <h2>Контакты</h2>
      <div className="home-block__content">
        <div className="home-block__content__text">
          <h2> Мы находимся по адресу:</h2>
          <p>
            Россия, Челябинская область, г. Златоуст (Златоустовский городской округ), ул. Грибная,
            д. 51
          </p>
          <h2> Наш контактный номер:</h2>
          <p> +7 (3513) 62-37-49</p>
        </div>
        <div className="home-block__content__map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2280.095292852955!2d59.71360691556761!3d55.146611146047604!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x43c5256e0bf7d389%3A0xe3bccd9267bca494!2z0JzQvtGA0L7Qt9C-0LLRgdC60LjQuSDRhdC70LXQsdC-0LrQvtC80LHQuNC90LDRgg!5e0!3m2!1sru!2sru!4v1622400445027!5m2!1sru!2sru"
            width="600"
            height="450"
            style={{ border: 2 }}
            allowFullScreen={false}
            loading="lazy"
            className="map"></iframe>
        </div>
      </div>
    </div>
  );
}

export default Contacts;
