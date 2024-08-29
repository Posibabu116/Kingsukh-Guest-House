
import styled from 'styled-components';
import cozyHavenImage from '../assets/room1.jpg'; 
import spaciousSerenityImage from '../assets/room2.jpg'; 

const LivingRoomSection = styled.div`
  padding: 50px;
  background-color: #fff;

  .section-title {
    text-align: center;
    margin-bottom: 40px;
  }

  .room-cards {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
  }

  .room-card {
    flex: 1;
    margin: 20px;
    padding: 20px;
    border: 1px solid #ddd;
    border-radius: 10px;
    text-align: center;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

    img {
      width: 100%;
      height: auto;
      border-radius: 10px;
    }

    h3 {
      margin-top: 20px;
    }

    p {
      margin: 10px 0;
    }

    button {
      margin-top: 20px;
    }
  }

  @media (max-width: 768px) {
    .room-cards {
      flex-direction: column;
      align-items: center;
    }
  }
`;

const LivingRoom = () => {
  const whatsappLink = 'https://api.whatsapp.com/send?phone=919007062180';
  return (
    <LivingRoomSection id="living-room">
      <div className="section-title">
        <h2>Our Living Room</h2>
        <p>The Most Memorable Rest Time Starts Here</p>
      </div>
      <div className="room-cards">
        <div className="room-card">
          <img src={cozyHavenImage} alt="Cozy Haven Room" />
          <h3>Cozy Haven Room</h3>
          <p>Escape to comfort in our Cozy Haven Room, a snug retreat designed for intimate relaxation.</p>
          <p>Starting from Rs. 1000/night</p>
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
            Book Now
          </a>        
        </div>
        <div className="room-card">
          <img src={spaciousSerenityImage} alt="Spacious Serenity Suite" />
          <h3>Spacious Serenity Suite</h3>
          <p>Indulge in luxury and ample space in our Spacious Serenity Suite, where tranquility meets roomy elegance.</p>
          <p>Starting from Rs. 1500/night</p>
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
            Book Now
          </a>        
        </div>
      </div>
    </LivingRoomSection>
  );
};

export default LivingRoom;
