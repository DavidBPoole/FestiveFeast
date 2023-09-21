import { Carousel, Image } from 'react-bootstrap';

export default function WelcomeProfile() {
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
    </>
  );
}
