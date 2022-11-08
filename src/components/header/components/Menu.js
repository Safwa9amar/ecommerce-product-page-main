import React from "react";

const Menu = ({ show }) => {
  return (
    <ul className={`menu ${show ? "flex" : ""}`}>
      <li className="menu__item">
        <a href="#nav" className="menu__item--link">
          Collections
        </a>
      </li>
      <li className="menu__item">
        <a href="#nav" className="menu__item--link">
          Men
        </a>
      </li>
      <li className="menu__item">
        <a href="#nav" className="menu__item--link">
          Women
        </a>
      </li>
      <li className="menu__item">
        <a href="#nav" className="menu__item--link">
          About
        </a>
      </li>
      <li className="menu__item">
        <a href="#nav" className="menu__item--link">
          Contact
        </a>
      </li>
    </ul>
  );
};

export default Menu;
