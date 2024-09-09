import { useDispatch } from 'react-redux';
import { logout } from '../../redux/auth/operations';

const UserMenu = () => {
  const dispatch = useDispatch();

  const onLogout = () => {
    dispatch(logout());
  };
  return (
    <div>
      <button type="button" onClick={onLogout}>
        Вийти
      </button>
    </div>
  );
};

export default UserMenu;
