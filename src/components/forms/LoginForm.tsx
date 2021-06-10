import Button from '../Button';
import React from 'react';
import Field from '../Field';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSignIn } from '../../store/ducks/user/actionCreators';
import { selectUserStatus } from '../../store/ducks/user/selectors';
import { LoadingState } from '../../store/types';

const LoginFormSchema = yup.object().shape({
  username: yup.string(),
  password: yup.string(),
});

export interface LoginProps {
  username: string;
  password: string;
}

function LoginForm() {
  const dispath = useDispatch();
  const loadingStatus = useSelector(selectUserStatus);
  const { register, handleSubmit } = useForm<LoginProps>({
    resolver: yupResolver(LoginFormSchema),
  });
  const onSubmit = async (data: LoginProps) => {
    dispath(fetchSignIn(data));
  };

  React.useEffect(() => {
    if (loadingStatus === LoadingState.SUCCESS) {
      // window.location.reload();
    } else if (loadingStatus === LoadingState.ERROR) {
    }
  }, [loadingStatus]);
  return (
    <form className="form-login" onSubmit={handleSubmit(onSubmit)} method="POST" id="form-login">
      <label htmlFor="username">Ваше логин:</label>
      <Field
        type="text"
        name="username"
        className="field-main"
        fieldRef={register}
        form="form-login"
      />
      <label htmlFor="password">Ваш пароль:</label>
      <Field
        type="password"
        name="password"
        className="field-main"
        fieldRef={register}
        form="form-login"
      />
      <Button type="submit" value="Войти" className="Button-primary" form="form-login" />
    </form>
  );
}

export default LoginForm;
