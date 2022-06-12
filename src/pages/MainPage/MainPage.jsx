import { Link } from 'react-router-dom';
import useLogin from '../../shared/hooks/useLogin';
import s from './MainPage.module.css';

const MainPage = () => {
  const isLogin = useLogin();
  return (
    <div className={s.wrap}>
      {!isLogin && (
        <p>Для користування додатком будь-ласка зареєструйтесь або увійдіть</p>
      )}
      {isLogin && (
        <Link to="/phonebook" className={s.wrap__title}>
          Книга контактів
        </Link>
      )}
    </div>
  );
};

export default MainPage;
