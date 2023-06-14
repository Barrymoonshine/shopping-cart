import './Home.css';
import Footer from '../Footer/Footer';
import cheeseMakingImg from '../../images/cheese-making.gif';

const Home = () => {
  return (
    <div>
      <div className='home-container'>
        <div className='home-details'>
          <div>
            <h1>Welcome to The Smelly Cheese Company</h1>
            <h3>
              We are purveyors of the smelliest fromage available on the market
              today!{' '}
            </h3>
            <p className='home-description'>
              If you like your cheese pungent, moldy and gooey - we’ve got you
              covered! Browse our selection of stinky cheese to find the cheese
              that’s right for you.
            </p>
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
      <Footer />
    </div>
  );
};

export default Home;
