import React from "react";

import Main from "./Main";
import HomeSection from "./HomeSection";

const Home = () => {
  return (


    <div className="home">

      <div className="test ">
        <main className="home__main__container">
          <Main />
        </main>
        <section className="home__selection__container">
          <HomeSection />
        </section>
      </div>


    </div>

  );
};


export default Home;
