import React from "react";

import Main from "./Main";
import HomeSection from "./HomeSection";
import Footer from "../../layout/Footer";
import CircleMenu from "../../components/circle_menu/CircleMenu";
import Ad from "../../layout/advertisement/Ad";
const Home = () => {
  return (
    <div className="home">
      <main className="home__main__container">
        <Main />
      </main>
      <Ad />
      <section className="home__selection__container">
        <HomeSection />
      </section>
      <div className="onesignal-customlink-container"></div>
      <section>
        <CircleMenu />
        <Footer />
      </section>
    </div>
  );
};

export default Home;
