import React from "react";
import { FaSearch } from "react-icons/fa";
import "./header.css";
const Header = () => {
  return <div className="header">
    <div className="header__logo">
      <img src={process.env.PUBLIC_URL + '/assets/logo.png'} alt="logo" className="logo"/>
    </div>

    <input type="checkbox" id="check"/>
    
    <div className="header__searchbar">
      <input type="text" placeholder="Search"/>
      <label for="check"><i><FaSearch/></i></label>
    </div>
    
  </div>;
};

export default Header;
