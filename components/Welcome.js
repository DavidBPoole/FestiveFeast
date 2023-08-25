// import UserProfile from '../components/User';
import { Carousel, Image } from 'react-bootstrap';

export default function Welcome() {
  // const router = useRouter();
  return (
    <>
      <div className="welcome-banner">
        {/* Welcome! */}
        {/* Consider BrushSCript BT for font theme */}
      </div>
      <div className="carousel-banners">
        <Carousel fade>
          {/* <Carousel.Item interval={7000}>
            <Image className="welcomeGalleryImage" src="/buffet-plate.png" width="1500" height="auto" />
            <Carousel.Caption>
              <h3>WELCOME!</h3>
              <p>Food banner 1.</p>
            </Carousel.Caption>
          </Carousel.Item> */}
          <Carousel.Item interval={7000}>
            <Image className="welcomeGalleryImage" src="/holiday-banquet.png" width="1500" height="auto" />
            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Welcome banner.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={7000}>
            <Image className="welcomeGalleryImage" src="/appetizersImage.png" width="1500" height="auto" />
            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>Appetizers banner</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={7000}>
            <Image className="welcomeGalleryImage" src="/champagne-glasses.png" width="1500" height="auto" />
            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>Appetizers banner</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={7000}>
            <Image className="welcomeGalleryImage" src="/cheese-table.png" width="1500" height="auto" />
            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>Appetizers banner</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={7000}>
            <Image className="welcomeGalleryImage" src="/corporate-buffet.png" width="1500" height="auto" />
            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>Appetizers banner</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={7000}>
            <Image className="welcomeGalleryImage" src="/dessert-minis.png" width="1500" height="auto" />
            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>Appetizers banner</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={7000}>
            <Image className="welcomeGalleryImage" src="/fish-banquet-buffet.png" width="1500" height="auto" />
            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>Appetizers banner</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={7000}>
            <Image className="welcomeGalleryImage" src="/luncheon-table.png" width="1500" height="auto" />
            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>Appetizers banner</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={7000}>
            <Image className="welcomeGalleryImage" src="/social-buffet.png" width="1500" height="auto" />
            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>Appetizers banner</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </>
  );
}
