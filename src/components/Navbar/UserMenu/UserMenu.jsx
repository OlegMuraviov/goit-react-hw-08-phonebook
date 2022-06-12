import { useSelector, shallowEqual } from 'react-redux';
// import { useDispatch } from 'react-redux';

import { useDispatch } from 'react-redux';
import { logOut } from '../../../redux/auth/auth-operations';

import { getUser } from '../../../redux/auth/auth-selector';

const UserMenu = () => {
  const { name } = useSelector(getUser, shallowEqual);

  const dispatch = useDispatch();

  const logoutUser = () => {
    dispatch(logOut());
  };

  return (
    <div>
      {name} | <button onClick={logoutUser}>Logout</button>
    </div>
  );
};

export default UserMenu;
