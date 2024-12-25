import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Logo from "../../../src/assets/website/logo.png";
import { FaCartShopping } from "react-icons/fa6";
import DarkMode from "./DarkMode";
import LogoutIcon from "../../../src/assets/website/logout.png"; // Replace with the correct path to your uploaded image

const Menu = [
  {
    id: 1,
    name: "Home",
    link: "/#",
  },
  {
    id: 2,
    name: "Best Seller",
    link: "/#services",
  },
];

const Navbar = ({ handleOrderPopup }) => {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || "light"
  );
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("loggedIn");
    navigate("/login");
  };

  return (
    <div className="shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200">
      <div className="container py-3 sm:py-0">
        <div className="flex justify-between items-center">
          {/* Logo Section */}
          <div>
            <a href="#" className="font-bold text-2xl sm:text-3xl flex gap-2">
              <img src={Logo} alt="Logo" className="w-10" />
              Books
            </a>
          </div>

          {/* Menu and Actions Section */}
          <div className="flex justify-between items-center gap-4">
            <DarkMode onThemeChange={setTheme} />

            {/* Menu Items */}
            <ul className="hidden sm:flex items-center gap-4">
              {Menu.map((menu) => (
                <li key={menu.id}>
                  <a
                    href={menu.link}
                    className="inline-block py-4 px-4 hover:text-primary duration-200"
                  >
                    {menu.name}
                  </a>
                </li>
              ))}
            </ul>

            {/* Cart Link */}
            <Link
              to="/cart"
              className="bg-gradient-to-r from-primary to-secondary hover:scale-105 duration-200 text-white py-1 px-4 rounded-full flex items-center gap-3"
            >
              Cart
              <FaCartShopping className="text-xl text-white drop-shadow-sm cursor-pointer" />
            </Link>

            {/* Logout Button with Theme-aware Text Color */}
            <button
              onClick={handleLogout}
              className={`flex items-center gap-2 px-4 py-2 rounded duration-200 ${
                theme === "dark"
                  ? "bg-black text-white hover:bg-gray-800"
                  : "bg-gray-100 text-black hover:bg-gray-200"
              }`}
            >
              <img src={LogoutIcon} alt="Logout Icon" className="w-5 h-5" />
              Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
