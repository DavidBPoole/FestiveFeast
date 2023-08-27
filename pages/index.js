/* eslint-disable react/no-unescaped-entities */
// import { useRouter } from 'next/router';
// import { Button, Image, Carousel } from 'react-bootstrap';
// import { Button } from 'react-bootstrap';
import Head from 'next/head';
import Welcome from '../components/Welcome';

export default function Home() {
  // const router = useRouter();
  return (
    <>
      <Head>
        <title>Home Profile</title>
      </Head>
      <div className="homepage-desc-text">
        {/* <h3>This is where the home/welcome page contents will go.</h3> */}
      </div>
      <div>
        <Welcome />
      </div>
      {/* <h1>Home Page</h1> */}
    </>
  );
}

// export default Home;
