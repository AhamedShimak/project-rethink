import React, { useState } from "react";

// import { MdKeyboardBackspace, MdSearch, MdSettings } from "react-icons/md";
import { Link, useHistory } from "react-router-dom";
//import { ReactSVG } from "react-svg";
import "./Home.css";
import { MdSearch, MdClose, MdFiberManualRecord } from "react-icons/md";
import { useDispatch } from "react-redux";
import { setSearch } from "../../actions/searchActions";
import HomeSearchContainer from "../../containers/search_box/SearchContainer";
const Main = () => {
  const [searchActive, setSearchActive] = useState(false);
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
    <div className="home__main">
      <div className="home__logo">
        <Link to="/">
          <div>
            {/* <ReactSVG src="svg.svg" /> */}
            <img
              src={process.env.PUBLIC_URL + "/assets/logo.svg"}
              alt="logo"
              className="logo"
              width="80px"
            />
          </div>
        </Link>
      </div>

      <div className="navigation_items">
        <HomeSearchContainer />
        {/* <div className="navigation_button">
          <MdSettings className="navigation__icon " />
        </div> */}
      </div>
    </div>
  );
};

export default Main;
