import React from 'react';
import './Home.css';
import Header from '../../layout/Header';
import labs from '../../assets/labs.svg';
import lessons from '../../assets/lessons.svg';
import games from '../../assets/games.svg';
import papers from '../../assets/papers.svg';



const Home = () => {
  return (
    <div className="home">
      <Header />
      <section className="home__content">
        <h2 className="home__content__heading">
          The science of today is the technology of tomorrow
        </h2>
        <div className="home__content__background">
          {/*  <img src={process.env.PUBLIC_URL + '/assets/homeback.svg'} alt="background" className="background"/>*/}
          <div className="home__content__background__item item-1">
            <div className="home__content__background__item__column column-1">
              <p className="column-1__heading">LABS</p>
              <p className="column-1__content">
                Lorem ipsum dolor si adipisicing elit. Similique, aspernatur{' '}
              </p>
            </div>
            <div className="home__content__background__item__column column-2">
              <img className="column-2__image" src={labs} alt="labs" />
            </div>
          </div>
          <div className="home__content__background__item item-2">
          <div className="home__content__background__item__column column-1">
              <p className="column-1__heading">LESSONS</p>
              <p className="column-1__content">
                Lorem ipsum dolor si adipisicing elit. Similique, aspernatur{' '}
              </p>
            </div>
            <div className="home__content__background__item__column column-2">
              <img className="column-2__image" src={lessons} alt="lessons" />
            </div>
          </div>
          <div className="home__content__background__item item-3">
          <div className="home__content__background__item__column column-1">
              <p className="column-1__heading">GAMES</p>
              <p className="column-1__content">
                Lorem ipsum dolor si adipisicing elit. Similique, aspernatur{' '}
              </p>
            </div>
            <div className="home__content__background__item__column column-2">
              <img className="column-2__image" src={games} alt="games" />
            </div>
          </div>
          <div className="home__content__background__item item-4">
          <div className="home__content__background__item__column column-1">
              <p className="column-1__heading">PAPERS</p>
              <p className="column-1__content">
                Lorem ipsum dolor si adipisicing elit. Similique, aspernatur{' '}
              </p>
            </div>
            <div className="home__content__background__item__column column-2">
              <img className="column-2__image" src={papers} alt="papers" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
