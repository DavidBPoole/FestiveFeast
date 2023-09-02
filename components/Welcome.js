// import UserProfile from '../components/User';
import { useRouter } from 'next/router';
import { Button, Carousel, Image } from 'react-bootstrap';

export default function Welcome() {
  const router = useRouter();
  return (
    <>
      <div className="carousel-banners">
        <Carousel fade>
          <Carousel.Item interval={7000}>
            <Image className="welcomeGalleryImage" src="/holiday-banquet.png" width="1500" height="auto" />
            <Carousel.Caption>
              <div className="carouselFont"><em><b>Festive Feast</b></em></div>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={7000}>
            <Image className="welcomeGalleryImage" src="/appetizersImage.png" width="1500" height="auto" />
            <Carousel.Caption>
              <div className="carouselFont"><em><b>Festive Feast</b></em></div>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={7000}>
            <Image className="welcomeGalleryImage" src="/champagne-glasses.png" width="1500" height="auto" />
            <Carousel.Caption>
              <div className="carouselFont"><em><b>Festive Feast</b></em></div>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={7000}>
            <Image className="welcomeGalleryImage" src="/dessert-minis.png" width="1500" height="auto" />
            <Carousel.Caption>
              <div className="carouselFont"><em><b>Festive Feast</b></em></div>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={7000}>
            <Image className="welcomeGalleryImage" src="/luncheon-table.png" width="1500" height="auto" />
            <Carousel.Caption>
              <div className="carouselFont"><em><b>Festive Feast</b></em></div>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={7000}>
            <Image className="welcomeGalleryImage" src="/social-buffet.png" width="1500" height="auto" />
            <Carousel.Caption>
              <div className="carouselFont"><em><b>Festive Feast</b></em></div>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
      <div className="welcomeBtnContainer">
        <Button
          variant="dark"
          type="button"
          size="lg"
          className="welcomeButton"
          style={{ backgroundColor: 'maroon' }}
          onClick={() => {
            router.push('/events');
          }}
        >
          <b><em>Plan Your Next Event! &rarr;</em></b>
        </Button>
      </div>
    </>
  );
}
