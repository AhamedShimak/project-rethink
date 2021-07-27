import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import {
  MdSubject,
  MdTimer,
  MdQuestionAnswer,
  MdMenu,
  MdClear,
} from "react-icons/md";
import { ImLab } from "react-icons/im";

import "./header.css";
import { useDispatch } from "react-redux";
import BackButton from "../components/buttons/back_button/BackButton";
import { setSearch } from "../actions/searchActions";
import SearchContainer from "../containers/search_box/SearchContainer";
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
        <div className="header__nav__left">
          <div
            className="header__icons"
            className="header__icon__back"
            onClick={() => history.goBack()}>
            <BackButton />
          </div>
          <Link to="/">
            <div className="header__logo">
              <img
                src={process.env.PUBLIC_URL + "/assets/logo.svg"}
                alt="logo"
                className="logo"
                width="80px"
              />
            </div>
          </Link>
        </div>
        <div className="header__nav__right">
          <ul>
            <div
              className={`header__menu ${menuActive && "header__menu__open"}`}>
              <li onClick={() => setMenuActive(false)}>
                <Link to="/labs">
                  <ImLab className="header__ul__Icons" />
                  <div className="navi__menu">Labs</div>
                </Link>
              </li>

              <li onClick={() => setMenuActive(false)}>
                <Link to="/lessons">
                  <MdSubject className="header__ul__Icons" />
                  <div className="navi__menu">Lessons</div>
                </Link>
              </li>
              <li onClick={() => setMenuActive(false)}>
                <Link to="/courses">
                  <MdTimer className="header__ul__Icons" />
                  <div className="navi__menu">Courses</div>
                </Link>
              </li>
              <li onClick={() => setMenuActive(false)}>
                <Link to="/quiz">
                  <MdQuestionAnswer className="header__ul__Icons" />
                  <div className="navi__menu">Quizzes</div>
                </Link>
              </li>
            </div>

            <SearchContainer />
            <div
              className="layout__menu"
              onClick={() => setMenuActive(!menuActive)}>
              {!menuActive ? (
                <MdMenu style={{ color: "white" }} />
              ) : (
                <MdClear style={{ color: "white" }} />
              )}
            </div>
          </ul>
        </div>
      </nav>
      {/* menu for mobile devices */}
    </div>
  );
};

export default Header;
