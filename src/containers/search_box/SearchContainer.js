import React, { useState } from "react";

// import { MdKeyboardBackspace, MdSearch, MdSettings } from "react-icons/md";
import { useHistory } from "react-router-dom";
//import { ReactSVG } from "react-svg";
import "./SearchContainer.css";
import { MdSearch, MdClose, MdFiberManualRecord } from "react-icons/md";
import { useDispatch } from "react-redux";
import { setSearch } from "../../actions/searchActions";
const HomeSearchContainer = () => {
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
    <div className="home__search__container">
      <div
        className={`home__search  ${searchActive ? "home__search__display" : ""
          } `}>


        <input
          placeholder="Search"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          onKeyPress={(e) => e.key === "Enter" && submitHandler(e)}></input>
        <MdSearch
          className="home__searchin__icon"
          onClick={submitHandler}
        />
      </div>

      <div className="home__search__button">
        {searchActive ? (
          <MdClose
            className="home__search__button_icon "
            onClick={() => setSearchActive(!searchActive)}
          />
        ) : (
          <MdSearch
            className="home__search__button_icon "
            onClick={() => setSearchActive(!searchActive)}
          />
        )}
      </div>
    </div>
  );
};

export default HomeSearchContainer;
