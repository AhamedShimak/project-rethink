import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import {
  MdSubject,
  MdTimer,
  MdKeyboardBackspace,
  MdSearch,
} from "react-icons/md";
import { ImLab } from "react-icons/im";

import "./header.css";
import { useDispatch } from "react-redux";
import BackButton from "../components/buttons/back_button/BackButton";
import { setSearch } from "../actions/searchActions";
const Header = () => {
  const [searchActive, setSearchActive] = useState(false);
  const [menuActive, setMenuActive] = useState(false);
  const [keyword, setKeyword] = useState("");

  let history = useHistory();
  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();

    if (keyword) {
      setSearch(dispatch, keyword);
      history.push(`/search/?keyword=${keyword}`);
      // setKeyword("");
    } else {
      history.push(history.push(history.location.pathname));
    }
  };
  return (
    <div className="header">
      <nav className="header__nav">


        <Link to="/">
          <div className="header__logo" >
            <img
              src={process.env.PUBLIC_URL + "/assets/logo.svg"}
              alt="logo"
              className="logo"
              width="80px"
            />
          </div>
        </Link>

        <div
          className={`header__input  ${searchActive ? "header__search__diplay" : ""
            } `}>
          <div className="header__icons header__search__closeIcon">
            <MdKeyboardBackspace
              onClick={() => setSearchActive(!searchActive)}
            />
          </div>

          <input
            placeholder="Search"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
            onKeyPress={(e) => e.key === "Enter" && submitHandler(e)}></input>
          <MdSearch
            className=" header__icons header__input__icon"
            onClick={submitHandler}
          />
        </div>

        <ul>
          <div className={`header__menu ${menuActive && "header__menu__open"}`}>
            <li onClick={() => setMenuActive(false)}>
              <Link to="/labs" >
                <ImLab
                  className="header__ul__Icons"
                />
                <div className="navi__menu" >Labs</div>
              </Link>
            </li>

            <li onClick={() => setMenuActive(false)}>
              <Link to="/lessons">
                <MdSubject
                  className="header__ul__Icons"
                />
                <div className="navi__menu">Lessons</div>
              </Link>
            </li>
            <li onClick={() => setMenuActive(false)}>
              <Link to="/courses">
                <MdTimer
                  className="header__ul__Icons"
                />
                <div className="navi__menu">Free courses</div>
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
        <div
          className="header__icons"
          className="header__icon__back"
          onClick={() => history.goBack()}>
          <BackButton />
        </div>
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
