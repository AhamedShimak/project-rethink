import React from "react";
import Header from "./Header";
import Ad from "./advertisement/Ad";
const Layout = ({ children }) => {
  return (
    <div className="layout">
      <div className="layout__info">
        <Header />
        <Ad />
      </div>

      <section className="layout__content">{children}</section>
    </div>
  );
};

export default Layout;
