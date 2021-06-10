import React from 'react';
import LoginForm from '../../components/forms/LoginForm';

function SignInPage() {
  return (
    <div className="signInPage">
      <h1>Морозовский хлебокомбинат</h1>
      <p>Административная панель</p>
      <LoginForm />
    </div>
  );
}

export default SignInPage;
