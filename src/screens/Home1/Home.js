import React from "react";

import Main from "./Main";
import HomeSection from "./HomeSection";
import Footer from "../../layout/Footer";
import CircleMenu from "../../components/circle_menu/CircleMenu";
import Ad from "../../layout/advertisement/Ad";
const Home = () => {
  return (
    <div className="home" style={{ paddingBottom: "40px" }}>
      <main className="home__main__container">
        <Main />
      </main>
      <Ad />
      <section className="home__selection__container">
        <HomeSection />
      </section>
      <section>
        <CircleMenu />
        <Footer />
      </section>
    </div>
  );
};

export default Home;
