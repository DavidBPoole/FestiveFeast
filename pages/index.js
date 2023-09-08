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
        <title>Festive Feast</title>
      </Head>
      <div className="homepage-desc-text" />
      <div>
        <Welcome />
      </div>
    </>
  );
}
