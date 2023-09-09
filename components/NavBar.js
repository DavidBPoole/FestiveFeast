/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Link from 'next/link';
import {
  Navbar,
  Container,
  Nav,
  Button,
} from 'react-bootstrap';
// import { useRouter } from 'next/router';
import { signOut } from '../utils/auth';
import SearchBar from './SearchBar';

export default function NavBar() {
  // const router = useRouter();
  return (
    <Navbar id="festivefeast-nav-outer" collapseOnSelect expand="lg" variant="light">
      <Container id="festivefeast-nav">
        <Container id="nav-left" className="nav-spacing nav-outer">
          <Link passHref href="/">
            <Navbar.Brand>
              {/* <span className="navlogo"><b><em>Festive Feast</em></b></span> */}
              <img src="/FestiveFeastLogo.png" width="90%" height="90%" alt="icon" className="nav-logo" />
            </Navbar.Brand>
          </Link>
        </Container>
        <Container id="nav-middle" className="nav-spacing">
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav id="festivefeast-nav-inner">
              <Link passHref href="/">
                <Nav.Link style={{ fontFamily: 'Playfair Display', fontSize: 25 }}><b>Home</b></Nav.Link>
              </Link>
              <Link passHref href="/events">
                <Nav.Link style={{ fontFamily: 'Playfair Display', fontSize: 25 }}><b>Events</b></Nav.Link>
              </Link>
              <Link passHref href="/supplies">
                <Nav.Link style={{ fontFamily: 'Playfair Display', fontSize: 25 }}><b>Supplies</b></Nav.Link>
              </Link>
              {/* <Link passHref href="/favorites">
                <Nav.Link style={{ fontFamily: 'Playfair Display', fontSize: 25 }}>Community STRETCH</Nav.Link>
              </Link> */}
              <Link passHref href="/myItems">
                <Nav.Link style={{ fontFamily: 'Playfair Display', fontSize: 25 }}><b>My Items</b></Nav.Link>
              </Link>
              <Link passHref href="/profile">
                <Nav.Link style={{ fontFamily: 'Playfair Display', fontSize: 25 }}><b>Profile</b></Nav.Link>
              </Link>
              {/* <Link passHref href="/profile">
                <Nav.Link style={{ fontFamily: 'Water Brush', fontSize: 25 }}>Messages STRETCH</Nav.Link>
              </Link> */}
            </Nav>
          </Navbar.Collapse>
        </Container>
        <Container id="nav-right" className="nav-outer nav-spacing">
          <SearchBar />
          <Button variant="dark" onClick={signOut} className="signoutBtn" style={{ fontSize: 12, backgroundColor: 'maroon' }}>
            <b><em>Sign Out &#9916;</em></b>
          </Button>
        </Container>
      </Container>
    </Navbar>
  );
}
