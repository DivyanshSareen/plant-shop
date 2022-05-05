import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section>
      <Link to='/listing'>
        <div className='hero'>
          <h1 className='hero-title h1'> PlantShop </h1>
          <div className='hero-subtitle h4'>Plants that make people happy</div>
        </div>
      </Link>
    </section>
  );
};
export default Hero;
