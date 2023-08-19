/* eslint-disable react/no-unescaped-entities */
// import { useRouter } from 'next/router';
// import { Button, Image, Carousel } from 'react-bootstrap';
// import { Button } from 'react-bootstrap';
import Head from 'next/head';

function Home() {
  // const router = useRouter();
  return (
    <>
      <Head>
        <title>Home Profile</title>
      </Head>
      <div className="homepage-desc-text">
        <h3>This is where the home/profile page contents will go.</h3>
      </div>
    </>
  );
}

export default Home;
