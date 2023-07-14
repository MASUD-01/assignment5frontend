import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="container m-auto h-16 flex items-center justify-between">
      <p>assingment4</p>
      <div className="flex gap-3">
        <Link to="/allbooks">AllBooks</Link>
        <Link to="/signin">SignIn</Link>
        <Link to="/signup">SignUp</Link>
      </div>
    </div>
  );
}
