import React from 'react';
import { Link } from 'react-router-dom';
import PhoneIcon from '@material-ui/icons/Phone';
const Links = [
  {
    title: 'А',
    path: '/admin/signin',
  },
  {
    title: 'Главная',
    path: '/',
  },
  {
    title: 'Наша продукция',
    path: '/products',
  },
  {
    title: 'Вакансии',
    path: '/vacancy',
  },
  {
    title: 'Обратная связь',
    path: '/feedback',
  },
];

function Navigation() {
  const thisUrl = window.location.pathname;
  let defaultState = 0;

  switch (thisUrl) {
    case '/':
      defaultState = 0;
      break;
    case '/products':
      defaultState = 1;
      break;
    case '/vacancy':
      defaultState = 2;
      break;
    case '/feedback':
      defaultState = 3;
      break;
    default:
      defaultState = 0;
      break;
  }

  const [active, setActive] = React.useState(defaultState);

  const handelerAciveItem = (index: number) => {
    setActive(index);
  };

  return (
    <nav className="navigation">
      <ul>
        {Links.map((link, index) => (
          <li key={`${link.title}+${index}`} className={active === index ? 'active-link' : ''}>
            <Link to={link.path} onClick={() => handelerAciveItem(index)}>
              {link.title}
            </Link>
          </li>
        ))}
      </ul>
      <div className="navigation__phone">
        <PhoneIcon />
        <p>+7 (3513) 62-37-49</p>
      </div>
    </nav>
  );
}

export default Navigation;
