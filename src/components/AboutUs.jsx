

import styled from 'styled-components';
import aboutImage from '../assets/out.jpg'; 

const AboutSection = styled.div`
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  padding: 50px;
  background-color: #f8f9fa;
  .about-text {
    flex: 1;
    padding: 20px;
  }

  .about-image {
    flex: 1;
    img {
      width: 70%;
      height: auto;
      border-radius: 10px;
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
    text-align:center;
    .about-image {
      margin-bottom: 20px;
      width:90%;
    }
  }
`;

const AboutUs = () => {
  const whatsappLink = 'https://api.whatsapp.com/send?phone=919007062180';
  return (
    <AboutSection id="about">
      <div className="about-text">
        <h2>About Us</h2>
        <p>
          Embark on a tranquil journey at our Kingfish Guest House, enveloped by the scenic allure of various hills and dams. Revel in the embrace of comfort, relish delightful meals, and unwind in our verdant garden oasis. Your ideal retreat beckons, promising a harmonious blend of nature's beauty and heartfelt hospitality.
        </p>
        <p>
          Address: Beside Barshal Water Tank, Manpur, Barhanti, West Bengal 723156
        </p>
        <p>
          Contact us: +91 9007062180
        </p>
        <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
          Book Now
        </a>
      </div>
      <div className="about-image">
        <img src={aboutImage} alt="Krishnagiri Guest House" />
      </div>
    </AboutSection>
  );
};
export default AboutUs;

