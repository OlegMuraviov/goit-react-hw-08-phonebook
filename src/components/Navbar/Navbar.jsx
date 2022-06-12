import { Link } from 'react-router-dom';
import useLogin from '../../shared/hooks/useLogin';

import NavbarMenu from './NavbarMenu/NavbarMenu';
import AuthMenu from './AuthMenu/AuthMenu';
import UserMenu from './UserMenu/UserMenu';

import s from './Navbar.module.css';
const Navbar = () => {
  const isLogin = useLogin();
  return (
    <nav>
      <div>
        <div className={s.wrap}>
          <Link to="/" className={s.link}>
            Logo
          </Link>
          <NavbarMenu isLogin={isLogin} />
          {isLogin && <UserMenu />}
          {!isLogin && <AuthMenu />}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
