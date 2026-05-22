import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/authSlice";

export default function UserMenu() {
  const dispatch = useDispatch();
  const user = useSelector(state => state.auth.user);

  return (
    <div>
      <p>{user?.email}</p>
      <button onClick={() => dispatch(logout())}>
        Logout
      </button>
    </div>
  );
}