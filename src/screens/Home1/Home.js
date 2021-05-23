import React from "react";

import Main from "./Main";
import HomeSection from "./HomeSection";

const Home = () => {
  return (


    <div className="home">


      <main className="home__main__container">
        <Main />
      </main>
      <section className="home__selection__container">
        <HomeSection />
      </section>



    </div>

  );
};


export default Home;
