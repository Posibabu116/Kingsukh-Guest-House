


import styled from 'styled-components';
import galleryImage1 from '../assets/1.jpg'; 
import galleryImage2 from '../assets/ayodhya.webp'; 
import galleryImage3 from '../assets/baranti.webp'; 
import galleryImage4 from '../assets/flower.jpg'; 
import galleryImage5 from '../assets/header.jpg'; 
import galleryImage6 from '../assets/mithonDam.webp'; 
import galleryImage7 from '../assets/palash.webp'; 
import galleryImage8 from '../assets/recep.jpg'; 
import galleryImage9 from '../assets/small.jpg'; 
import galleryImage10 from '../assets/out.jpg'; 

const GallerySection = styled.div`
  padding: 50px;
  background-color: #fff;
  text-align: center;

  .section-title {
    margin-bottom: 40px;
  }

  .gallery-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 20px;
  }

  .gallery-item {
    position: relative;
    overflow: hidden;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

    img {
      width: 100%;
      height: 300px; /* Ensuring all images have the same height */
      object-fit: cover; /* Ensuring the images cover the area without distortion */
      transition: transform 0.3s ease;
    }

    &:hover img {
      transform: scale(1.1);
    }

    .overlay {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.5);
      color: white;
      display: flex;
      justify-content: center;
      align-items: center;
      opacity: 0;
      transition: opacity 0.3s ease;
    }

    &:hover .overlay {
      opacity: 1;
    }
  }
`;

const Gallery = () => {
  return (
    <GallerySection id="gallery">
      <div className="section-title">
        <h2>Gallery</h2>
      </div>
      <div className="gallery-grid">
        <div className="gallery-item">
          <img src={galleryImage1} alt="Gallery Image 1" />
          <div className="overlay">Winding dirt road through a green forest</div>
        </div>
        <div className="gallery-item">
          <img src={galleryImage2} alt="Gallery Image 2" />
          <div className="overlay">Panoramic view of a dense forest with mist-covered mountains</div>
        </div>
        <div className="gallery-item">
          <img src={galleryImage3} alt="Gallery Image 3" />
          <div className="overlay">Volcanic mountain with a distinct crater</div>
        </div>
        <div className="gallery-item">
          <img src={galleryImage4} alt="Gallery Image 4" />
          <div className="overlay">Vibrant orange foliage against a clear blue sky</div>
        </div>
        <div className="gallery-item">
          <img src={galleryImage5} alt="Gallery Image 5" />
          <div className="overlay">Interior room with teal walls and an armchair</div>
        </div>
        <div className="gallery-item">
          <img src={galleryImage6} alt="Gallery Image 6" />
          <div className="overlay">Aerial view of a dam with water and rocky ground</div>
        </div>
        <div className="gallery-item">
          <img src={galleryImage7} alt="Gallery Image 7" />
          <div className="overlay">Tree canopy covered in autumn leaves</div>
        </div>
        <div className="gallery-item">
          <img src={galleryImage8} alt="Gallery Image 8" />
          <div className="overlay">Bathroom interior with patterned tiles and glass partition</div>
        </div>
        <div className="gallery-item">
          <img src={galleryImage9} alt="Gallery Image 9" />
          <div className="overlay">Bedroom interior with pink walls and white bedding</div>
        </div>
        <div className="gallery-item">
          <img src={galleryImage10} alt="Gallery Image 10" />
          <div className="overlay">Exterior shot of buildings with traditional architecture</div>
        </div>
      </div>
    </GallerySection>
  );
};

export default Gallery;
