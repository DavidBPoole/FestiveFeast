import Head from 'next/head';
import UserProfile from '../components/User';
import WelcomeProfile from '../components/WelcomeProfile';

export default function Profile() {
  // const router = useRouter();
  return (
    <>
      <Head>
        <title>Profile</title>
      </Head>
      <div>
        <WelcomeProfile />
      </div>
      <div>
        <UserProfile />
      </div>
      &nbsp;
      <hr />
    </>
  );
}
