import styled from 'styled-components';
import heroImage from '../assets/ayodhya.webp'; 

const Hero = styled.div`
  background-image: url(${heroImage});
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  text-align: center;
  position:relative;
  top:-10vh;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);

  .hero-text {
    background: rgba(0, 0, 0, 0.5);
    padding: 20px;
    border-radius: 10px;
  }

  .hero-buttons {
    margin-top: 20px;
    button {
      margin: 0 10px;
    }
  }

  @media (max-width: 768px) {
    height: 70vh;

    .hero-text {
      padding: 10px;
    }

    .hero-buttons {
      flex-direction: column;
      button {
        margin: 10px 0;
      }
    }
  }

  @media (max-width: 480px) {
    height: 60vh;

    .hero-text {
      padding: 5px;
    }

    .hero-buttons {
      button {
        margin: 5px 10px;
      }
    }
  }
`;

const HeroSection = () => {
  const whatsappLink = 'https://api.whatsapp.com/send?phone=919007062180';
  return (
    <Hero>
      <div className="hero-text">
        <h1>Make Yourself At Home In Our Guest House</h1>
        <div className="hero-buttons">
        <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
            Book Now
          </a>
                    <button className="btn btn-secondary">Learn More</button>
        </div>
      </div>
    </Hero>
  );
};

export default HeroSection;


