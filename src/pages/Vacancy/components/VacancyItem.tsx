import React from 'react';

interface VacancyItemProps {
  _id: string;
  title: string;
  requirements: string;
  sallary: number | string;
}

function VacancyItem({ _id, title, requirements, sallary }: VacancyItemProps) {
  return (
    <div className="vacancyItem">
      <h2>{title}</h2>
      <div className="vacancyItem__data">
        <h3>Требования:</h3>
        <p>{requirements}</p>
        <h3>Заработная плата:</h3>
        <p>{sallary} руб.</p>
      </div>
      <p className="vacancyItem__info">Обращаться по номеру: +7 (3513) 62-37-49 (отдел кадров)</p>
    </div>
  );
}

export default VacancyItem;
