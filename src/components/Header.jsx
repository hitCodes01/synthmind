import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { disablePageScroll, enablePageScroll } from "scroll-lock";
import { navigation } from "../constants";
import Button from "./Button";
import MenuSvg from "../assets/svg/MenuSvg";
import { HamburgerMenu } from "./design/Header";
import logo from "../assets/logo.png";

const Header = () => {
  const [user, setUser] = useState(null); // Local state for user
  const pathname = useLocation();
  const navigate = useNavigate();
  const [openNavigation, setOpenNavigation] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token"); // Check if token is in localStorage
    if (token) {
      setUser(true); // User is logged in if token exists
    } else {
      setUser(false); // No user logged in
    }
  }, []);

  const toggleNavigation = () => {
    if (openNavigation) {
      setOpenNavigation(false);
      enablePageScroll();
    } else {
      setOpenNavigation(true);
      disablePageScroll();
    }
  };

  const handleClick = () => {
    if (!openNavigation) return;
    enablePageScroll();
    setOpenNavigation(false);
  };

  const handleLogout = () => {
    const confirmed = window.confirm("Are you sure you want to log out?");
    if (confirmed) {
      localStorage.removeItem("token"); // Remove token from localStorage
      setUser(false); // Update user state
      navigate("/signin"); // Redirect to sign-in page
    }
  };

  return (
    <div
      className={`fixed top-0 left-0 w-full z-50 border-b border-n-6 lg:bg-n-8/90 lg:backdrop-blur-sm ${
        openNavigation ? "bg-n-8" : "bg-n-8/90 backdrop-blur-sm"
      }`}
    >
      <div className="flex items-center px-5 lg:px-7.5 xl:px-10 max-lg:py-4">
        <a className="block w-[12rem] xl:mr-8" href="#hero">
          <img src={logo} width={160} height={40} alt="Synth-Mind" />
        </a>

        <nav
          className={`${
            openNavigation ? "flex" : "hidden"
          } fixed top-[5rem] left-0 right-0 bottom-0 bg-n-8 lg:static lg:flex lg:mx-auto lg:bg-transparent`}
        >
          <div className="relative z-2 flex flex-col items-center justify-center m-auto lg:flex-row">
            {navigation.map((item) => (
              <a
                key={item.id}
                href={item.url}
                onClick={handleClick}
                className={`block relative font-code text-2xl uppercase text-n-1 transition-colors hover:text-color-1 ${
                  item.onlyMobile ? "lg:hidden" : ""
                } px-4 py-4 md:py-8 lg:-mr-0.25 lg:text-xs lg:font-semibold ${
                  item.url === pathname.hash
                    ? "z-2 lg:text-n-1"
                    : "lg:text-n-1/50"
                } lg:leading-5 lg:hover:text-n-1 xl:px-10`}
              >
                {item.title}
              </a>
            ))}

            {/* Buttons inside the openNavigation */}
            {user && (
              <a
                href="/dashboard"
                onClick={handleClick}
                className={`block relative font-code text-2xl uppercase text-n-1 transition-colors hover:text-color-1 px-4 pb-6 md:pb-6 lg:-mr-0.25 lg:text-xs lg:font-semibold mt-4 ${
                  pathname.pathname === "/dashboard" ? "z-2 lg:text-n-1" : "lg:text-n-1/50"
                } lg:leading-5 lg:hover:text-n-1 xl:px-10 lg:hidden`}
              >
                Dashboard
              </a>
            )}
            {!user && (
              <Button className="mt-4 lg:hidden" href="/signup">
                Sign Up
              </Button>
            )}
            {user && (
              <Button className="mt-4 lg:hidden" onClick={handleLogout}>
                Log Out
              </Button>
            )}
          </div>

          <HamburgerMenu />
        </nav>

        <div className="ml-auto flex items-center">
          {/* Menu toggle button */}
          <Button
            className="ml-auto lg:hidden"
            px="px-3"
            onClick={toggleNavigation}
          >
            <MenuSvg openNavigation={openNavigation} />
          </Button>

          {user && (
            <a
              href="/dashboard"
              className="button hidden mr-8 text-n-1/50 transition-colors hover:text-n-1 lg:block"
            >
              Dashboard
            </a>
          )}
          {!user && (
            <Button className="hidden lg:flex" href="/signup">
              Sign Up
            </Button>
          )}

          {/* Log Out button visible only on large screens */}
          {user && (
            <Button className="hidden lg:flex" onClick={handleLogout}>
              Log Out
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
