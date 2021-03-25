import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import {
  MdKeyboardBackspace,
  MdSearch,
  MdSubject,
  MdVideogameAsset,
  MdTimer,
} from "react-icons/md";
import { IoIosArrowBack, IoIosClose } from "react-icons/io";
import { ImLab } from "react-icons/im";

import "./header.css";
const Header = () => {
  const [searchActive, setSearchActive] = useState(false);
  const [menuActive, setMenuActive] = useState(false);

  let history = useHistory();
  return (
    <div className="header">
      <nav className="header__nav">
        <div>
          <div className="header__icons header__search__closeIcon">
            <IoIosArrowBack onClick={() => history.push("/")} />
          </div>
        </div>
        <div>
          <Link to="/">
            <div className="header__logo">
              <img
                src={process.env.PUBLIC_URL + "/assets/logo.png"}
                alt="logo"
                className="logo"
              />
            </div>
          </Link>
        </div>

        <div
          className={`header__input  ${
            searchActive ? "header__search__diplay" : ""
          } `}>
          <div className="header__icons header__search__closeIcon">
            <IoIosClose
              onClick={() => setSearchActive(!searchActive)}
            />
          </div>

          <input placeholder="Search"></input>
          <MdSearch className=" header__icons header__input__icon" />
        </div>

        <ul>
          <div className={`header__menu ${menuActive && "header__menu__open"}`}>
            <li>
              <Link to="/labs">
                <ImLab />
                Labs
              </Link>
            </li>
            <li>
              <Link to="/papers">
                <MdTimer />
                Exams
              </Link>
            </li>
            <li>
              <Link to="/lessons">
                <MdSubject />
                Lessons
              </Link>
            </li>
            <li>
              <Link to="/games">
                <MdVideogameAsset />
                Games
              </Link>
            </li>
          </div>

          <li className="header__ul__searchIcon">
            <MdSearch
              className="header__ul__searchIcon"
              style={{ margin: "auto" }}
              onClick={() => setSearchActive(!searchActive)}
            />
          </li>
        </ul>
      </nav>
      {/* menu for mobile devices */}
      <div className="layout__menu" onClick={() => setMenuActive(!menuActive)}>
        <span className={`menu__line ${menuActive && "menu_line-1"}`}></span>
        <span className={`menu__line ${menuActive && "menu_line-2"}`}></span>
        <span className={`menu__line ${menuActive && "menu_line-3"}`}></span>
      </div>
    </div>
  );
};

export default Header;
