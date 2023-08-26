import Head from 'next/head';

export default function myEvents() {
  // const router = useRouter();
  return (
    <>
      <Head>
        <title>My Events</title>
      </Head>
      <div className="my-events-desc-text">
        <h3>This is where user-specific created events will go.</h3>
      </div>
    </>
  );
}
