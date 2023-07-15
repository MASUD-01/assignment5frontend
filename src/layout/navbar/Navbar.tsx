import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { signOut } from "firebase/auth";
import { setUser } from "../../redux/features/user/userSlice";
import { auth } from "../../lib/firebase";

export default function Navbar() {
  const dispatch = useAppDispatch();
  const { user } = useAppSelector((state) => state.user);
  const handleLogout = () => {
    signOut(auth).then(() => {
      dispatch(setUser(null));
    });
  };
  return (
    <div className="container m-auto h-16 flex items-center justify-between">
      <Link to="/">
        {" "}
        <p>BookSelf</p>
      </Link>
      <div className="flex gap-3">
        <Link to="/allbooks">AllBooks</Link>
        {!user.email ? (
          <>
            <Link to="/login">SignIn</Link>
            <Link to="/signup">SignUp</Link>
          </>
        ) : (
          <Link to="/" onClick={handleLogout}>
            Logout
          </Link>
        )}
      </div>
    </div>
  );
}
