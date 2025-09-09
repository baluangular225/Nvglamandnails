import { Fragment, useState } from "react";
import {
  About,
  Contact,
  Gallery,
  Services,
} from "./Menus";
const MobileMenu = () => {
  const [activeMenu, setActiveMenu] = useState("");
  const activeMenuSet = (value) =>
      setActiveMenu(activeMenu === value ? "" : value),
    activeLi = (value) =>
      value === activeMenu ? { display: "block" } : { display: "none" };
  return (
    <Fragment>
      <ul className="navigation clearfix d-block d-lg-none">
        <li className="dropdown">
          <a href="/">Home</a>
        </li>
        <li className="dropdown">
          <a href="/about">About us</a>
        </li>
        <li className="dropdown">
          <a href="#">Salon Services</a>
          <ul style={activeLi("pages")}>
            <Services />
          </ul>
          <div onClick={() => activeMenuSet("pages")} className="dropdown-btn">
            <span className="fas fa-chevron-down" />
          </div>
        </li>
        <li className="dropdown">
          <a href="#">Gallery</a>
          <ul style={activeLi("portfolio")}>
            <Gallery />
          </ul>
          <div
            onClick={() => activeMenuSet("portfolio")}
            className="dropdown-btn"
          >
            <span className="fas fa-chevron-down" />
          </div>
        </li>
        <li className="dropdown">
          <a href="#">Careers</a>
        </li>
        <Contact />
      </ul>
    </Fragment>
  );
};
export default MobileMenu;
