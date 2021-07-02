import React from "react";
import Header from "./Header";
import Ad from "./advertisement/Ad";
import "./layout.css";
import Footer from "./Footer";
import CircleMenu from "../components/circle_menu/CircleMenu";
const Layout = ({ children }) => {
  return (
    <div className="layout">
      <div className="layout__info">
        <Header />
        <div className="layout__info__ad--mobile">
          <Ad />
        </div>
      </div>

      <section className="layout__content">
        <div className="layout__info__ad--desktop">
          <Ad desktop={true} />
        </div>
        <div className="layout__content__content">{children}</div>
      </section>
      <div>
        <Footer />
        <CircleMenu />
      </div>
    </div>
  );
};

export default Layout;
