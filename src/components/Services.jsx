
import styled from 'styled-components';
import { FaShieldAlt, FaBed, FaMapSigns } from 'react-icons/fa'; 

const ServicesSection = styled.div`
  padding: 50px;
  background-color: #f8f9fa;
  text-align: center;

  .section-title {
    margin-bottom: 40px;
  }

  .services-cards {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
  }

  .service-card {
    flex: 1;
    margin: 20px;
    padding: 20px;
    border: 1px solid #ddd;
    border-radius: 10px;
    text-align: center;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

    h3 {
      margin-top: 20px;
    }

    p {
      margin: 10px 0;
    }

    .icon {
      font-size: 2rem;
      margin-bottom: 10px;
    }
  }

  .stats {
    display: flex;
    justify-content: space-around;
    margin-top: 40px;
  }

  .stat {
    flex: 1;
    margin: 20px;
    padding: 20px;
    border: 1px solid #ddd;
    border-radius: 10px;
    text-align: center;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

    h3 {
      margin-top: 20px;
    }

    p {
      margin: 10px 0;
    }
  }

  @media (max-width: 768px) {
    .services-cards, .stats {
      flex-direction: column;
      align-items: center;
    }
  }
`;

const Services = () => {
  return (
    <ServicesSection id="services">
      <div className="section-title">
        <h2>Services</h2>
        <p>Strive Only For The Best</p>
      </div>
      <div className="services-cards">
        <div className="service-card">
          <FaShieldAlt className="icon" />
          <h3>High Class Security</h3>
          <p>Ensuring your safety with top-notch security measures.</p>
        </div>
        <div className="service-card">
          <FaBed className="icon" />
          <h3>24 Hours Room Service</h3>
          <p>Providing round-the-clock room service for your convenience.</p>
        </div>
        <div className="service-card">
          <FaMapSigns className="icon" />
          <h3>Tourist Guide Support</h3>
          <p>Offering expert guidance to explore local attractions.</p>
        </div>
      </div>
      <div className="stats">
        <div className="stat">
          <h3>100+</h3>
          <p>Bookings Completed</p>
        </div>
        <div className="stat">
          <h3>150+</h3>
          <p>Happy Customers</p>
        </div>
      </div>
    </ServicesSection>
  );
};

export default Services;

