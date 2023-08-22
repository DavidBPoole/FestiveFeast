import Head from 'next/head';
import UserProfile from '../components/User';
import Welcome from '../components/Welcome';

export default function Profile() {
  // const router = useRouter();
  return (
    <>
      <Head>
        <title>Profile</title>
      </Head>
      <div className="profile-desc-text">
        {/* <h3>This is where the profile page contents will go.</h3> */}
      </div>
      <div>
        <Welcome />
      </div>
      <div className="profile-banner">
        <h1>Profile Page</h1>
      </div>
      <div>
        <UserProfile />
      </div>
    </>
  );
}
