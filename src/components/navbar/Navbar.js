import React, { memo } from "react";
import { IoSearchOutline } from "react-icons/io5";
import { CiUser } from "react-icons/ci";
import { BsCart2 } from "react-icons/bs";

import "../navbar/Navbar.css";
const Navbar = () => {
  let pages = [
    "Shop",
    "AI",
    "Mobile",
    "TV & Audio",
    "Appliances",
    "Displays",
    "Accessories",
    "SmartThings",
  ];
  let types = ["Explore", "Support", "For Bussines"];
  return (
    <div className="navbar">
      <div className="container">
        <div className="nav_contents">
          <h2 className="logo">SAMSUNG</h2>
          <div className="pages">
            <ul pages_lists>
              {pages?.map((e, i) => (
                <li className="lists" key={i}>
                  {e}
                </li>
              ))}
            </ul>
          </div>
          <div className="icons">
            <ul>
              {types?.map((el, inx) => (
                <li key={inx}>{el}</li>
              ))}
            </ul>
            <ul>
              <li>
                <IoSearchOutline />
              </li>
              <li>
                <BsCart2 />
              </li>
              <li>
                <CiUser />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(Navbar);
