/* eslint-disable react/no-unescaped-entities */
import Head from 'next/head';
import Welcome from '../components/Welcome';

export default function Home() {
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
