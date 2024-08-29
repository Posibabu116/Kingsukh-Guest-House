
import styled from 'styled-components';
import { FaFacebook, FaTwitter, FaYoutube, FaLinkedin } from 'react-icons/fa';

const ContactSection = styled.div`
  padding: 50px;
  background-color: #f8f9fa;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  .contact-info {
    flex: 1;
    margin: 20px;
    padding: 20px;
    border: 1px solid #ddd;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    background-color: #ffc0cb; /* Pink background */
    max-width: 400px;
    flex-direction: coloumn;
    align-items: center;
    justify-conternt: space-around;

    h3 {
      margin-bottom: 20px;
    }

    p {
      margin: 10px 0;
    }

    .social-icons {
      display: flex;
      justify-content: space-around;
      margin-top: 20px;

      a {
        color: #333;
        font-size: 1.5rem;
        transition: color 0.3s ease;

        &:hover {
          color: #007bff;
        }
      }
    }
  }

  .contact-form {
    flex: 2;
    margin: 20px;
    padding: 20px;
    border: 1px solid #ddd;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    background-color: white;

    h3 {
      margin-bottom: 20px;
    }

    form {
      display: flex;
      flex-direction: column;

      input, textarea {
        margin-bottom: 10px;
        padding: 10px;
        border: 1px solid #ddd;
        border-radius: 5px;
        background-color: #ffc0cb;
      }

      button {
        padding: 10px;
        border: none;
        border-radius: 5px;
        background-color: pink;
        color: #fff;
        cursor: pointer;
        transition: background-color 0.3s ease;

        &:hover {
          background-color: #0056b3;
        }
      }
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Contact = () => {
  return (
    <ContactSection id="contact">
      <div className="contact-info">
        <h3>Contact Info</h3>
        <p>Beside Barshal Water Tank, Manpur, Barhanti, West Bengal 723156</p>
        <p>Email: kkghoshC099@gmail.com</p>
        <p>Phone: +91 9007082180</p>
        <div className="social-icons">
          <a href="https://facebook.com"><FaFacebook /></a>
          <a href="https://twitter.com"><FaTwitter /></a>
          <a href="https://youtube.com"><FaYoutube /></a>
          <a href="https://linkedin.com"><FaLinkedin /></a>
        </div>
      </div>
      <div className="contact-form">
        <h3>Send a Message</h3>
        <form>
          <input type="text" placeholder="First Name" required />
          <input type="text" placeholder="Last Name" required />
          <input type="email" placeholder="Email Address" required />
          <input type="tel" placeholder="Mobile Number" required />
          <textarea placeholder="Write your message here..." rows="5" required></textarea>
          <button type="submit">Send</button>
        </form>
      </div>
    </ContactSection>
  );
};

export default Contact;
