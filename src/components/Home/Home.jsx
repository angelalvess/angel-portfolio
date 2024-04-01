import Data from './Data';
import Social from './Social';
import ScrollDown from './ScrollDown';
import './Home.css';

const Home = () => {
  return (
    <section className="home section" id="home">
      <div className="home-container container grid">
        <div className="home-content grid">
          <Social />
          <div className="home-img"></div>
          <Data />
        </div>

        <ScrollDown />
      </div>
    </section>
  );
};

export default Home;
