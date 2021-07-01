import React from "react";

import Main from "./Main";
import HomeSection from "./HomeSection";
import Footer from "../../layout/Footer";
import CircleMenu from "../../components/circle_menu/CircleMenu";
const Home = () => {
  return (
    <div className="home">
      <main className="home__main__container">
        <Main />
      </main>
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
