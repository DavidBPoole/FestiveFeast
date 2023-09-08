import Head from 'next/head';
// import { Button } from 'react-bootstrap';
// import { Carousel, Image } from 'react-bootstrap';
import UserProfile from '../components/User';
import WelcomeProfile from '../components/WelcomeProfile';
// import Welcome from '../components/Welcome';
// import { signOut } from '../utils/auth';

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
