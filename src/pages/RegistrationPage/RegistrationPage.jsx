import RegistrationForm from '../../components/Auth/RegistrationForm/RegistrationForm';
import useLogin from '../../shared/hooks/useLogin';
import { useDispatch } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
import { signUp } from '../../redux/auth/auth-operations';
import { useEffect } from 'react';
import s from './RegistrationPage.module.css';

const RegistrationPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const isLogin = useLogin();

  useEffect(() => {
    if (isLogin) navigate('/phonebook');
  }, [isLogin, navigate]);

  const registrationUser = data => {
    dispatch(signUp(data));
  };

  return (
    <div className={s.wrap}>
      <RegistrationForm onSubmit={registrationUser} />
      <p>Вже є акаунт?</p>
      <Link to="/login" className={s.link}>
        Login
      </Link>
    </div>
  );
};
export default RegistrationPage;
