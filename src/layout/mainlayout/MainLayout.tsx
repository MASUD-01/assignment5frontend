import React from "react";
import Navbar from "../navbar/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../footer/Footer";

export default function MainLayout() {
  return (
    <div>
      <div className="bg-yellow-300 flex items-center">
        <Navbar />
      </div>
      <Outlet />
    </div>
  );
}
