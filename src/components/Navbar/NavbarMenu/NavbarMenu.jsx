import { NavLink } from 'react-router-dom';
import s from './NavbarMenu.module.css';

const items = [
  {
    id: 1,
    to: '/',
    text: 'Home',
    private: false,
  },
  // {
  //   id: 2,
  //   to: '/contacts',
  //   text: 'Phonebook',
  //   private: true,
  // },
];

const getActiveClass = ({ isActive }) => (isActive ? s.linkActive : s.link);

const NavbarMenu = ({ isLogin }) => {
  const menuItems = items.filter(item => item.private === isLogin);
  const elements = menuItems.map(({ id, to, text }) => (
    <li key={id}>
      <NavLink to={to} className={getActiveClass}>
        {text}
      </NavLink>
    </li>
  ));

  return <ul className={s.menu}>{elements}</ul>;
};

export default NavbarMenu;
