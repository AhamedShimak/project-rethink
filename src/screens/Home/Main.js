import React, { useState } from "react";

import { MdKeyboardBackspace, MdSearch } from "react-icons/md";
import { Link } from "react-router-dom";
import "./Home.css";

const Main = () => {
  const [searchActive, setSearchActive] = useState(false);
  return (
    <div className="home__main">
      <nav>
        <div>
          <Link to="/">
            <div className="home__main__logo">
              <img
                src={process.env.PUBLIC_URL + "/assets/logo.png"}
                alt="logo"
                className="logo"
              />
            </div>
          </Link>
        </div>
        <h2 className="home__main__heading home__main__heading__desktop ">
          'The science of today is the technology of tomorrow'
        </h2>
        <div
          className={`home__main__input  ${
            searchActive ? "home__main__search__diplay" : ""
          } `}>
          <div className="home__main__icons home__main__search__closeIcon">
            <MdKeyboardBackspace
              onClick={() => setSearchActive(!searchActive)}
            />
          </div>

          <input placeholder="Search"></input>
          <MdSearch className=" home__main__icons home__main__input__icon" />
        </div>

        <ul>
          <li className="home__main__ul__searchIcon">
            <Link to="/">
              <MdSearch
                className="home__main__icons home__main__ul__searchIcon"
                onClick={() => setSearchActive(!searchActive)}
              />
            </Link>
          </li>
        </ul>
      </nav>
      <h2 className="home__main__heading">
        'The science of today is the technology of tomorrow'
      </h2>
    </div>
  );
};

export default Main;
