import Head from 'next/head';
import { Button } from 'react-bootstrap';
import UserProfile from '../components/User';
import Welcome from '../components/Welcome';
import { signOut } from '../utils/auth';

export default function Profile() {
  // const router = useRouter();
  return (
    <>
      <Head>
        <title>Profile</title>
      </Head>
      <div className="profile-desc-text">
        <h3>This is where the user profile page contents will go.</h3>
      </div>
      <div>
        <Welcome />
      </div>
      <div className="profile-banner">
        <h1>Profile Page</h1>
      </div>
      <div>
        <UserProfile />
        <Button variant="outline-dark" onClick={signOut} style={{ fontFamily: 'Crimson Text', fontSize: 18 }}>
          Sign Out
        </Button>
      </div>
    </>
  );
}
