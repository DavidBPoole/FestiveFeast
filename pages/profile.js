import Head from 'next/head';
// import { Button } from 'react-bootstrap';
import { Carousel, Image } from 'react-bootstrap';
import UserProfile from '../components/User';
// import Welcome from '../components/Welcome';
// import { signOut } from '../utils/auth';

export default function Profile() {
  // const router = useRouter();
  return (
    <>
      <Head>
        <title>Profile</title>
      </Head>
      <div className="profile-desc-text">
        {/* <h3>This is where the user profile page contents will go.</h3> */}
      </div>
      {/* <div>
        <Welcome />
      </div> */}
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
          {/* <Carousel.Item interval={7000}>
            <Image className="welcomeGalleryImage" src="/cheese-table.png" width="1500" height="auto" />
            <Carousel.Caption>
              <div className="carouselFont"><em><b>Festive Feast</b></em></div>
            </Carousel.Caption>
          </Carousel.Item> */}
          {/* <Carousel.Item interval={7000}>
            <Image className="welcomeGalleryImage" src="/corporate-buffet.png" width="1500" height="auto" />
            <Carousel.Caption>
              <div className="carouselFont"><em><b>Festive Feast</b></em></div>
            </Carousel.Caption>
          </Carousel.Item> */}
          <Carousel.Item interval={7000}>
            <Image className="welcomeGalleryImage" src="/dessert-minis.png" width="1500" height="auto" />
            <Carousel.Caption>
              <div className="carouselFont"><em><b>Festive Feast</b></em></div>
            </Carousel.Caption>
          </Carousel.Item>
          {/* <Carousel.Item interval={7000}>
            <Image className="welcomeGalleryImage" src="/fish-banquet-buffet.png" width="1500" height="auto" />
            <Carousel.Caption>
              <div className="carouselFont"><em><b>Festive Feast</b></em></div>
            </Carousel.Caption>
          </Carousel.Item> */}
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
      <div className="profile-banner">
        {/* <h1>Profile Page</h1> */}
      </div>
      <div>
        <UserProfile />
      </div>
    </>
  );
}
