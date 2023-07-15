import Footer from "../footer/Footer";
import Navbar from "../navbar/Navbar";
import { Outlet } from "react-router-dom";

export default function MainLayout() {
  return (
    <div>
      <div className="bg-yellow-300 flex items-center">
        <Navbar />
      </div>
      <Outlet />
      <Footer />
    </div>
  );
}
