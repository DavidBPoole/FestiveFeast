/* eslint-disable react/no-unescaped-entities */
// import UserProfile from '../components/User';
import { useRouter } from 'next/router';
import { Button, Carousel, Image } from 'react-bootstrap';

export default function Welcome() {
  const router = useRouter();
  return (
    <>
      <hr />
      <div className="carousel-banners">
        <Carousel fade>
          <Carousel.Item interval={4000}>
            <Image className="welcomeGalleryImage" src="/holiday-banquet.png" width="1500" height="auto" />
            <Carousel.Caption>
              <div className="carouselFont"><em><b>Festive Feast</b></em></div>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={4000}>
            <Image className="welcomeGalleryImage" src="/feasttable.png" width="1500" height="auto" />
            <Carousel.Caption>
              <div className="carouselFont"><em><b>Festive Feast</b></em></div>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={4000}>
            <Image className="welcomeGalleryImage" src="/factoryFeast.png" width="1500" height="397" />
            <Carousel.Caption>
              <div className="carouselFont"><em><b>Festive Feast</b></em></div>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={4000}>
            <Image className="welcomeGalleryImage" src="/flowersInRain.png" width="1500" height="auto" />
            <Carousel.Caption>
              <div className="carouselFont"><em><b>Festive Feast</b></em></div>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={4000}>
            <Image className="welcomeGalleryImage" src="/appetizersImage.png" width="1500" height="auto" />
            <Carousel.Caption>
              <div className="carouselFont"><em><b>Festive Feast</b></em></div>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={4000}>
            <Image className="welcomeGalleryImage" src="/champagne-glasses.png" width="1500" height="auto" />
            <Carousel.Caption>
              <div className="carouselFont"><em><b>Festive Feast</b></em></div>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={4000}>
            <Image className="welcomeGalleryImage" src="/dessert-minis.png" width="1500" height="auto" />
            <Carousel.Caption>
              <div className="carouselFont"><em><b>Festive Feast</b></em></div>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={4000}>
            <Image className="welcomeGalleryImage" src="/foodimage1.png" width="1500" height="397" />
            <Carousel.Caption>
              <div className="carouselFont"><em><b>Festive Feast</b></em></div>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={4000}>
            <Image className="welcomeGalleryImage" src="/luncheon-table.png" width="1500" height="auto" />
            <Carousel.Caption>
              <div className="carouselFont"><em><b>Festive Feast</b></em></div>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={4000}>
            <Image className="welcomeGalleryImage" src="/social-buffet.png" width="1500" height="auto" />
            <Carousel.Caption>
              <div className="carouselFont"><em><b>Festive Feast</b></em></div>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
      &nbsp;
      <hr />
      <div className="slogan-body">
        <h4><b>Coordinating events, schedules, and holidays couldn't be simpler! With <em>Festive Feast</em> we take the headaches and guesswork out of your next event creating a more seamless and enjoyable festive season.</b></h4>
        <h4><b>Plan your next family & friends gathering with ease and let's..</b></h4>
        <h4><b>Feast!</b></h4>
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
      <hr />
    </>
  );
}
