import './Home.css';
import cheeseMakingImg from '../../images/cheese-making.gif';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className='home-container'>
      <div className='home-details'>
        <div className='right-home-container'>
          <h1>Artisanal cheese.</h1>
          <h3>Purveyors of the finest fromage. </h3>
          <p className='home-description'>
            If you like your cheese pungent, moldy and gooey - we’ve got you
            covered! Browse our selection of hand-crafted cheeses to find the
            cheese that’s right for you.
          </p>
          <Link to='components/ProductsContainer/ProductsContainer'>
            <button className='explore-button'>Explore</button>
          </Link>
        </div>
        <div>
          <img
            className='cheese-making-img'
            src={cheeseMakingImg}
            alt='Cheese making'
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
