
import styled from 'styled-components';
import { FaFacebook, FaTwitter, FaYoutube, FaLinkedin } from 'react-icons/fa';

const FooterSection = styled.footer`
  background-color: #000;
  color: #fff;
  padding: 50px 20px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  text-align: center;

  .footer-column {
    flex: 1;
    margin: 20px;
    min-width: 200px;

    h3 {
      margin-bottom: 20px;
    }

    ul {
      list-style: none;
      padding: 0;

      li {
        margin: 10px 0;

        a {
          color: #fff;
          text-decoration: none;
          transition: color 0.3s ease;

          &:hover {
            color: #007bff;
          }
        }
      }
    }
  }

  .contact-info {
    p {
      margin: 10px 0;
    }

    .social-icons {
      display: flex;
      justify-content: space-around;
      margin-top: 20px;

      a {
        color: #fff;
        font-size: 1.5rem;
        transition: color 0.3s ease;

        &:hover {
          color: #007bff;
        }
      }
      
    }
        h6{
      
        margin-top:70px;
        }
  }

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Footer = () => {
  const whatsappLink = 'https://api.whatsapp.com/send?phone=919007062180';
  return (
    
  <>
    <FooterSection>
      <div className="footer-column">
        <h3>Kingsouth Guest House</h3>
        <p>Discover a world of comfort, luxury, and adventure as you explore our curated selection of hotels, making every moment of your getaway truly extraordinary.</p>
        <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
            Book Now
          </a>
      </div>
      <div className="footer-column">
        <h3>QUICK LINKS</h3>
        <ul>
          <li><a href="#reviews">Customer Reviews & Testimonials</a></li>
          <li><a href="#tips">Travel Tips & Guides</a></li>
          <li><a href="#destinations">Browse Destinations</a></li>
          <li><a href="#offers">Special Offers & Packages</a></li>
          <li><a href="#booking">Flexible Booking Options</a></li>
        </ul>
      </div>
      <div className="footer-column">
        <h3>OUR SERVICES</h3>
        <ul>
          <li><a href="#concierge">Concierge Assistance</a></li>
          <li><a href="#transfers">Airport Transfers</a></li>
          <li><a href="#wellness">Wellness & Recreation</a></li>
        </ul>
      </div>
      <div className="footer-column contact-info">
        <h3>CONTACT US</h3>
        <p>Beside Barshal Water Tank, Manpur, Barhanti, West Bengal 723156</p>
        <p>Email: kkghoshC099@gmail.com</p>
        <p>Phone: +91 9007082180</p>
        <div className="social-icons">
          <a href="https://facebook.com"><FaFacebook /></a>
          <a href="https://twitter.com"><FaTwitter /></a>
          <a href="https://youtube.com"><FaYoutube /></a>
          <a href="https://linkedin.com"><FaLinkedin /></a>
        </div>
        <span className=''>Copyright © 2024 Kingsukh Guest House. All rights reserved.</span>  
      </div>
             
    </FooterSection>
  </>
  );
};

export default Footer;
