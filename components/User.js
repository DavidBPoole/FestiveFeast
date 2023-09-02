import React from 'react';
import Image from 'next/image';
import { Button } from 'react-bootstrap';
import { useAuth } from '../utils/context/authContext';
import { signOut } from '../utils/auth';

export default function UserProfile() {
  const { user } = useAuth();
  return (
    <div className="user-profile">
      <h1><em><b>{user.displayName}</b></em></h1>
      <Image src={user.photoURL} alt="userURL" width="100px" height="100px" border-radius="50%" id="userProfilePhoto" />
      <h3>{user.email}</h3>
      <h3>{user.phone}</h3>
      <h3>{user.about}</h3>
      <h4>Last Signed In: {user.metadata.lastSignInTime}</h4>
      <Button
        className="profileButton"
        variant="dark"
        onClick={signOut}
        style={{
          fontFamily: 'Crimson Text', fontSize: 18, borderRadius: 50, backgroundColor: 'maroon',
        }}
      >
        Sign Out
      </Button>
    </div>
  );
}
