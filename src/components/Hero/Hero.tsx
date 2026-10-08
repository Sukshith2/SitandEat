import { faBuildingCircleArrowRight } from '@fortawesome/free-solid-svg-icons';
import './Hero.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleArrowRight } from '@fortawesome/free-solid-svg-icons/faCircleArrowRight';

const Hero = () => {
  return (
     <section className="hero" id="home">
      <div className="hero__overlay">
        <div className="hero__container">
          <div className="hero__content">
            <span className="hero__eyebrow">EXCEPTIONAL FOOD · UNFORGETTABLE MOMENTS </span>
            <h1 className="hero__title"> Delicious Food for <br/><em>Every Occasion</em>
            </h1>

            <p className="hero__description">
              From intimate gatherings to grand celebrations, we serve
              fresh, flavorful, and unforgettable food.
            </p>

            <a href="#menu" className="hero__button">
              <span>Explore Our Menu</span><FontAwesomeIcon icon={faCircleArrowRight} /></a> 

            <div className="hero__features">
              <div className="hero__feature">
                <span className="hero__feature-icon" aria-hidden="true">✳</span>
                <span>Fresh<br />Ingredients</span>
              </div>

              <div className="hero__feature">
                <span className="hero__feature-icon" aria-hidden="true">♧</span>
                <span>Experienced<br />Chefs</span>
              </div>

              <div className="hero__feature">
                <span className="hero__feature-icon" aria-hidden="true">♙</span>
                <span>Perfect for<br />All Events</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero