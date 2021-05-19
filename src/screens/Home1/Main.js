import React, { useState } from "react";

import { MdFace, MdKeyboardBackspace, MdSearch, MdSettings } from "react-icons/md";
import { Link } from "react-router-dom";
import { ReactSVG } from "react-svg";
import "./Home.css";

const Main = () => {
  const [searchActive, setSearchActive] = useState(false);
  return (
    <div className="home__main">

      <div className="home__logo">

        <Link to="/">
          <div >
            {/* <ReactSVG src="svg.svg" /> */}
            <img
              src={process.env.PUBLIC_URL + "/assets/logo.svg"}
              alt="logo"
              className="logo"
            />
          </div>
        </Link>
      </div>





      <div className="navigation_items">
        <div className="home__search__container">
          <div
            className={`home__search  ${searchActive ? "home__search__display" : ""
              } `}>
            <div className="home__icons home__search__back">
              <MdKeyboardBackspace
                onClick={() => setSearchActive(!searchActive)}
              />
            </div>

            <input placeholder="Search"></input>
            <MdSearch className=" home__icons home__searchin__icon" />
          </div>


          <div className="home__search__button">

            <MdSearch
              className="home__search__button_icon "
              onClick={() => setSearchActive(!searchActive)}
            />

          </div>




        </div>
        <div className="navigation_button">

          <MdSettings
            className="navigation__icon "

          />

        </div>


      </div>



    </div>
  );
};

export default Main;
