import React from 'react';
import FeedbackAdmin from './components/FeedbackAdmin';
import ProductsAdmin from './components/ProductsAdmin';
import UsersAdmin from './components/UsersAdmin';
import VacancyAdmin from './components/VacancyAdmin';

import Navig from './components/Navig';
interface AdminProps {
  page: 'products' | 'vacancy' | 'feedback' | 'users';
}

function Admin({ page }: AdminProps) {
  return (
    <div className="admin">
      <header>
        <h1>Административная панель</h1>
      </header>
      <div className="admin__content">
        <aside>
          <Navig />
        </aside>
        <div className="admin__content__forms">
          {page === 'products' && <ProductsAdmin />}
          {page === 'vacancy' && <VacancyAdmin />}
          {page === 'feedback' && <FeedbackAdmin />}
          {page === 'users' && <UsersAdmin />}
        </div>
      </div>
    </div>
  );
}

export default Admin;
