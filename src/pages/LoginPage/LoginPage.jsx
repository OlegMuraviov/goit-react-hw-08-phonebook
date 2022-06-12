import LoginForm from '../../components/Auth/LoginForm/LoginForm';
import useLogin from '../../shared/hooks/useLogin';
import s from './LoginPage.module.css';
import { useDispatch } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
import { signIn } from '../../redux/auth/auth-operations';
import { useEffect } from 'react';

const LoginPage = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const isLogin = useLogin();

  useEffect(() => {
    if (isLogin) navigate('/phonebook');
  }, [isLogin, navigate]);

  const loginUser = data => {
    dispatch(signIn(data));
  };
  return (
    <div className={s.wrap}>
      <LoginForm onSubmit={loginUser} />
      <p>Немає акаунта?</p>
      <Link to="/registration" className={s.link}>
        Register
      </Link>
    </div>
  );
};
export default LoginPage;
