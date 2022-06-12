import { NavLink } from 'react-router-dom';

import s from './AuthMenu.module.css';

const getActiveLink = ({ isActive }) => (isActive ? s.linkActive : s.link);

const AuthMenu = () => {
  return (
    <div className={s.menu}>
      <NavLink to="/login" className={getActiveLink}>
        Login
      </NavLink>
      <NavLink to="/registration" className={getActiveLink}>
        Register
      </NavLink>
    </div>
  );
};

export default AuthMenu;
