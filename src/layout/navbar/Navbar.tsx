import React from "react";
import { Link } from "react-router-dom";
import { useAppSelector } from "../../redux/hooks";

export default function Navbar() {
  const { user } = useAppSelector((state) => state.user);
  const handleLogout = () => {};
  return (
    <div className="container m-auto h-16 flex items-center justify-between">
      <Link to="/">
        {" "}
        <p>assingment4</p>
      </Link>
      <div className="flex gap-3">
        <Link to="/allbooks">AllBooks</Link>
        {!user.email ? (
          <>
            <Link to="/signin">SignIn</Link>
            <Link to="/signup">SignUp</Link>
          </>
        ) : (
          <Link to="/logout" onClick={handleLogout}>
            Logout
          </Link>
        )}
      </div>
    </div>
  );
}
