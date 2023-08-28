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
      <h1>Hi there!</h1>
      <p>Click the button below to start planning your next event and let's feast!</p>
      <Button type="button" size="lg" variant="info" className="signinBtn" onClick={signIn}>
        Sign In
      </Button>
    </div>
  );
}

export default Signin;
