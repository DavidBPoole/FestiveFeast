import Head from 'next/head';

export default function Profile() {
  // const router = useRouter();
  return (
    <>
      <Head>
        <title>Profile</title>
      </Head>
      <div className="profile-desc-text">
        <h3>This is where the profile page contents will go.</h3>
      </div>
    </>
  );
}
