import React, { useState } from "react";

import { MdKeyboardBackspace, MdSearch } from "react-icons/md";
import { Link } from "react-router-dom";
import { ReactSVG } from "react-svg";
import "./Home.css";

const Main = () => {
  const [searchActive, setSearchActive] = useState(false);
  return (
    <div className="home__main">
      <nav>
        <div>
          <Link to="/">
            <div className="home__main__logo">
              {/* <ReactSVG src="svg.svg" /> */}
              <img
                src={process.env.PUBLIC_URL + "/assets/logo.svg"}
                alt="logo"
                className="logo"
              />
            </div>
          </Link>
        </div>

        <div
          className={`home__main__input  ${searchActive ? "home__main__search__diplay" : ""
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
            <MdSearch
              className="home__main__icons "
              onClick={() => setSearchActive(!searchActive)}
            />
          </li>
        </ul>
      </nav>

    </div>
  );
};

export default Main;
