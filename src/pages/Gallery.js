import './Gallery.css';
import GalleryImg1 from '../imgs/GalleryImg1.png';
import GalleryImg2 from '../imgs/GalleryImg2.png';
import GalleryImg3 from '../imgs/GalleryImg3.png';
import GalleryImg4 from '../imgs/GalleryImg4.png';

function Home() {
    return (
      <div className="GalleryImgs">
          <img className="GalleryImg" src={GalleryImg1} alt="gallery img" />
          <img className="GalleryImg" src={GalleryImg2} alt="gallery img" />
          <img className="GalleryImg" src={GalleryImg3} alt="gallery img" />
          <img className="GalleryImg" src={GalleryImg4} alt="gallery img" />
      </div>
    );
  }
  
export default Home;