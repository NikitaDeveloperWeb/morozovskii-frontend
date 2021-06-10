import React from 'react';
import { Link } from 'react-router-dom';

const Links = [
  {
    title: 'Пользователи',
    path: '/admin/users',
  },
  {
    title: 'Продукция',
    path: '/admin/products',
  },
  {
    title: 'Вакансии',
    path: '/admin/vacancy',
  },
  {
    title: 'Обратная связь',
    path: '/admin/feedback',
  },
];

function Navig() {
  const thisUrl = window.location.pathname;
  let defaultState = 0;

  React.useEffect(() => {
    switch (thisUrl) {
      case '/admin/users':
        // eslint-disable-next-line react-hooks/exhaustive-deps
        defaultState = 0;
        break;
      case '/admin/products':
        defaultState = 1;
        break;
      case '/admin/vacancy':
        defaultState = 2;
        break;
      case '/admin/feedback':
        defaultState = 3;
        break;
      default:
        defaultState = 0;
        break;
    }
  });

  const [active, setActive] = React.useState(defaultState);

  const handelerAciveItem = (index: number) => {
    setActive(index);
  };

  return (
    <nav className="navig">
      <ul>
        {Links.map((link, index) => (
          <li key={`${link.title}+${index}`} className={active === index ? 'active-link' : ''}>
            <Link to={link.path} onClick={() => handelerAciveItem(index)}>
              {link.title}
            </Link>
          </li>
        ))}
        <li>
          <Link to="/">На сайт</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navig;
