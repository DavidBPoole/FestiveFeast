/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { Button } from 'react-bootstrap';
import { signIn } from '../utils/auth';

function Signin() {
  return (
    <div
      className="text-center d-flex flex-column justify-content-center align-content-center"
      style={{
        height: '90vh',
        padding: '30px',
        maxWidth: '400px',
        margin: '0 auto',
      }}
    >
      <div className="signin-logo">
        <img src="/FFLogoLGNoBG.png" width="150%" height="auto" alt="icon" className="nav-logo" />
      </div>
      <h1 style={{ color: 'maroon' }}>Hi there!</h1>
      <h5 className="signin-body">Click below to start planning your next event and let's feast!</h5>
      <Button type="button" size="lg" variant="warning" className="signinBtn" onClick={signIn}>
        <b><em>Sign In</em></b>
      </Button>
    </div>
  );
}

export default Signin;
