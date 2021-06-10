import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Switch, useHistory } from 'react-router-dom';

import { selectIsAuth } from './store/ducks/user/selectors';
import MainLayout from './Layout/MainLayout';
import Admin from './pages/Admin';
import FeedbackPage from './pages/Feedback';
import Home from './pages/Home';
import ProductsPage from './pages/Products';
import SignInPage from './pages/SignInPage';
import VacancyPage from './pages/Vacancy';
import { setUserData } from './store/ducks/user/actionCreators';
import { AuthApi } from './services/API/authAPI';

function App() {
  const dispatch = useDispatch();
  const history = useHistory();
  const isAuth = useSelector(selectIsAuth);
  const checkAuth = async () => {
    try {
      const { data } = await AuthApi.getMe();
      dispatch(setUserData(data));
      // history.replace('/');
    } catch (error) {}
  };
  React.useEffect(() => {
    checkAuth();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  React.useEffect(() => {
    if (isAuth) {
      history.push('/admin/users');
    }
  }, [history, isAuth]);
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <MainLayout content={<Home />} />
        </Route>
        <Route exact path="/products">
          <MainLayout content={<ProductsPage />} />
        </Route>
        <Route exact path="/vacancy">
          <MainLayout content={<VacancyPage />} />
        </Route>
        <Route exact path="/feedback">
          <MainLayout content={<FeedbackPage />} />
        </Route>
        <Route exact path="/admin/signin">
          <SignInPage />
        </Route>
        <Route exact path="/admin/products">
          {(isAuth && <Admin page="products" />) || <SignInPage />}
        </Route>
        <Route exact path="/admin/vacancy">
          {(isAuth && <Admin page="vacancy" />) || <SignInPage />}
        </Route>
        <Route exact path="/admin/feedback">
          {(isAuth && <Admin page="feedback" />) || <SignInPage />}
        </Route>
        <Route exact path="/admin/users">
          {(isAuth && <Admin page="users" />) || <SignInPage />}
        </Route>
      </Switch>
    </div>
  );
}

export default App;
