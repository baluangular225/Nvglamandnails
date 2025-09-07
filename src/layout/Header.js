import Link from "next/link";
import { useEffect, useState } from "react";
import { sidebarOnclick, stickyNav } from "../utils";
import {
  About,
  Contact,
  Gallery,
  Services,
} from "./Menus";
import MobileMenu from "./MobileMenu";
import Carrers from "../../pages/carrers";

const Header = ({ header }) => {
  const [navToggle, setNavToggle] = useState(false);
  const [searchToggle, setSearchToggle] = useState(false);
  useEffect(() => {
    stickyNav();
  }, []);
  switch (header) {
    case 1:
      return (
        <Header1
          navToggle={navToggle}
          setNavToggle={setNavToggle}
          searchToggle={searchToggle}
          setSearchToggle={setSearchToggle}
        />
      );
    case 2:
      return (
        <Header2
          navToggle={navToggle}
          setNavToggle={setNavToggle}
          searchToggle={searchToggle}
          setSearchToggle={setSearchToggle}
        />
      );
    case 3:
      return (
        <Header3
          navToggle={navToggle}
          setNavToggle={setNavToggle}
        />
      );
    default:
      // Use Header3 as default
      return (
        <Header3
          navToggle={navToggle}
          setNavToggle={setNavToggle}
        />
      );
  }
};
export default Header;

const Menus = () => {
  return (
    <ul className="navigation clearfix d-none d-lg-flex">
      <li className="dropdown">
        <a href="/">Home</a>
      </li>
      <li className="dropdown">
        <a href="/about">About us</a>
      </li>
      <li className="dropdown">
        <a href="#">Salon Services</a>
        <ul>
          <Services />
        </ul>
        <div className="dropdown-btn">
          <span className="fas fa-chevron-down" />
        </div>
      </li>
      <li className="dropdown">
        <a href="#">Gallery</a>
        <ul>
          <Gallery />
        </ul>
        <div className="dropdown-btn">
          <span className="fas fa-chevron-down" />
        </div>
      </li>
      <li className="dropdown">
        <a href="/carrers">Careers</a>
      </li>
      <Contact />
    </ul>
  );
};

const Header3 = ({
  navToggle,
  setNavToggle,
}) => {
  useEffect(() => {
    document.querySelector("body").className = "home-three";
  }, []);
  return (
    <header className="main-header header-five text-white">
      {/*Header-Upper*/}
      <div className="header-upper">
        <div className="container-fluid clearfix">
          <div className="header-inner d-flex align-items-center">
            <div className="logo-outer">
              <div className="logo">
                <Link href="/">
                  <img
                    src="/assets/images/logos/white-logo.png"
                    alt="Logo"
                    title="Logo"
                  />
                </Link>
              </div>
            </div>
            <div className="nav-outer clearfix">
              {/* Main Menu */}
              <nav className="main-menu navbar-expand-lg">
                <div className="navbar-header">
                  {/* Toggle Button */}
                  <button
                    type="button"
                    className="navbar-toggle"
                    data-toggle="collapse"
                    data-target=".navbar-collapse"
                    onClick={() => setNavToggle(!navToggle)}
                  >
                    <span className="icon-bar" />
                    <span className="icon-bar" />
                    <span className="icon-bar" />
                  </button>
                  <div className="mobile-logo p-15 m-auto">
                    <Link href="/">
                      <img
                        src="assets/images/logos/white-logo.png"
                        alt="Logo"
                        title="Logo"
                      />
                    </Link>
                  </div>
                </div>
                <div
                  className={`navbar-collapse collapse clearfix ${
                    navToggle ? "show" : ""
                  }`}
                >
                  <Menus />
                  <MobileMenu />
                </div>
              </nav>
              {/* Main Menu End*/}
            </div>
            {/* Menu Button */}
          </div>
        </div>
      </div>
      {/*End Header Upper*/}
    </header>
  );
};
