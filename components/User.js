import React from 'react';
import Image from 'next/image';
import { Button } from 'react-bootstrap';
import { useAuth } from '../utils/context/authContext';
import { signOut } from '../utils/auth';

export default function UserProfile() {
  const { user } = useAuth();
  return (
    <div className="user-profile">
      <div className="user-profile-elements"><h2><em><b>{user.displayName}</b></em></h2>
        <Image src={user.photoURL} alt="userURL" width="100px" height="100px" border-radius="50%" id="userProfilePhoto" />
        <h3>{user.email}</h3>
        <h3>{user.phone}</h3>
        <h3>{user.about}</h3>
        <h4>Last Signed In: {user.metadata.lastSignInTime}</h4>
      </div>
      <div>
        <Button
          className="profileButton"
          variant="dark"
          onClick={signOut}
          style={{
            fontSize: 18, borderRadius: 50, backgroundColor: 'maroon',
          }}
        ><b><em>Sign Out &#9916;</em></b>
        </Button>
      </div>
    </div>
  );
}
